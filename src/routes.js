import { Switch, Route  } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Messages";
import Register from "./pages/Register";


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Dashboard />
            </Route>
            <Route path="/register" >
                <Register />
            </Route>
            <Route path="/message" >
                <Message />
            </Route>
        </Switch>

    );
}

export default Routes;