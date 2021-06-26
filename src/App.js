import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Post from './components/Post'
import Posts from './components/Posts'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

class App extends React.Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/posts' exact component={Posts}/>
            <Route path='/posts/:id' component={Post}/>
          </Switch>
         <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
