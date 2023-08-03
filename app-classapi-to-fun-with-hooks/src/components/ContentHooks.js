import React, { useState, useEffect } from 'react';
import { savedPosts } from '../posts.json';
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';

const ContentHooks = () => {
    // Step 1: Define state variables using useState hook
    const [isLoaded, setIsLoaded] = useState(false); // State for loading status
    const [fetchedPosts, setFetchedPosts] = useState([]); // State for fetched posts

    // Step 2: useEffect to load savedPosts/fetchedPosts after 2 seconds
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true); // Set isLoaded to true after 2 seconds
        }, 2000);

        setFetchedPosts(savedPosts); // Set fetchedPosts state with savedPosts data
    }, []);

    // Step 3: Define the handleChange function for input search
    const handleChange = (event) => {
        const inputText = event.target.value.toLowerCase(); // Get the user input and convert to lowercase
        console.log(inputText); // Log the input text to the console
        const filteredPosts = savedPosts.filter((post) =>
            post.name.toLowerCase().includes(inputText)
        ); // Filter the savedPosts based on the inputText

        setFetchedPosts(filteredPosts); // Update fetchedPosts state with filteredPosts
    };

    // Step 4: Render the component
    return (
        <div>
            <div className={css.TitleBar}>
                <h1>My Photo</h1>
                <form>
                    <label htmlFor='searchInput'>Search: </label>
                    <input
                        type='search'
                        id='searchInput'
                        placeholder='By Author'
                        onChange={handleChange} // Step 5: Add onChange event handler to call handleChange
                    ></input>
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchItem}>
                {isLoaded ?
                    fetchedPosts.map(post => (
                        <PostItem key={post.title} post={post} />
                    )) : <Loader />} {/* Step 6: Conditional rendering based on isLoaded */}
            </div>
        </div>
    );
}

export default ContentHooks;
