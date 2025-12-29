import React from 'react';
import {getAllPosts} from "@/service/service.api";
import PostComponent from "@/components/posts/PostComponent";

const PostsComponent = async () => {
    const posts = await getAllPosts();
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;
