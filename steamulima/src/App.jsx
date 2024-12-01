import React from 'react';
import Home from './pages/home/home';
import Login from './pages/login/Login';
import { AuthProvider } from './assets/contexts/loginContext';
import { BrowserRouter as Router, Route, Routes , Link } from 'react-router-dom';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
