import './App.css';
import IncidentList from './pages/IncidentList';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TicketDetail from './pages/TicketDetail';
import Clients from './pages/Clients';
import ClientList from './pages/ClientList';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login theme={theme} />} />
        <Route path="/ticketDetails" element={<TicketDetail theme={theme} />} />
        <Route path="/clients" element={<Clients theme={theme} />} />
        <Route path="/clientList" element={<ClientList theme={theme} />} />
        <Route path="/incidentList" element={<IncidentList theme={theme} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
