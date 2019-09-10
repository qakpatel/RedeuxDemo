import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Post from './pages/post';
import DashBoard from './pages/Dashboard';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import make from './pages/make';
import Calender from './pages/Calender';
import comments from './pages/comments'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/comments" component={comments} />
        <Route path="/calender" component={Calender} />
        <Route path="/make" component={make} />
        <Route path="/profile" component={Profile} />
        <Route path="/posts" component={Post} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
