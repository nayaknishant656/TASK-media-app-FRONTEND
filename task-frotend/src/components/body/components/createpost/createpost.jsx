import React from 'react'
import './createpost.css'
import CreatePost from './ui/createpostcard'
export default function createpost() {
    return (
        <div className="grandparent_createpost">
            <div className="parent_createpost">
                <CreatePost />
            </div>
        </div>
    )
}
