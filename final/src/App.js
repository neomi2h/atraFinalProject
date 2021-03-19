
import './App.css';
import { hello } from './service';
import Register from './Components/register';
import Drinks from './Components/drinks';
import Login from './Components/login';
import SearchHistory from './Components/searchHistory'
import { Provider} from 'react-redux';
import store from './Redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

function App() {
  hello()
  return (
    <Provider store = {store}>
    <div className="App">
    <Router>
         <Switch>
                 <Route path ="/register">
                 <Register></Register>
                 </Route>
                 <Route path ="/drinks">
                 <Drinks></Drinks>
                 </Route>
                 <Route path ="/search">
                 <SearchHistory></SearchHistory>
                 </Route>
                 <Route path ="/">
                  <Login></Login>
                 </Route>
              </Switch>
          </Router>
    </div>
    </Provider>
  );
}

export default App;
