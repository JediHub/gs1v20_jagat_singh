import React, { useState } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/hompage/homepage.component';
import Header from './components/header/header.component';
import MoviePreview from './components/movie-preview/movie-preview.component';

const App = () => {

  const [searchText, setSearchText] = useState('');

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setSearchText(value);
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <Redirect from='/' to='/movies' />
        <Header onChangeHandler={onChangeHandler} searchText={searchText} />
        <Switch>
          <Route exact path='/movies' component={() => (<HomePage searchText={searchText} />)} />
          <Route path={`/movies/:movieId`} component={MoviePreview} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
