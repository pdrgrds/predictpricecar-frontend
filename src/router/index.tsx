// Library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Master
import ForgotPassword from './../context/master/forgot-password';
import Register from './../context/master/register';
import Login from './../context/master/login';
import Home from './../context/master/Home';
import Profile from './../context/master/profile';

// Prediction
import FormCreditEvaluation from './../context/credit-evaluation';
import FormPrediction from './../context/prediction/form';
import FormCompare from './../context/prediction/compare';
import FormDetail from './../context/prediction/detail';
import FormList from './../context/prediction/list';
import DetailBlog from '../context/prediction/blog-detail';
import ListBlog from '../context/prediction/blog-list';

// Local
import { LayoutBase } from './components/layoutbase';
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
                <Route path="/credit-evaluation" element={<FormCreditEvaluation />} />

                <Route element={<LayoutBase />}>
                    <Route path="/form-prediction" element={<FormPrediction />} />
                    <Route path="/form-detail/:id" element={<FormDetail />} />
                    <Route path="/prediction/list" element={<FormList />} />
                    <Route path="/prediction/compare-vehicle" element={<FormCompare />} />

                    <Route path='/profile' element={<Profile />} />
                    <Route path='/blog/:id' element={<DetailBlog />} />
                    <Route path='/blog' element={<ListBlog />} />
                </Route>

                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
