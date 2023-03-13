import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage/>}/>
          <Route path='/new-meetup' element={<NewMeetupPage/>}/>
          <Route path='/favorites' element={<FavoritesPage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
