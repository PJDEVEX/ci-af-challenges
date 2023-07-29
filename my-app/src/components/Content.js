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
            isLoaded: false,
            // Search chlng: step1: create new stat
            posts: [],
        }
    }

    // Life cycle challenge: step 3 set time out
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 2000)
        // Search chlng: step2: set state of post equal to savedPosts
        this.setState(() => {
            this.posts = savedPosts
        })
    }
    //   Search chlng: step5: handleChange
    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        console.log(inputText)
        // Search chlng: step6: Filter the 'savedPosts' using 'name' and save it to 'filteredPosts'
        const filteredposts = savedPosts.filter((posts) =>
            posts.name.toLowerCase().includes(inputText)
        );
        // search chlng step7: set the stateof the post to filteredPosts
        this.setState({
            posts: filteredposts,
            name: inputText, // search chlng: step8: Save the imput as "name" in state
        })
    }

    render() {
        return (
            <div>
                {/* III. Title Bar */}
                <div className={css.TitleBar}>
                    <h1>My Photo</h1>
                    <form>
                        {/* Search chlng step3: Create a form with a lable */}
                        <label htmlFor='searchInput'>Search: </label>
                        <input
                            type='search'
                            id='searchInput'
                            placeholder='By Author'
                            // Search chlng: step4: Add onChange event hadnler
                            onChange={(event) => this.handleChange(event)}></input>
                        {/* Search chlng: step4: state the number of matching found */}
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
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

