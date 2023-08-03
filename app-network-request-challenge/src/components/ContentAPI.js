// I. Import React and necessary modules
import React from 'react';
import css from "./css/Content.module.css";
import API_KEY from "../secrets.js";
import axios from 'axios';
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';

// II. ContentAPI component class
export class ContentAPI extends React.Component {
    constructor(props) {
        super(props);

        // CMP-LC-challenge: step1 constructor set state
        this.state = {
            isLoaded: false,
            posts: [], // Search chlng: step1: create new state for posts
        };
    }

    // Life cycle challenge: step 3 set time out
    componentDidMount() {
        this.fetchImages(); // Step 2: Call fetchImages() method to get API data
    }

    // Step 2: Async function to fetch data from the API
    async fetchImages() {
        try {
            const response = await axios.get('https://pixabay.com/api/', {
                params: {
                    key: API_KEY,
                    q: "colombo",
                    per_page: 100, // Step 2: Limit the number of posts to fetch
                },
            });
            const fetchedPosts = response.data.hits; // Step 2: Extract the 'hits' data from the API response
            console.log(response);

            // Step 2: Update the state with the fetched data
            this.setState({
                isLoaded: true,
                posts: fetchedPosts,
            });
        } catch (error) {
            console.log("Error fetching images: ", error);
        }
    }

    // Step 5: Handle the change event for the search input
    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase();
        console.log(inputText);

        // Step 6: Filter the 'posts' using 'user' and save it to 'filteredPosts'
        const filteredPosts = this.state.posts.filter((post) =>
            post.user.toLowerCase().includes(inputText)
        );

        // Step 7: Set the state of the posts to filteredPosts
        this.setState({
            posts: filteredPosts,
            name: inputText, // Step 8: Save the input as "name" in state
        });
    }

    render() {
        return (
            <div>
                {/* III. Title Bar */}
                <div className={css.TitleBar}>
                    <h1>My Photo</h1>
                    <form>
                        {/* Search chlng step3: Create a form with a label */}
                        <label htmlFor='searchInput'>Search: </label>
                        <input
                            type='search'
                            id='searchInput'
                            placeholder='By Author'
                            // Search chlng: step4: Add onChange event handler
                            onChange={(event) => this.handleChange(event)}
                        ></input>
                        {/* Search chlng: step4: state the number of matching found */}
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>

                {/* IV. Search Results */}
                <div className={css.SearchItem}>
                    {/* Lifecycle challenge: step 2 Conditional rendering */}
                    {this.state.isLoaded ? /* V. Use map to iterate through each individual post */
                        this.state.posts.map(post => (
                            // VI. Render the PostItemAPI component for each post
                            <PostItemAPI key={post.id} post={post} />
                        )) : <Loader />}
                </div>
            </div>
        );
    }
}

// VII. Export the ContentAPI component
export default ContentAPI;
