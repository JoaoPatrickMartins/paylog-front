import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewRequest from './components/pages/NewRequest'
import Requests from './components/pages/Requests'
import Request from './components/pages/Request'

import Container from './components/layout/Container'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Login from './components/pages/Login'
import StoreProvider from './components/store/Provider'
import RoutesPrivate from './components/routes/private/Private'


function App() {
  return (
   <Router>
     <StoreProvider>
        <NavBar />
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<RoutesPrivate element={<Home />} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newrequest" element={<RoutesPrivate element={<NewRequest />} />} />
              <Route path="/requests" element={<RoutesPrivate element={<Requests />} />} />
              <Route path="/request/:id" element={<RoutesPrivate element={<Request />} />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Container>
        <Footer />
      </StoreProvider>
   </Router>
  );
}

export default App;
