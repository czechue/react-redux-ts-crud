import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import PostsList from '../containers/PostsList';
import PostsNew from '../containers/PostsNew';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <h1>Header</h1>
                    <Switch>
                        <Route path="/" exact component={PostsList} />
                        <Route path="/posts" exact component={PostsList} />
                        <Route path="/posts/new" exact component={PostsNew} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
