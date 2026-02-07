import React from 'react'
import './feed.css'
import FeedCard from './ui/feedcard'

export default function feed() {
    return (
        <div className="grandparent_feed">
            <div className="parent_feed">
                <FeedCard />
            </div>
        </div>
    )
}
