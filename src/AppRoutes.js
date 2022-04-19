import { BrowserRouter as Router, Navigate, Route, Routes, } from 'react-router-dom'
import React, { useContext }  from 'react'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewRequest from './components/pages/NewRequest'
import Requests from './components/pages/Requests'
import Request from './components/pages/Request'
import Login from './components/pages/Login'

import Container from './components/layout/Container'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import { AuthProvider, AuthContext } from "./context/auth";
import Loading from './components/layout/Loading'


function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    if (!Loading){
      return <Loading/>
    }

    if (!authenticated) {
      
      console.log("autenticado:",authenticated)
      return <Navigate to="/login"/>
    }

    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <NavBar />
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<Private> <Home /> </Private>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newrequest" element={ <Private> <NewRequest /> </Private>} />
              <Route path="/requests" element={ <Private> <Requests /> </Private>} />
              <Route path="/request/:requestId" element={ <Private> <Request /> </Private>} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Container>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;