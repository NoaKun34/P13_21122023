import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Error from './pages/Error/Error.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </Provider>
)
