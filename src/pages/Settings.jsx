"use client"

import { useState } from "react"
import { User, Mail, Phone, Building, Lock, Bell, CreditCard, Shield, Save } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import DashboardLayout from "../components/DashboardLayout"
import "./Settings.css"

const Settings = () => {
  const { user } = useAuth()

  const [activeTab, setActiveTab] = useState("profile")
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    company: user?.company || "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    bio: "",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    projectUpdates: true,
    paymentAlerts: true,
    marketingEmails: false,
    smsNotifications: false,
  })

  const [paymentMethods] = useState([
    {
      id: 1,
      type: "Credit Card",
      last4: "4242",
      brand: "Visa",
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true,
    },
    {
      id: 2,
      type: "Bank Account",
      last4: "1234",
      brand: "Chase Bank",
      isDefault: false,
    },
  ])

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNotificationChange = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    })
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    // In real app, this would update user profile via API
    console.log("Updating profile:", profileData)
    alert("Profile updated successfully!")
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!")
      return
    }
    // In real app, this would update password via API
    console.log("Updating password")
    alert("Password updated successfully!")
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  const handleNotificationSubmit = (e) => {
    e.preventDefault()
    // In real app, this would update notification preferences via API
    console.log("Updating notifications:", notifications)
    alert("Notification preferences updated!")
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "billing", label: "Billing", icon: CreditCard },
  ]

  return (
    <DashboardLayout>
      <div className="settings-page">
        <div className="page-header">
          <h1>Settings</h1>
          <p>Manage your account settings and preferences</p>
        </div>

        <div className="settings-container">
          {/* Settings Navigation */}
          <div className="settings-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div className="settings-content">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="settings-section">
                <div className="section-header">
                  <h2>Profile Information</h2>
                  <p>Update your personal information and contact details</p>
                </div>

                <form className="settings-form" onSubmit={handleProfileSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <div className="input-with-icon">
                        <User size={18} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          value={profileData.name}
                          onChange={handleProfileChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <div className="input-with-icon">
                        <Mail size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          value={profileData.email}
                          onChange={handleProfileChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <div className="input-with-icon">
                        <Phone size={18} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control"
                          value={profileData.phone}
                          onChange={handleProfileChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <div className="input-with-icon">
                        <Building size={18} />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="form-control"
                          value={profileData.company}
                          onChange={handleProfileChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      className="form-control"
                      rows="4"
                      value={profileData.bio}
                      onChange={handleProfileChange}
                      placeholder="Tell us about yourself and your business..."
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      <Save size={16} />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="settings-section">
                <div className="section-header">
                  <h2>Security Settings</h2>
                  <p>Manage your password and security preferences</p>
                </div>

                <form className="settings-form" onSubmit={handlePasswordSubmit}>
                  <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      className="form-control"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="newPassword">New Password</label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        className="form-control"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm New Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      <Lock size={16} />
                      Update Password
                    </button>
                  </div>
                </form>

                <div className="security-info">
                  <div className="info-card">
                    <Shield size={24} />
                    <div>
                      <h3>Account Security</h3>
                      <p>
                        Your account is protected with industry-standard security measures including encryption and
                        secure authentication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="settings-section">
                <div className="section-header">
                  <h2>Notification Preferences</h2>
                  <p>Choose how you want to be notified about updates and activities</p>
                </div>

                <form className="settings-form" onSubmit={handleNotificationSubmit}>
                  <div className="notification-groups">
                    <div className="notification-group">
                      <h3>Email Notifications</h3>

                      <div className="notification-item">
                        <div className="notification-info">
                          <h4>Email Notifications</h4>
                          <p>Receive general notifications via email</p>
                        </div>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={notifications.emailNotifications}
                            onChange={() => handleNotificationChange("emailNotifications")}
                          />
                          <span className="toggle-slider"></span>
                        </label>
                      </div>

                      <div className="notification-item">
                        <div className="notification-info">
                          <h4>Project Updates</h4>
                          <p>Get notified about project milestones and progress</p>
                        </div>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={notifications.projectUpdates}
                            onChange={() => handleNotificationChange("projectUpdates")}
                          />
                          <span className="toggle-slider"></span>
                        </label>
                      </div>

                      <div className="notification-item">
                        <div className="notification-info">
                          <h4>Payment Alerts</h4>
                          <p>Receive notifications about payments and billing</p>
                        </div>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={notifications.paymentAlerts}
                            onChange={() => handleNotificationChange("paymentAlerts")}
                          />
                          <span className="toggle-slider"></span>
                        </label>
                      </div>
                    </div>

                    <div className="notification-group">
                      <h3>Marketing & SMS</h3>

                      <div className="notification-item">
                        <div className="notification-info">
                          <h4>Marketing Emails</h4>
                          <p>Receive updates about new features and promotions</p>
                        </div>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={notifications.marketingEmails}
                            onChange={() => handleNotificationChange("marketingEmails")}
                          />
                          <span className="toggle-slider"></span>
                        </label>
                      </div>

                      <div className="notification-item">
                        <div className="notification-info">
                          <h4>SMS Notifications</h4>
                          <p>Receive important updates via text message</p>
                        </div>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={notifications.smsNotifications}
                            onChange={() => handleNotificationChange("smsNotifications")}
                          />
                          <span className="toggle-slider"></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      <Save size={16} />
                      Save Preferences
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === "billing" && (
              <div className="settings-section">
                <div className="section-header">
                  <h2>Billing & Payment Methods</h2>
                  <p>Manage your payment methods and billing information</p>
                </div>

                <div className="payment-methods">
                  <div className="section-title">
                    <h3>Payment Methods</h3>
                    <button className="btn btn-primary">Add Payment Method</button>
                  </div>

                  <div className="payment-methods-list">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="payment-method-card">
                        <div className="payment-method-info">
                          <div className="payment-icon">
                            <CreditCard size={24} />
                          </div>
                          <div className="payment-details">
                            <div className="payment-type">
                              {method.brand} {method.type}
                            </div>
                            <div className="payment-number">•••• •••• •••• {method.last4}</div>
                            {method.expiryMonth && method.expiryYear && (
                              <div className="payment-expiry">
                                Expires {method.expiryMonth}/{method.expiryYear}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="payment-actions">
                          {method.isDefault && <span className="default-badge">Default</span>}
                          <button className="btn btn-outline btn-sm">Edit</button>
                          <button className="btn btn-danger btn-sm">Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="billing-info">
                  <h3>Billing Information</h3>
                  <div className="billing-details">
                    <div className="billing-item">
                      <span>Next billing date:</span>
                      <span>No active subscriptions</span>
                    </div>
                    <div className="billing-item">
                      <span>Payment method:</span>
                      <span>Visa •••• 4242</span>
                    </div>
                    <div className="billing-item">
                      <span>Billing email:</span>
                      <span>{user?.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Settings
