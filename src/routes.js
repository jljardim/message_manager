import { BrowserRouter,Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";


const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Dashboard />
            </Route>
            <Route path="/register" >
                <Dashboard />
            </Route>
            <Route path="/message" >
                <Dashboard />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;