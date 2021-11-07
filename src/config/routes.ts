import UploadImage from "../components/Forms/uploadImage";
import IRoute from "../interfaces/route";
import AboutPage from "../pages/about";
import CollectionPage from "../pages/collection";
import HomePage from "../pages/home";
import OutfitPage from "../pages/outfit";
import Profile from "../pages/profile";
import ViewAllRecent from "../pages/viewAllRecent";
import ViewAllRecomended from "../pages/viewAllRecomended";
import ViewAllVloggers from "../pages/viewAllVloggers";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: "/recent/viewall",
    name: "Recent ViewAll",
    component: ViewAllRecent,
    exact: true,
  },
  {
    path: "/recomended/viewall",
    name: "Recomended ViewAll",
    component: ViewAllRecomended,
    exact: true,
  },
  {
    path: "/vloggers/viewall",
    name: "Vloggers ViewAll",
    component: ViewAllVloggers,
    exact: true,
  },
  {
    path: "/about",
    name: "About Page",
    component: AboutPage,
    exact: true,
  },
  {
    path: "/profile",
    name: "Profile Page",
    component: Profile,
    exact: true,
  },
  {
    path: "/collection",
    name: "Collection Page",
    component: CollectionPage,
    exact: true,
  },
  {
    path: "/media/upload",
    name: "UploadMedia Page",
    component: UploadImage,
    exact: true,
  },
  {
    path: "/outfit",
    name: "Outfit Page",
    component: OutfitPage,
    exact: true,
  },
  {
    path: "/about/:number",
    name: "About Page",
    component: AboutPage,
    exact: true,
  },
];

export default routes;
