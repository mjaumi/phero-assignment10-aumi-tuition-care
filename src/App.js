import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Packages from './components/Packages/Packages';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout/:packageId' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
