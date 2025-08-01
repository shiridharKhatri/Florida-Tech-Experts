
import { useState } from "react"
import { CreditCard, Download, Eye, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"
import DashboardLayout from "../components/DashboardLayout"
import "./PaymentHistory.css"

const PaymentHistory = () => {
  // Mock payment data - in real app, this would come from API
  const [payments] = useState([
    {
      id: 1,
      projectTitle: "E-commerce Website Redesign",
      amount: 5000,
      status: "completed",
      paymentDate: "2024-02-28",
      escrowDate: "2024-01-15",
      releaseDate: "2024-02-28",
      method: "Credit Card",
      transactionId: "TXN-2024-001",
      invoice: "INV-2024-001.pdf",
    },
    {
      id: 2,
      projectTitle: "Landing Page Optimization",
      amount: 2500,
      status: "in-escrow",
      paymentDate: null,
      escrowDate: "2024-02-01",
      releaseDate: null,
      method: "Bank Transfer",
      transactionId: "TXN-2024-002",
      invoice: "INV-2024-002.pdf",
    },
    {
      id: 3,
      projectTitle: "SEO Audit & Implementation",
      amount: 1500,
      status: "pending",
      paymentDate: null,
      escrowDate: null,
      releaseDate: null,
      method: "Credit Card",
      transactionId: null,
      invoice: "INV-2024-003.pdf",
    },
    {
      id: 4,
      projectTitle: "Mobile App Development",
      amount: 8000,
      status: "completed",
      paymentDate: "2024-01-30",
      escrowDate: "2023-12-15",
      releaseDate: "2024-01-30",
      method: "Credit Card",
      transactionId: "TXN-2024-004",
      invoice: "INV-2024-004.pdf",
    },
  ])

  const [filter, setFilter] = useState("all")

  const filteredPayments = payments.filter((payment) => {
    if (filter === "all") return true
    return payment.status === filter
  })

  const totalPaid = payments.filter((p) => p.status === "completed").reduce((sum, p) => sum + p.amount, 0)

  const totalInEscrow = payments.filter((p) => p.status === "in-escrow").reduce((sum, p) => sum + p.amount, 0)

  const totalPending = payments.filter((p) => p.status === "pending").reduce((sum, p) => sum + p.amount, 0)

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={16} />
      case "in-escrow":
        return <Clock size={16} />
      case "pending":
        return <AlertCircle size={16} />
      default:
        return <AlertCircle size={16} />
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "status-completed"
      case "in-escrow":
        return "status-in-progress"
      case "pending":
        return "status-pending"
      default:
        return "status-pending"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Payment Released"
      case "in-escrow":
        return "Funds in Escrow"
      case "pending":
        return "Payment Pending"
      default:
        return "Unknown"
    }
  }

  return (
    <DashboardLayout>
      <div className="payment-history">
        <div className="page-header">
          <h1>Payment History</h1>
          <p>Track all your payments, escrow funds, and transaction history</p>
        </div>

        {/* Payment Summary */}
        <div className="payment-summary">
          <div className="summary-card completed">
            <div className="summary-icon">
              <CheckCircle size={24} />
            </div>
            <div className="summary-content">
              <div className="summary-amount">${totalPaid.toLocaleString()}</div>
              <div className="summary-label">Total Paid</div>
            </div>
          </div>

          <div className="summary-card escrow">
            <div className="summary-icon">
              <Clock size={24} />
            </div>
            <div className="summary-content">
              <div className="summary-amount">${totalInEscrow.toLocaleString()}</div>
              <div className="summary-label">In Escrow</div>
            </div>
          </div>

          <div className="summary-card pending">
            <div className="summary-icon">
              <AlertCircle size={24} />
            </div>
            <div className="summary-content">
              <div className="summary-amount">${totalPending.toLocaleString()}</div>
              <div className="summary-label">Pending</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="payment-filters">
          <div className="filter-buttons">
            <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
              All Payments
            </button>
            <button
              className={`filter-btn ${filter === "completed" ? "active" : ""}`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
            <button
              className={`filter-btn ${filter === "in-escrow" ? "active" : ""}`}
              onClick={() => setFilter("in-escrow")}
            >
              In Escrow
            </button>
            <button
              className={`filter-btn ${filter === "pending" ? "active" : ""}`}
              onClick={() => setFilter("pending")}
            >
              Pending
            </button>
          </div>

          <button className="btn btn-outline">
            <Download size={16} />
            Export Report
          </button>
        </div>

        {/* Payments Table */}
        <div className="payments-table">
          <div className="table-header">
            <div>Project</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Escrow Date</div>
            <div>Payment Date</div>
            <div>Method</div>
            <div>Actions</div>
          </div>

          {filteredPayments.map((payment) => (
            <div key={payment.id} className="table-row">
              <div className="project-cell">
                <div className="project-title">{payment.projectTitle}</div>
                {payment.transactionId && <div className="transaction-id">ID: {payment.transactionId}</div>}
              </div>

              <div className="amount-cell">
                <span className="amount">${payment.amount.toLocaleString()}</span>
              </div>

              <div className="status-cell">
                <div className={`status-badge ${getStatusClass(payment.status)}`}>
                  {getStatusIcon(payment.status)}
                  <span>{getStatusText(payment.status)}</span>
                </div>
              </div>

              <div className="date-cell">
                {payment.escrowDate ? (
                  <div className="date-info">
                    <Calendar size={14} />
                    <span>{new Date(payment.escrowDate).toLocaleDateString()}</span>
                  </div>
                ) : (
                  <span className="no-date">-</span>
                )}
              </div>

              <div className="date-cell">
                {payment.paymentDate ? (
                  <div className="date-info">
                    <Calendar size={14} />
                    <span>{new Date(payment.paymentDate).toLocaleDateString()}</span>
                  </div>
                ) : (
                  <span className="no-date">Pending</span>
                )}
              </div>

              <div className="method-cell">
                <div className="payment-method">
                  <CreditCard size={14} />
                  <span>{payment.method}</span>
                </div>
              </div>

              <div className="actions-cell">
                <button className="btn-icon" title="View Details">
                  <Eye size={16} />
                </button>
                <button className="btn-icon" title="Download Invoice">
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPayments.length === 0 && (
          <div className="empty-state">
            <CreditCard size={48} />
            <h3>No payments found</h3>
            <p>No payments match your current filter criteria.</p>
          </div>
        )}

        {/* Payment Information */}
        <div className="payment-info">
          <div className="info-card">
            <h3>How Payments Work</h3>
            <div className="info-steps">
              <div className="info-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Secure Escrow</h4>
                  <p>Your payment is held securely in escrow when the project begins</p>
                </div>
              </div>
              <div className="info-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Project Completion</h4>
                  <p>We work on your project according to the agreed timeline and milestones</p>
                </div>
              </div>
              <div className="info-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Satisfaction & Release</h4>
                  <p>Payment is released only when you're completely satisfied with the results</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Payment Security</h3>
            <div className="security-features">
              <div className="security-item">
                <CheckCircle size={20} />
                <span>256-bit SSL encryption</span>
              </div>
              <div className="security-item">
                <CheckCircle size={20} />
                <span>PCI DSS compliant</span>
              </div>
              <div className="security-item">
                <CheckCircle size={20} />
                <span>Secure escrow system</span>
              </div>
              <div className="security-item">
                <CheckCircle size={20} />
                <span>Fraud protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default PaymentHistory
