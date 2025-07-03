import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./style.css"

import Leaderboard from './Leaderboard.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Routes>
        <Route path='/' element={<Leaderboard />} />
    </Routes>
</Router>
);