import {Redirect, Route, Switch} from "react-router-dom";
import Layout from "./components/high order components/Layout";
import Player from "./components/Player";

function App() {
    return (
        <div className={'App'}>
            <Switch>
                <Route path={'/video'} exact component={Player}/>
                <Route path={'/'} exact component={Layout}/>
                <Redirect to={'/'}/>
            </Switch>
        </div>
    );
}

export default App;
