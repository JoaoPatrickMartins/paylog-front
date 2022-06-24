import { BrowserRouter as Router, Navigate, Route, Routes, } from 'react-router-dom'
import React, { useContext }  from 'react'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact/index'
import NewRequest from './components/pages/NewRequest'
import Requests from './components/pages/Requests'
import Request from './components/pages/Request'
import Login from './components/pages/Login'
import InventoryDashboard from './components/pages/InventoryDashboard/index'
import SalesDashboard from './components/pages/SalesDashboard/index'

import Container from './components/layout/Container'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import { AuthProvider, AuthContext } from "./context/auth";
import Loading from './components/layout/Loading'
import RequestsPending from './components/pages/RequestsPending'
import MyAccount from './components/pages/MyAccount'
import { Styles } from './components/pages/Contact/styles'



function AppRoutes() {
  
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    
    if(loading){
      return <Loading/>
    }

    if (authenticated) {
      return children;
    }else{
      return <Navigate to="/login"/>
    }
    
  }

  return (
    <Router>
      <AuthProvider>
      <NavBar />
          <Container customClass="min-height">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Private> {/*<Home />*/} <RequestsPending /> </Private>} />
              <Route path="/myaccount" element={ <Private> <MyAccount /> </Private>} />
              <Route path="/newrequest" element={ <Private> <NewRequest /> </Private>} />
              <Route path="/requests" element={ <Private> <Requests /> </Private>} />
              <Route path="/requestspending" element={ <Private> <RequestsPending /> </Private>} />
              <Route path="/request/:requestUserId/:requestId" element={ <Private> <Request /> </Private>} />
              <Route path="/inventorydashboard" element={ <Private> <InventoryDashboard /> </Private>} />              
              <Route path="/salesdashboard" element={ <Private> <SalesDashboard /> </Private>} />              
            </Routes>
          </Container>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;