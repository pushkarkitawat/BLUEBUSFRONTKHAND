import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./dashboard.css";

const Dashboard = () => {
  const activities = [
    { id: 1, text: "User John placed an order." },
    { id: 2, text: "Server restarted successfully." },
    { id: 3, text: "New employee added: Sarah" },
    { id: 4, text: "Payment received: $250" },
  ];

  const stats = [
    { title: "Revenue", value: "$12,400", change: "+12%", icon: "💰" },
    { title: "Orders", value: "320", change: "+8%", icon: "🛒" },
    { title: "Customers", value: "1,150", change: "+5%", icon: "👥" },
    { title: "Employees", value: "25", change: "+2%", icon: "👨‍💼" },
  ];

  const orders = [
    { id: "#101", customer: "John Doe", amount: "$250", status: "✅ Completed" },
    { id: "#102", customer: "Jane Smith", amount: "$180", status: "⏳ Pending" },
    { id: "#103", customer: "Michael", amount: "$320", status: "❌ Canceled" },
    { id: "#104", customer: "Alice", amount: "$500", status: "✅ Completed" },
  ];

  const chartData = [
    { name: "Jan", orders: 50 },
    { name: "Feb", orders: 80 },
    { name: "Mar", orders: 65 },
    { name: "Apr", orders: 90 },
    { name: "May", orders: 120 },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li><Link to="/">📊 Dashboard</Link></li>
          <li><Link to="/users">👥 Users</Link></li>
          <li><Link to="/orders">🛒 Orders</Link></li>
          <li><Link to="/reports">📈 Reports</Link></li>
          <li><Link to="/settings">⚙ Settings</Link></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <input type="text" placeholder="Search..." />
          <div className="nav-buttons">
            <button>🔔</button>
            <button>⚙</button>
            <div className="profile">
              <img
                src="https://via.placeholder.com/30"
                alt="profile"
                className="profile-pic"
              />
              <span>Admin</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-container">
          {stats.map((s, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon">{s.icon}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.value}</p>
                <small>{s.change}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="chart-section">
          <h3>Orders Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <Line type="monotone" dataKey="orders" stroke="#2c7be5" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Feed */}
        <div className="activity-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {activities.map((a) => (
              <div key={a.id} className="activity-item">
                <span>🔹</span>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Orders Table */}
        <div className="orders-section">
          <h3>Latest Orders</h3>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.amount}</td>
                  <td>{o.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
