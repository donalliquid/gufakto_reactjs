import * as React from 'react';
import Login from './login/Login';
import Admin from './admin/Admin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

    

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/admin" component={Admin}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;