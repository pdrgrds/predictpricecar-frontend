import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './../context/master/login';
import Register from './../context/master/register';
import ForgotPassword from './../context/master/forgot-password';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
