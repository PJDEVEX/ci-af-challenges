// I. Import React
import React from 'react';

// II. PostItemAPI component function
function PostItemAPI(props) {
    // III. Get the post data from props
    const { id, user, type, webformatURL, tags } = props.post;

    // IV. Render the post item details
    return (
        <div>
            <div key={id}>
                {/* V. Display post details */}
                <p>Artwork Type: {type}</p>
                <p>Artist: {user}</p>
                <img src={webformatURL} alt="post_image" />
                <p>Tags: {tags}</p>
            </div>
        </div>
    );
}

// VI. Export the PostItemAPI component
export default PostItemAPI;
