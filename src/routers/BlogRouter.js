import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Footer } from '../components/Blog/Footer';
import NavBar from '../components/Blog/NavBar';
import AboutMeScreen from '../screens/Blog/about-me/AboutMeScreen';
import BlogScreen from '../screens/Blog/blog/BlogScreen';
import ContactScreen from '../screens/Blog/contact/ContactScreen';
import HomeScreen from '../screens/Blog/home/HomeScreen';
import WorkShopScreen from '../screens/Blog/workshop/WorkShopScreen';

const BlogRouter = () => {
  return (
    <>
      <NavBar />

      <main className="blog__main__content">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/blog" component={BlogScreen} />
          <Route exact path="/workshops" component={WorkShopScreen} />
          <Route exact path="/aboutme" component={AboutMeScreen} />
          <Route exact path="/contact" component={ContactScreen} />
          <Redirect to="/" />
        </Switch>
      </main>

      <Footer />
    </>
  );
};

export default BlogRouter;
