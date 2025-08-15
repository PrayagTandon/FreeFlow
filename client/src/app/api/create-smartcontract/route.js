import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function POST(request) {
	try {
		const body = await request.json();
		const {
			jobid,
			freelancerid,
			clientid,
			startdate, // ISO string or timestamp
			enddate, // optional
			escrowamount, // integer (wei)
			smartcontractaddress,
			isactive = true,
			iscompleted = false,
			isdisputed = false,
			platformfee = 0,
			paymentmethod = 'crypto',
			terminationreason = null
		} = body;

		if (!jobid || !freelancerid || !clientid || !startdate || !escrowamount || !smartcontractaddress) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
		}

		const client = await pool.connect();
		try {
			await client.query('BEGIN');

			// Ensure table exists with constraints specified
			await client.query(`
				CREATE TABLE IF NOT EXISTS smartcontract (
					id SERIAL PRIMARY KEY,
					jobid INTEGER,
					freelancerid VARCHAR,
					clientid VARCHAR,
					startdate TIMESTAMP NOT NULL,
					enddate TIMESTAMP,
					escrowamount INTEGER NOT NULL,
					smartcontractaddress VARCHAR(255) UNIQUE,
					isactive BOOLEAN DEFAULT true,
					iscompleted BOOLEAN DEFAULT false,
					isdisputed BOOLEAN DEFAULT false,
					platformfee INTEGER DEFAULT 0,
					paymentmethod VARCHAR(50),
					terminationreason TEXT,
					createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
					updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
				);
			`);

			// Constraints (add if not exists best-effort)
			await client.query(`
				DO $$ BEGIN
					ALTER TABLE smartcontract
						ADD CONSTRAINT smartcontract_clientid_fkey FOREIGN KEY (clientid) REFERENCES client(metamaskid) ON DELETE CASCADE;
				EXCEPTION WHEN duplicate_object THEN NULL; END $$;
			`);
			await client.query(`
				DO $$ BEGIN
					ALTER TABLE smartcontract
						ADD CONSTRAINT smartcontract_freelancerid_fkey FOREIGN KEY (freelancerid) REFERENCES freelancer(metamaskid) ON DELETE CASCADE;
				EXCEPTION WHEN duplicate_object THEN NULL; END $$;
			`);
			await client.query(`
				DO $$ BEGIN
					ALTER TABLE smartcontract
						ADD CONSTRAINT smartcontract_jobid_fkey FOREIGN KEY (jobid) REFERENCES jobposted(id) ON DELETE CASCADE;
				EXCEPTION WHEN duplicate_object THEN NULL; END $$;
			`);
			await client.query(`
				DO $$ BEGIN
					ALTER TABLE smartcontract
						ADD CONSTRAINT smartcontract_smartcontractaddress_key UNIQUE (smartcontractaddress);
				EXCEPTION WHEN duplicate_object THEN NULL; END $$;
			`);

			const insert = `
				INSERT INTO smartcontract (
					jobid, freelancerid, clientid, startdate, enddate, escrowamount, smartcontractaddress,
					isactive, iscompleted, isdisputed, platformfee, paymentmethod, terminationreason
				) VALUES (
					$1, $2, $3, $4, $5, $6, $7,
					$8, $9, $10, $11, $12, $13
				) RETURNING *;
			`;

			const params = [
				jobid,
				freelancerid,
				clientid,
				new Date(startdate),
				enddate ? new Date(enddate) : null,
				parseInt(escrowamount, 10),
				smartcontractaddress,
				Boolean(isactive),
				Boolean(iscompleted),
				Boolean(isdisputed),
				parseInt(platformfee, 10) || 0,
				paymentmethod,
				terminationreason
			];

			const result = await client.query(insert, params);
			await client.query('COMMIT');
			return NextResponse.json({ smartcontract: result.rows[0] }, { status: 201 });
		} catch (e) {
			await client.query('ROLLBACK');
			return NextResponse.json({ error: 'Failed to store contract', details: e.message }, { status: 500 });
		} finally {
			client.release();
		}
	} catch (e) {
		return NextResponse.json({ error: 'Invalid request', details: e.message }, { status: 400 });
	}
}
