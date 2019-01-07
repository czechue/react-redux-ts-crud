import React, { Component } from 'react';

class PostsNew extends Component {
    render() {
        return (
            <div>
                <h2>Posts New:</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Title</label>
                        <input
                            type="text"
                            name="first-name"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="field">
                        <label>Author</label>
                        <input
                            type="text"
                            name="last-name"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input
                                type="checkbox"
                                tabIndex={0}
                                className="hidden"
                            />
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <button className="ui button" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default PostsNew;
