import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './../context/master/login';
import Register from './../context/master/register';
import ForgotPassword from './../context/master/forgot-password';
import Home from './../context/master/Home';

import FormPrediction from './../context/prediction/form';
import FormDetail from './../context/prediction/detail';
import FormList from './../context/prediction/list';
import { LayoutBase } from './components/layoutbase';
import { useEffect } from 'react';
import { Controller } from './Infraestructure/Controller';

const AppRouter = () => {
    const controller = Controller();

    useEffect(() => {
        controller.initLoad();
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                <Route element={<LayoutBase />}>
                    <Route path="/form-prediction" element={<FormPrediction />} />
                    <Route path="/form-detail/:id" element={<FormDetail />} />
                    <Route path="/prediction/list" element={<FormList />} />
                </Route>

                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
