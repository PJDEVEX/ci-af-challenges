// I. Import React
import React from 'react'

// II. PostItem component function
function PostItem(props) {
    // III. Get the post data from props
    const post = props.post

    // IV. Render the post item details
    return (
        <div>
            <div key={post.title}>
                {/* V. Display post details */}
                <p>Title: {post.title}</p>
                <p>Artist: {post.name}</p>
                <img src={post.image} alt="post_image" />
                <p>Description: {post.description}</p>
            </div>
        </div>
    )
}

// VI. Export the PostItem component
export default PostItem;
