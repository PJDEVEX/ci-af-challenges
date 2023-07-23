// I. Import React and necessary modules
import React from 'react';
import css from "./css/Content.module.css";
import { savedPosts } from '../posts.json';
import PostItem from './PostItem';

// II. Content component class
export class Content extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                {/* III. Title Bar */}
                <div className={css.TitleBar}>
                    <h1>My Photo</h1>
                </div>

                {/* IV. Search Results */}
                <div className={css.SearchItem}>
                    {/* V. Use map to iterate through each individual post */}
                    {savedPosts.map(post => (
                        // VI. Render the PostItem component for each post
                        <PostItem key={post.title} post={post} />
                    ))}
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
