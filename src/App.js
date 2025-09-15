import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Bluebusdasboard from './Admin/bluebusdasboard'
import BookTicket from './Admin/bluebusbooktickect';
import ManageBooking from './Admin/ManageBooking';
import Report from './Admin/report';
import Register from './Admin/register';
import LoginPage from './Admin/bluebuslogin';
// import Bluebusloader from './Admin/bluebusloader';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Bluebusdasboard />} />
          <Route path="/Book-Ticket" element={<BookTicket />} />
          <Route path="/Manage-Ticket" element={<ManageBooking />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
