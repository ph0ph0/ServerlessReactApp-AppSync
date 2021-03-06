import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import RecipesPage from './containers/RecipesPage'
import AddRecipe from './AddRecipe'
import Nav from './Nav'

const App = () => {
  return (
    <div className = 'App'>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path = "/" component = {RecipesPage} />
            <Route exact path = "/addrecipe" component = {AddRecipe} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;