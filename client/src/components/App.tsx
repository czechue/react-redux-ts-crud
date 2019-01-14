import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from '../history';
import PostsList from '../containers/PostsList';
import PostsNew from '../containers/PostsNew';
import PostShow from '../containers/PostShow/PostShow';
import PostEdit from '../containers/PostEdit/PostEdit';
import PostDelete from '../containers/PostDelete/PostDelete';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <h1>Header</h1>
                    <p>
                        <Link to={'/'}>Go to main</Link>
                    </p>
                    <p>
                        <Link to={'/posts/new'}>Create new post</Link>
                    </p>

                    <Switch>
                        <Route path="/" exact component={PostsList} />
                        <Route path="/posts" exact component={PostsList} />
                        <Route path="/posts/new" exact component={PostsNew} />
                        <Route
                            path="/posts/edit/:id"
                            exact
                            component={PostEdit}
                        />
                        <Route
                            path="/posts/delete/:id"
                            exact
                            component={PostDelete}
                        />
                        <Route path="/posts/:id" exact component={PostShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
