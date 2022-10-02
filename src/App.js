
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {
  return (
    <div>
      <Router>
        <Navbar/>
        {/* <SideDrawer/> */}
        {/* <Sidebar /> */}
        {/* <News key="general" pageSize={8} country="in" category="technology" /> */}

        <Switch>


          <Route exact path="/business">
          <News key="business" pageSize={8} country="in" category="business" />
          </Route>

          <Route path="/entertainment">
          <News key="entertainment" pageSize={8} country="in" category="entertainment" />
          </Route>

          <Route path="/general">
          <News key="general" pageSize={8} country="in" category="general" />
          </Route>

          <Route path="/health">
          <News key="health" pageSize={8} country="in" category="health" />
          </Route>

          <Route path="/science">
          <News key="science" pageSize={8} country="in" category="science" />
          </Route>

          <Route path="/sports">
          <News key="sports" pageSize={8} country="in" category="sports" />
          </Route>

          <Route path="/technology">
          <News key="technology" pageSize={8} country="in" category="technology" />
          </Route>

           {/* <Route path="/searchquery">
          <SearchNews key="searchquery" pageSize={8} query={props.searchquery} />
          </Route> */}

         </Switch>
        </Router>
    </div>
  
  );
}

export default App;
