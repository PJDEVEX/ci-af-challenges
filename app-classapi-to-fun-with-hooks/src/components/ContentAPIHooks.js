import React, { useState, useEffect } from 'react';
import css from "./css/Content.module.css";
import API_KEY from "../secrets.js";
import axios from 'axios';
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    async function fetchImages() {
        try {
            const response = await axios.get('https://pixabay.com/api/', {
                params: {
                    key: API_KEY,
                    q: "River",
                    per_page: 100,
                },
            });
            const fetchedPosts = response.data.hits;
            console.log(response);

            setIsLoaded(true);
            setPosts(fetchedPosts);
        } catch (error) {
            console.log("Error fetching images: ", error);
        }
    }

    function handleChange(event) {
        const inputText = event.target.value.toLowerCase();
        console.log(inputText);

        const filteredPosts = posts.filter((post) =>
            post.user.toLowerCase().includes(inputText)
        );

        setPosts(filteredPosts);
    }

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
                        onChange={handleChange}
                    ></input>
                    {/* Search chlng: step4: state the number of matching found */}
                    <h4>posts found: {posts.length}</h4>
                </form>
            </div>

            {/* IV. Search Results */}
            <div className={css.SearchItem}>
                {/* Lifecycle challenge: step 2 Conditional rendering */}
                {isLoaded ? /* V. Use map to iterate through each individual post */
                    posts.map(post => (
                        // VI. Render the PostItemAPI component for each post
                        <PostItemAPI key={post.id} post={post} />
                    )) : <Loader />}
            </div>
        </div>
    );
}

export default ContentAPIHooks;
