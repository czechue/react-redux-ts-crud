import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from '../history';
import PostsList from '../containers/PostsList';
import PostsNew from '../containers/PostsNew';
import PostShow from '../containers/PostShow/PostShow';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <h1>Header</h1>
                    <Link to={'/'}>Go to main</Link>
                    <Switch>
                        <Route path="/" exact component={PostsList} />
                        <Route path="/posts" exact component={PostsList} />
                        <Route path="/posts/:id" exact component={PostShow} />
                        <Route path="/posts/new" exact component={PostsNew} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
