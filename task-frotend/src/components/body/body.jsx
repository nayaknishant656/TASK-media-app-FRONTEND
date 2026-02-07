import React from 'react'
import CreatePost from './components/createpost/createpost'
import Feed from './components/feed/feed'
export default function body() {
    return (
        <div className="grandparent_body">
            <div className="parent_body">
                <CreatePost />
                <Feed />
            </div>
        </div>
    )
}
