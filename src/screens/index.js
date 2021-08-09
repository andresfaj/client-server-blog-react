import AboutMeScreen from "./about-me/AboutMeScreen"
import BlogScreen from "./blog/BlogScreen"
import HomeScreen from "./home/HomeScreen"
import ContactScreen from "./contact/ContactScreen"
import WorkShopScreen from "./workshop/WorkShopScreen"

const useScreens = () => {
  return {
    HomeScreen,
    AboutMeScreen,
    BlogScreen,
    ContactScreen,
    WorkShopScreen,
  }
}

export default useScreens
