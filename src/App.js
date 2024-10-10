import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './components/Login.jsx';
import Table from './components/Table.jsx';
import ItemDetail from './components/ItemDetail.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/table" element={<><Table /></>} />
                    <Route path="/item/:id" element={<><ItemDetail /></>} />
                    

                   
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
