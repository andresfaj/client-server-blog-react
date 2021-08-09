import React from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import useScreens from "../screens"

const AppRouter = () => {
  const {
    HomeScreen,
    BlogScreen,
    WorkShopScreen,
    AboutMeScreen,
    ContactScreen,
  } = useScreens()
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/blog" component={BlogScreen} />
        <Route exact path="/workshops" component={WorkShopScreen} />
        <Route exact path="/aboutme" component={AboutMeScreen} />
        <Route exact path="/contact" component={ContactScreen} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default AppRouter
