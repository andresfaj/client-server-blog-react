//Packages
import React from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"

//Hooks
import useLayouts from "../layouts"
import useScreens from "../screens"

const AppRouter = () => {
  const {
    HomeScreen,
    BlogScreen,
    WorkShopScreen,
    AboutMeScreen,
    ContactScreen,
  } = useScreens()
  const { DefaultLayout } = useLayouts()
  return (
    <DefaultLayout>
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
    </DefaultLayout>
  )
}

export default AppRouter
