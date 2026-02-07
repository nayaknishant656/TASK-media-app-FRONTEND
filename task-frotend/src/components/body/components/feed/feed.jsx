import React from 'react'
import './feed.css'
import FeedCard from './ui/feedcard'
import PostCard from './ui/postcard'

export default function Feed({ posts }) {
    return (
        <div className="grandparent_feed">
            <div className="parent_feed">
                {/* Static/Dashboard Card */}
                <FeedCard />

                {/* Dynamic Posts */}
                <div className="feed_posts_list">
                    {posts && posts.length > 0 ? (
                        posts.map((post, index) => (
                            <PostCard key={post._id || index} post={post} />
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '20px', color: '#65676B' }}>
                            No posts yet. Be the first to post!
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
