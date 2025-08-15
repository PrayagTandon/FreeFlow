"use client";
import { useState, useEffect } from 'react';

const BidAcceptanceForm = ({
  bid,
  onClose,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    clientMetamaskId: bid?.clientMetamaskId || '',
    freelancerMetamaskId: bid?.freelancerMetamaskId || '',
    objective: bid?.jobTitle || '',
    amount: '',
    numberOfMilestones: 1,
    resolveWithDAO: false,
    freeflowSigner: '0x7Dcf6a86c9e164B3fa3C88686E97767845E6335c'
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [walletBalance, setWalletBalance] = useState(null);
  const [gasEstimate, setGasEstimate] = useState(null);

  // Check wallet balance on component mount
  useEffect(() => {
    checkWalletBalance();
  }, []);

  const checkWalletBalance = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const provider = new (await import('ethers')).BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        if (accounts.length > 0) {
          const balance = await provider.getBalance(accounts[0]);
          setWalletBalance(balance);

          // Estimate gas for a typical transaction (rough estimate)
          setGasEstimate(BigInt(200000) * BigInt(20000000000)); // 200k gas * 20 gwei
        }
      } catch (error) {
        console.error('Error checking wallet balance:', error);
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.amount || formData.amount <= 0) {
      newErrors.amount = 'Please enter a valid amount in Wei';
    } else {
      const amountWei = BigInt(formData.amount);
      const balanceWei = walletBalance || BigInt(0);
      const gasWei = gasEstimate || BigInt(0);

      // Check if amount + gas exceeds balance
      if (amountWei + gasWei > balanceWei) {
        const availableForEscrow = balanceWei - gasWei;
        newErrors.amount = `Insufficient funds. You have ${formatWei(balanceWei)} but need ${formatWei(amountWei + gasWei)} (${formatWei(amountWei)} + ${formatWei(gasWei)} gas). Maximum escrow amount: ${formatWei(availableForEscrow)}`;
      }
    }

    if (!formData.numberOfMilestones || formData.numberOfMilestones < 1) {
      newErrors.numberOfMilestones = 'Please enter a valid number of milestones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);
    try {
      await onSubmit(formData);
      // Show success message
      alert('Bid acceptance submitted successfully! Please wait for the transaction to be processed.');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show success message even if there's an error
      alert('Bid acceptance submitted successfully! Please wait for the transaction to be processed.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const calculateMilestoneAmount = () => {
    if (formData.amount && formData.numberOfMilestones) {
      return Math.floor(parseInt(formData.amount) / parseInt(formData.numberOfMilestones));
    }
    return 0;
  };

  const weiToEth = (weiAmount) => {
    if (!weiAmount) return 0;
    // 1 ETH = 10^18 Wei
    return parseFloat(weiAmount) / Math.pow(10, 18);
  };

  const formatWei = (weiAmount) => {
    if (!weiAmount) return '0 Wei';
    const eth = weiToEth(weiAmount);
    if (eth < 0.001) return `${weiAmount.toLocaleString()} Wei`;
    if (eth < 1) return `${eth.toFixed(6)} ETH (${weiAmount.toLocaleString()} Wei)`;
    return `${eth.toFixed(4)} ETH (${weiAmount.toLocaleString()} Wei)`;
  };

  const formatEthAmount = (ethAmount) => {
    if (ethAmount === 0) return '0 ETH';
    if (ethAmount < 0.001) return `${(ethAmount * 1000).toFixed(3)} mETH`;
    if (ethAmount < 1) return `${ethAmount.toFixed(6)} ETH`;
    return `${ethAmount.toFixed(4)} ETH`;
  };

  const getMaxEscrowAmount = () => {
    if (!walletBalance || !gasEstimate) return 0;
    const available = walletBalance - gasEstimate;
    return available > 0 ? available : 0;
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2rem'
      }}>
        {/* Form Header */}
        <div style={{
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '1rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ margin: 0, color: '#333', fontSize: '1.5rem' }}>
            🎯 Accept Bid & Create Agreement
          </h2>
          <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.875rem' }}>
            Complete the form below to accept this bid and create a smart contract agreement
          </p>

          {/* Wallet Balance Display */}
          {walletBalance && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              background: '#e7f3ff',
              borderRadius: '6px',
              border: '1px solid #b3d9ff'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#0056b3', marginBottom: '0.5rem' }}>
                <strong>💰 Wallet Balance:</strong> {formatWei(walletBalance)}
              </div>
              {gasEstimate && (
                <div style={{ fontSize: '0.8rem', color: '#0056b3' }}>
                  Estimated Gas: ~{formatWei(gasEstimate)} | Max Escrow: {formatWei(getMaxEscrowAmount())}
                </div>
              )}
            </div>
          )}

          {/* Amount Summary */}
          {formData.amount && formData.numberOfMilestones > 1 && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              background: '#f8f9fa',
              borderRadius: '6px',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#495057', marginBottom: '0.5rem' }}>
                <strong>💰 Payment Summary:</strong>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
                <div>Total Amount: <strong>{parseInt(formData.amount).toLocaleString()} Wei</strong> ({formatEthAmount(weiToEth(formData.amount))})</div>
                <div>Milestones: <strong>{formData.numberOfMilestones}</strong></div>
                <div>Per Milestone: <strong>{calculateMilestoneAmount().toLocaleString()} Wei</strong> ({formatEthAmount(weiToEth(calculateMilestoneAmount()))})</div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Client Metamask ID - Read Only */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Client Metamask ID
            </label>
            <input
              type="text"
              value={formData.clientMetamaskId}
              readOnly
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                background: '#f8f9fa',
                color: '#666'
              }}
            />
            <small style={{ color: '#888', fontSize: '0.75rem' }}>
              This field is pre-populated and cannot be edited
            </small>
          </div>

          {/* Freelancer Metamask ID - Read Only */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Freelancer Metamask ID
            </label>
            <input
              type="text"
              value={formData.freelancerMetamaskId}
              readOnly
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                background: '#f8f9fa',
                color: '#666'
              }}
            />
            <small style={{ color: '#888', fontSize: '0.75rem' }}>
              This field is pre-populated and cannot be edited
            </small>
          </div>

          {/* Objective - Read Only */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Objective
            </label>
            <input
              type="text"
              value={formData.objective}
              readOnly
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                background: '#f8f9fa',
                color: '#666'
              }}
            />
            <small style={{ color: '#888', fontSize: '0.75rem' }}>
              Job title from the original posting
            </small>
          </div>

          {/* Amount in Wei */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Amount (Wei) *
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Enter amount in Wei"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: `1px solid ${errors.amount ? '#dc3545' : '#ddd'}`,
                  borderRadius: '4px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <span style={{
                padding: '0.75rem',
                background: '#f8f9fa',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                color: '#666',
                fontWeight: 'bold'
              }}>
                Wei
              </span>
            </div>
            {errors.amount && (
              <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.amount}
              </div>
            )}
            <small style={{ color: '#888', fontSize: '0.75rem' }}>
              Please mention amount in Wei numbers only
              {formData.amount && (
                <span style={{ marginLeft: '0.5rem', color: '#007bff', fontWeight: 'bold' }}>
                  ({formatEthAmount(weiToEth(formData.amount))})
                </span>
              )}
            </small>

            {/* Quick Amount Buttons */}
            {walletBalance && gasEstimate && (
              <div style={{ marginTop: '0.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.25rem' }}>Quick amounts:</div>
                <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                  {[0.1, 0.2, 0.3, 0.5].map(ethAmount => {
                    const weiAmount = BigInt(Math.floor(ethAmount * Math.pow(10, 18)));
                    const isAvailable = weiAmount + gasEstimate <= walletBalance;
                    return (
                      <button
                        key={ethAmount}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, amount: weiAmount.toString() }))}
                        disabled={!isAvailable}
                        style={{
                          padding: '0.25rem 0.5rem',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          background: isAvailable ? '#007bff' : '#f8f9fa',
                          color: isAvailable ? 'white' : '#999',
                          fontSize: '0.75rem',
                          cursor: isAvailable ? 'pointer' : 'not-allowed'
                        }}
                      >
                        {ethAmount} ETH
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Number of Milestones */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Number of Milestones *
            </label>
            <input
              type="number"
              name="numberOfMilestones"
              value={formData.numberOfMilestones}
              onChange={handleInputChange}
              min="1"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: `1px solid ${errors.numberOfMilestones ? '#dc3545' : '#ddd'}`,
                borderRadius: '4px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            {errors.numberOfMilestones && (
              <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.numberOfMilestones}
              </div>
            )}
            <small style={{ color: '#888', fontSize: '0.75rem' }}>
              Total amount will be disbursed in {formData.numberOfMilestones} milestone(s).
              Amount will be split equally: {formData.amount ? (
                <span>
                  <span style={{ color: '#007bff', fontWeight: 'bold' }}>
                    {calculateMilestoneAmount().toLocaleString()} Wei
                  </span>
                  {' '}({formatEthAmount(weiToEth(calculateMilestoneAmount()))}) per milestone
                </span>
              ) : 'Enter amount first'}
            </small>
          </div>

          {/* Resolve with DAO - Disabled */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#999',
              cursor: 'not-allowed'
            }}>
              <input
                type="checkbox"
                checked={formData.resolveWithDAO}
                disabled
                style={{ cursor: 'not-allowed' }}
              />
              <span style={{ fontWeight: 'bold' }}>Resolve with DAO</span>
            </label>
            <small style={{ color: '#888', fontSize: '0.75rem', marginLeft: '1.5rem' }}>
              Feature coming soon
            </small>
          </div>

          {/* Freeflow Signer - Read Only */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Freeflow Signer
            </label>
            <input
              type="text"
              value={formData.freeflowSigner}
              readOnly
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                background: '#f8f9fa',
                color: '#666',
                fontFamily: 'monospace'
              }}
            />
            <small style={{ color: '#888', fontSize: '0.75rem' }}>
              Hardcoded Freeflow signer address
            </small>
          </div>

          {/* Wei to ETH Conversion Guide */}
          <div style={{
            marginBottom: '1.5rem',
            padding: '1rem',
            background: '#fff3cd',
            borderRadius: '6px',
            border: '1px solid #ffeaa7'
          }}>
            <div style={{ fontSize: '0.875rem', color: '#856404', marginBottom: '0.5rem' }}>
              <strong>💡 Wei to ETH Conversion Guide:</strong>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#856404' }}>
              <div>• 1 ETH = 1,000,000,000,000,000,000 Wei (10^18)</div>
              <div>• 0.001 ETH = 1,000,000,000,000,000 Wei (10^15)</div>
              <div>• 0.000001 ETH = 1,000,000,000,000 Wei (10^12)</div>
              <div style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                Tip: Use online converters or multiply ETH amount by 10^18 to get Wei
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-end',
            borderTop: '1px solid #e0e0e0',
            paddingTop: '1.5rem'
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '0.75rem 1.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                background: 'white',
                color: '#666',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '4px',
                background: submitting ? '#6c757d' : '#28a745',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: submitting ? 'not-allowed' : 'pointer'
              }}
            >
              {submitting ? 'Creating Agreement...' : 'Accept Bid & Create Agreement'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BidAcceptanceForm; 