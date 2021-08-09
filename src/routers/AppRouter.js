import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BlogRouter from "./BlogRouter"

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={BlogRouter} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
