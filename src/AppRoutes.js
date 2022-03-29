import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewRequest from './components/pages/NewRequest'
import Requests from './components/pages/Requests'
import Request from './components/pages/Request'
import Login from './components/pages/Login'

import Container from './components/layout/Container'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function AppRoutes() {
    return (
        <Router>
        <NavBar />
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={/*<RoutesPrivate element={<Home />} />}*/<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newrequest" element={/*<RoutesPrivate element={<NewRequest />} />}*/ <NewRequest />} />
              <Route path="/requests" element={/*<RoutesPrivate element={<Requests />} />}*/ <Requests />} />
              <Route path="/request/:id" element={/*<RoutesPrivate element={<Request />} />}*/ <Request />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Container>
        <Footer />
   </Router>
    );
}

export default AppRoutes;