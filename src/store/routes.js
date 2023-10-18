import About from "../components/pages/About";
import Admin from "../components/pages/Admin";
import AntiCorruption from "../components/pages/AntiCorruption";
import Appeals from "../components/pages/Appeals";
import Cafe from "../components/pages/Cafe";
import Contacts from "../components/pages/Contacts";
import Delivery from "../components/pages/Delivery";
import Distribution from "../components/pages/Distribution";
import Documents from "../components/pages/Documents";
import Galery from "../components/pages/Galery";
import Hostel from "../components/pages/Hostel";
import Info from "../components/pages/Info";
import Jobs from "../components/pages/Jobs";
import Main from "../components/pages/Main";
import Management from "../components/pages/Management";
import ManagementTeam from "../components/pages/ManagementTeam";
import MarketingTeam from "../components/pages/MarketingTeam";
import News from "../components/pages/News";
import PriceList from "../components/pages/PriceList";
import ProductsList from "../components/pages/ProductsList";
import Reporting from "../components/pages/Reporting";
import Requisites from "../components/pages/Requisites";
import Servises from "../components/pages/Servises";
import Shop from "../components/pages/Shop";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  CONTACTS_ROUTE,
  INFO_ROUTE,
  MAIN_ROUTE,
} from "../utils/consts";

export const userRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: INFO_ROUTE,
    Component: Info,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
  {
    path: "/reporting",
    Component: Reporting,
  },
  {
    path: "/documents",
    Component: Documents,
  },
  {
    path: "/jobs",
    Component: Jobs,
  },
  {
    path: "/requisites",
    Component: Requisites,
  },
  {
    path: "/price-list",
    Component: PriceList,
  },
  {
    path: "/products",
    Component: ProductsList,
  },
  {
    path: "/appeals",
    Component: Appeals,
  },
  {
    path: "/distribution",
    Component: Distribution,
  },
  {
    path: "/anti-corruption",
    Component: AntiCorruption,
  },
  {
    path: "/management",
    Component: Management,
  },
  {
    path: "/management-team",
    Component: ManagementTeam,
  },
  {
    path: "/marketing-team",
    Component: MarketingTeam,
  },
  {
    path: "/delivery",
    Component: Delivery,
  },
  {
    path: "/hostel",
    Component: Hostel,
  },
  {
    path: "/news",
    Component: News,
  },
  {
    path: "/cafe",
    Component: Cafe,
  },
  {
    path: "/shop",
    Component: Shop,
  },
  {
    path: "/servises",
    Component: Servises,
  },
  {
    path: "/galery",
    Component: Galery,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];
