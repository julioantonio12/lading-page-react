import { BrowserRouter, Switch, Route } from "react-router-dom"
//Fixed components
import Header from "./components/header/Header";
import Sidebar from './components/sidebar/Sidebar';
import Footer from "./components/footer/Footer";

//Dynamic components
import LandingPage from './components/contents/landing/LandingPage'
export default function App() {
  return (
    <div className="sidebar-mini">
      <div className="wrapper">
        <Header/>
        <Sidebar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
          </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    </div>
  );
}
