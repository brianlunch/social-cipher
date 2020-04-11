import React from 'react'
import PostSummary from './PostSummary'
import '../style.css'

const PostList = ({posts,groups,email}) => {
    console.log(groups)
    return(
        <div class="ting">
            { groups && posts && posts.map(post =>{ return(
                <PostSummary groups= {groups} post={post} email = {email} key={post.id}></PostSummary>
            )})}
        </div>
    )
}

export default PostList