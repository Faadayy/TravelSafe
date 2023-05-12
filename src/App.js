import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import "./App.css";
import { HomePage } from "./containers/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import Dashboard from "./containers/Dashboard/dashboard";

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/customer/access/:action"
              exact
              component={CustomerAccessPage}
            />
            <Route
              path="/customer/dashboard"
              exact
              component={Dashboard}
            />
          </Switch>
        </Router>
      </div>
    </LocalizationProvider>
  );
}

export default App;

