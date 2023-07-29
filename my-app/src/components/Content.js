// I. Import React and necessary modules
import React from 'react';

import { savedPosts } from '../posts.json';
import css from "./css/Content.module.css";

import PostItem from './PostItem';
import Loader from './Loader';


// II. Content component class
export class Content extends React.Component {
    constructor(props) {
        super(props);

        // CMP-LC-challenge: step1 constructor set state
        this.state = {
            isLoaded: false
        }
    }

    // Life cycle challenge: step 3 set time out
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 2000)
    }

    render() {
        return (
            <div>
                {/* III. Title Bar */}
                <div className={css.TitleBar}>
                    <h1>My Photo</h1>
                </div>

                {/* IV. Search Results */}
                <div className={css.SearchItem}>
                    {/* Lifecycle challenge: step 2 Conditional rendering */}
                    {this.state.isLoaded ? /* V. Use map to iterate through each individual post */
                        savedPosts.map(post => (
                            // VI. Render the PostItem component for each post
                            <PostItem key={post.title} post={post} />
                        )) : <Loader />}


                    {/* Step 7: For each post, create a div with a unique key */}
                    {/* <div key={post.title}>
                        {/* Step 8: Display post details */}
                    {/* <p>Title: {post.title}</p> */}
                    {/* <p>Artist: {post.name}</p> */}
                    {/* <img src={post.image} alt="post image" /> */}
                    {/* <p>Description: {post.description}</p> */}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

// VII. Export the Content component
export default Content;

