import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './../context/master/login';
import Register from './../context/master/register';
import ForgotPassword from './../context/master/forgot-password';
import Home from './../context/master/Home';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
