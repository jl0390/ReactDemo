import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { home } from './components/Home/Home';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

import './App.scss';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Header></Header>
        <div className='containner'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetail/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}


export default App;
