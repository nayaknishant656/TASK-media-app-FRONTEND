import React from 'react'
import './createpost.css'
import CreatePostCard from './ui/createpostcard'

export default function CreatePost({ onPost }) {
    return (
        <div className="grandparent_createpost">
            <div className="parent_createpost">
                <CreatePostCard onPost={onPost} />
            </div>
        </div>
    )
}
