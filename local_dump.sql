--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: dispute_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.dispute_status AS ENUM (
    'open',
    'under_review',
    'resolved',
    'rejected'
);


ALTER TYPE public.dispute_status OWNER TO postgres;

--
-- Name: message_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.message_type AS ENUM (
    'text',
    'file',
    'system'
);


ALTER TYPE public.message_type OWNER TO postgres;

--
-- Name: milestone_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.milestone_status AS ENUM (
    'pending',
    'in_progress',
    'completed',
    'approved',
    'disputed'
);


ALTER TYPE public.milestone_status OWNER TO postgres;

--
-- Name: payment_method; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.payment_method AS ENUM (
    'Crypto',
    'Stripe',
    'Wallet',
    'BankTransfer'
);


ALTER TYPE public.payment_method OWNER TO postgres;

--
-- Name: payment_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.payment_status AS ENUM (
    'pending',
    'completed',
    'failed',
    'refunded'
);


ALTER TYPE public.payment_status OWNER TO postgres;

--
-- Name: payment_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.payment_type AS ENUM (
    'milestone',
    'full',
    'partial',
    'refund'
);


ALTER TYPE public.payment_type OWNER TO postgres;

--
-- Name: proposal_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.proposal_status AS ENUM (
    'pending',
    'accepted',
    'rejected'
);


ALTER TYPE public.proposal_status OWNER TO postgres;

--
-- Name: stake_purpose; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.stake_purpose AS ENUM (
    'governance',
    'moderation',
    'reputation'
);


ALTER TYPE public.stake_purpose OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client (
    id integer NOT NULL,
    cognitoid character varying(100) NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    metamaskid character varying(100)
);


ALTER TABLE public.client OWNER TO postgres;

--
-- Name: client_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.client_id_seq OWNER TO postgres;

--
-- Name: client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.client_id_seq OWNED BY public.client.id;


--
-- Name: disputes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.disputes (
    id integer NOT NULL,
    contractid integer,
    milestoneid integer,
    raisedby integer NOT NULL,
    againstuserid integer NOT NULL,
    description text,
    status public.dispute_status DEFAULT 'open'::public.dispute_status,
    resolution text,
    resolutionby integer,
    evidenceurls text[],
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    resolvedat timestamp without time zone
);


ALTER TABLE public.disputes OWNER TO postgres;

--
-- Name: disputes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.disputes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.disputes_id_seq OWNER TO postgres;

--
-- Name: disputes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.disputes_id_seq OWNED BY public.disputes.id;


--
-- Name: freelancer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.freelancer (
    id integer NOT NULL,
    cognitoid character varying(100) NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    metamaskid character varying(100)
);


ALTER TABLE public.freelancer OWNER TO postgres;

--
-- Name: freelancer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.freelancer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.freelancer_id_seq OWNER TO postgres;

--
-- Name: freelancer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.freelancer_id_seq OWNED BY public.freelancer.id;


--
-- Name: jobposted; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobposted (
    id integer NOT NULL,
    clientid integer,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    tags text[],
    location character varying(100),
    joblevel character varying(50),
    budget integer,
    contracttohire boolean,
    qualificationspreferred text,
    postingtime time without time zone,
    postingdate date,
    validtill date,
    companyname character varying(100),
    customizable boolean DEFAULT false,
    photourls text[]
);


ALTER TABLE public.jobposted OWNER TO postgres;

--
-- Name: jobposted_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jobposted_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.jobposted_id_seq OWNER TO postgres;

--
-- Name: jobposted_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jobposted_id_seq OWNED BY public.jobposted.id;


--
-- Name: message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message (
    id integer NOT NULL,
    senderid integer NOT NULL,
    receiverid integer NOT NULL,
    jobid integer,
    messagetext text,
    messagetype public.message_type DEFAULT 'text'::public.message_type,
    attachmenturl character varying(255),
    "timestamp" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    isread boolean DEFAULT false,
    issystem boolean DEFAULT false
);


ALTER TABLE public.message OWNER TO postgres;

--
-- Name: message_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.message_id_seq OWNER TO postgres;

--
-- Name: message_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.message_id_seq OWNED BY public.message.id;


--
-- Name: milestones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.milestones (
    id integer NOT NULL,
    jobid integer,
    freelancerid integer,
    title character varying(255) NOT NULL,
    description text,
    duedate timestamp without time zone,
    amount integer NOT NULL,
    status public.milestone_status DEFAULT 'pending'::public.milestone_status
);


ALTER TABLE public.milestones OWNER TO postgres;

--
-- Name: milestones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.milestones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.milestones_id_seq OWNER TO postgres;

--
-- Name: milestones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.milestones_id_seq OWNED BY public.milestones.id;


--
-- Name: nftcredential; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nftcredential (
    id integer NOT NULL,
    freelancerid integer,
    jobid integer,
    tokenid integer,
    rating integer,
    testimonial text,
    isminted boolean DEFAULT false,
    txhash character varying(255),
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT nftcredential_rating_check CHECK (((rating >= 1) AND (rating <= 5)))
);


ALTER TABLE public.nftcredential OWNER TO postgres;

--
-- Name: nftcredential_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nftcredential_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.nftcredential_id_seq OWNER TO postgres;

--
-- Name: nftcredential_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nftcredential_id_seq OWNED BY public.nftcredential.id;


--
-- Name: paymentsescrow; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.paymentsescrow (
    id integer NOT NULL,
    contractid integer,
    milestoneid integer,
    type public.payment_type NOT NULL,
    status public.payment_status DEFAULT 'pending'::public.payment_status,
    paymentmethod public.payment_method,
    txhash character varying(255),
    amount integer NOT NULL,
    initiatedby integer,
    receiverid integer,
    notes text,
    "timestamp" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    confirmedat timestamp without time zone
);


ALTER TABLE public.paymentsescrow OWNER TO postgres;

--
-- Name: paymentsescrow_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.paymentsescrow_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.paymentsescrow_id_seq OWNER TO postgres;

--
-- Name: paymentsescrow_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.paymentsescrow_id_seq OWNED BY public.paymentsescrow.id;


--
-- Name: proposals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proposals (
    id integer NOT NULL,
    jobid integer,
    freelancerid integer,
    coverletter text,
    budgetquoted integer,
    proposedtimeline character varying(100),
    status public.proposal_status DEFAULT 'pending'::public.proposal_status,
    submittedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.proposals OWNER TO postgres;

--
-- Name: proposals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proposals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.proposals_id_seq OWNER TO postgres;

--
-- Name: proposals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proposals_id_seq OWNED BY public.proposals.id;


--
-- Name: smartcontract; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.smartcontract (
    id integer NOT NULL,
    jobid integer,
    freelancerid integer,
    clientid integer,
    startdate timestamp without time zone NOT NULL,
    enddate timestamp without time zone,
    escrowamount integer NOT NULL,
    smartcontractaddress character varying(255),
    isactive boolean DEFAULT true,
    iscompleted boolean DEFAULT false,
    isdisputed boolean DEFAULT false,
    platformfee integer DEFAULT 0,
    paymentmethod character varying(50),
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.smartcontract OWNER TO postgres;

--
-- Name: smartcontract_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.smartcontract_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.smartcontract_id_seq OWNER TO postgres;

--
-- Name: smartcontract_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.smartcontract_id_seq OWNED BY public.smartcontract.id;


--
-- Name: staking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staking (
    id integer NOT NULL,
    userid integer NOT NULL,
    stakeamount integer NOT NULL,
    stakepurpose public.stake_purpose DEFAULT 'governance'::public.stake_purpose,
    trustscore double precision,
    resumescore integer,
    isvalidator boolean DEFAULT false,
    startdate timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    enddate timestamp without time zone,
    active boolean DEFAULT true,
    CONSTRAINT staking_trustscore_check CHECK (((trustscore >= (0.0)::double precision) AND (trustscore <= (1.0)::double precision)))
);


ALTER TABLE public.staking OWNER TO postgres;

--
-- Name: staking_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.staking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.staking_id_seq OWNER TO postgres;

--
-- Name: staking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.staking_id_seq OWNED BY public.staking.id;


--
-- Name: client id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client ALTER COLUMN id SET DEFAULT nextval('public.client_id_seq'::regclass);


--
-- Name: disputes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disputes ALTER COLUMN id SET DEFAULT nextval('public.disputes_id_seq'::regclass);


--
-- Name: freelancer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.freelancer ALTER COLUMN id SET DEFAULT nextval('public.freelancer_id_seq'::regclass);


--
-- Name: jobposted id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobposted ALTER COLUMN id SET DEFAULT nextval('public.jobposted_id_seq'::regclass);


--
-- Name: message id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message ALTER COLUMN id SET DEFAULT nextval('public.message_id_seq'::regclass);


--
-- Name: milestones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.milestones ALTER COLUMN id SET DEFAULT nextval('public.milestones_id_seq'::regclass);


--
-- Name: nftcredential id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nftcredential ALTER COLUMN id SET DEFAULT nextval('public.nftcredential_id_seq'::regclass);


--
-- Name: paymentsescrow id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paymentsescrow ALTER COLUMN id SET DEFAULT nextval('public.paymentsescrow_id_seq'::regclass);


--
-- Name: proposals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proposals ALTER COLUMN id SET DEFAULT nextval('public.proposals_id_seq'::regclass);


--
-- Name: smartcontract id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.smartcontract ALTER COLUMN id SET DEFAULT nextval('public.smartcontract_id_seq'::regclass);


--
-- Name: staking id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staking ALTER COLUMN id SET DEFAULT nextval('public.staking_id_seq'::regclass);


--
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.client (id, cognitoid, name, email, password, metamaskid) FROM stdin;
\.


--
-- Data for Name: disputes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.disputes (id, contractid, milestoneid, raisedby, againstuserid, description, status, resolution, resolutionby, evidenceurls, createdat, resolvedat) FROM stdin;
\.


--
-- Data for Name: freelancer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.freelancer (id, cognitoid, name, email, password, metamaskid) FROM stdin;
\.


--
-- Data for Name: jobposted; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jobposted (id, clientid, name, description, tags, location, joblevel, budget, contracttohire, qualificationspreferred, postingtime, postingdate, validtill, companyname, customizable, photourls) FROM stdin;
\.


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.message (id, senderid, receiverid, jobid, messagetext, messagetype, attachmenturl, "timestamp", isread, issystem) FROM stdin;
\.


--
-- Data for Name: milestones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.milestones (id, jobid, freelancerid, title, description, duedate, amount, status) FROM stdin;
\.


--
-- Data for Name: nftcredential; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nftcredential (id, freelancerid, jobid, tokenid, rating, testimonial, isminted, txhash, createdat) FROM stdin;
\.


--
-- Data for Name: paymentsescrow; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.paymentsescrow (id, contractid, milestoneid, type, status, paymentmethod, txhash, amount, initiatedby, receiverid, notes, "timestamp", confirmedat) FROM stdin;
\.


--
-- Data for Name: proposals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proposals (id, jobid, freelancerid, coverletter, budgetquoted, proposedtimeline, status, submittedat) FROM stdin;
\.


--
-- Data for Name: smartcontract; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.smartcontract (id, jobid, freelancerid, clientid, startdate, enddate, escrowamount, smartcontractaddress, isactive, iscompleted, isdisputed, platformfee, paymentmethod, createdat, updatedat) FROM stdin;
\.


--
-- Data for Name: staking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.staking (id, userid, stakeamount, stakepurpose, trustscore, resumescore, isvalidator, startdate, enddate, active) FROM stdin;
\.


--
-- Name: client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_id_seq', 1, false);


--
-- Name: disputes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.disputes_id_seq', 1, false);


--
-- Name: freelancer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.freelancer_id_seq', 1, false);


--
-- Name: jobposted_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jobposted_id_seq', 1, false);


--
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_id_seq', 1, false);


--
-- Name: milestones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.milestones_id_seq', 1, false);


--
-- Name: nftcredential_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nftcredential_id_seq', 1, false);


--
-- Name: paymentsescrow_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.paymentsescrow_id_seq', 1, false);


--
-- Name: proposals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proposals_id_seq', 1, false);


--
-- Name: smartcontract_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.smartcontract_id_seq', 1, false);


--
-- Name: staking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.staking_id_seq', 1, false);


--
-- Name: client client_cognitoid_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_cognitoid_key UNIQUE (cognitoid);


--
-- Name: client client_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_email_key UNIQUE (email);


--
-- Name: client client_metamaskid_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_metamaskid_key UNIQUE (metamaskid);


--
-- Name: client client_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);


--
-- Name: disputes disputes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disputes
    ADD CONSTRAINT disputes_pkey PRIMARY KEY (id);


--
-- Name: freelancer freelancer_cognitoid_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.freelancer
    ADD CONSTRAINT freelancer_cognitoid_key UNIQUE (cognitoid);


--
-- Name: freelancer freelancer_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.freelancer
    ADD CONSTRAINT freelancer_email_key UNIQUE (email);


--
-- Name: freelancer freelancer_metamaskid_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.freelancer
    ADD CONSTRAINT freelancer_metamaskid_key UNIQUE (metamaskid);


--
-- Name: freelancer freelancer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.freelancer
    ADD CONSTRAINT freelancer_pkey PRIMARY KEY (id);


--
-- Name: jobposted jobposted_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobposted
    ADD CONSTRAINT jobposted_pkey PRIMARY KEY (id);


--
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- Name: milestones milestones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.milestones
    ADD CONSTRAINT milestones_pkey PRIMARY KEY (id);


--
-- Name: nftcredential nftcredential_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nftcredential
    ADD CONSTRAINT nftcredential_pkey PRIMARY KEY (id);


--
-- Name: nftcredential nftcredential_tokenid_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nftcredential
    ADD CONSTRAINT nftcredential_tokenid_key UNIQUE (tokenid);


--
-- Name: paymentsescrow paymentsescrow_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paymentsescrow
    ADD CONSTRAINT paymentsescrow_pkey PRIMARY KEY (id);


--
-- Name: proposals proposals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proposals
    ADD CONSTRAINT proposals_pkey PRIMARY KEY (id);


--
-- Name: smartcontract smartcontract_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.smartcontract
    ADD CONSTRAINT smartcontract_pkey PRIMARY KEY (id);


--
-- Name: smartcontract smartcontract_smartcontractaddress_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.smartcontract
    ADD CONSTRAINT smartcontract_smartcontractaddress_key UNIQUE (smartcontractaddress);


--
-- Name: staking staking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staking
    ADD CONSTRAINT staking_pkey PRIMARY KEY (id);


--
-- Name: disputes disputes_contractid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disputes
    ADD CONSTRAINT disputes_contractid_fkey FOREIGN KEY (contractid) REFERENCES public.smartcontract(id) ON DELETE CASCADE;


--
-- Name: disputes disputes_milestoneid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disputes
    ADD CONSTRAINT disputes_milestoneid_fkey FOREIGN KEY (milestoneid) REFERENCES public.milestones(id) ON DELETE SET NULL;


--
-- Name: jobposted jobposted_clientid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobposted
    ADD CONSTRAINT jobposted_clientid_fkey FOREIGN KEY (clientid) REFERENCES public.client(id) ON DELETE CASCADE;


--
-- Name: message message_jobid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_jobid_fkey FOREIGN KEY (jobid) REFERENCES public.jobposted(id) ON DELETE CASCADE;


--
-- Name: milestones milestones_freelancerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.milestones
    ADD CONSTRAINT milestones_freelancerid_fkey FOREIGN KEY (freelancerid) REFERENCES public.freelancer(id) ON DELETE CASCADE;


--
-- Name: milestones milestones_jobid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.milestones
    ADD CONSTRAINT milestones_jobid_fkey FOREIGN KEY (jobid) REFERENCES public.jobposted(id) ON DELETE CASCADE;


--
-- Name: nftcredential nftcredential_freelancerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nftcredential
    ADD CONSTRAINT nftcredential_freelancerid_fkey FOREIGN KEY (freelancerid) REFERENCES public.freelancer(id) ON DELETE CASCADE;


--
-- Name: nftcredential nftcredential_jobid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nftcredential
    ADD CONSTRAINT nftcredential_jobid_fkey FOREIGN KEY (jobid) REFERENCES public.jobposted(id) ON DELETE CASCADE;


--
-- Name: paymentsescrow paymentsescrow_contractid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paymentsescrow
    ADD CONSTRAINT paymentsescrow_contractid_fkey FOREIGN KEY (contractid) REFERENCES public.smartcontract(id) ON DELETE CASCADE;


--
-- Name: paymentsescrow paymentsescrow_milestoneid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paymentsescrow
    ADD CONSTRAINT paymentsescrow_milestoneid_fkey FOREIGN KEY (milestoneid) REFERENCES public.milestones(id) ON DELETE SET NULL;


--
-- Name: paymentsescrow paymentsescrow_receiverid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paymentsescrow
    ADD CONSTRAINT paymentsescrow_receiverid_fkey FOREIGN KEY (receiverid) REFERENCES public.freelancer(id) ON DELETE SET NULL;


--
-- Name: proposals proposals_freelancerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proposals
    ADD CONSTRAINT proposals_freelancerid_fkey FOREIGN KEY (freelancerid) REFERENCES public.freelancer(id) ON DELETE CASCADE;


--
-- Name: proposals proposals_jobid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proposals
    ADD CONSTRAINT proposals_jobid_fkey FOREIGN KEY (jobid) REFERENCES public.jobposted(id) ON DELETE CASCADE;


--
-- Name: smartcontract smartcontract_clientid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.smartcontract
    ADD CONSTRAINT smartcontract_clientid_fkey FOREIGN KEY (clientid) REFERENCES public.client(id) ON DELETE CASCADE;


--
-- Name: smartcontract smartcontract_freelancerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.smartcontract
    ADD CONSTRAINT smartcontract_freelancerid_fkey FOREIGN KEY (freelancerid) REFERENCES public.freelancer(id) ON DELETE CASCADE;


--
-- Name: smartcontract smartcontract_jobid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.smartcontract
    ADD CONSTRAINT smartcontract_jobid_fkey FOREIGN KEY (jobid) REFERENCES public.jobposted(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

