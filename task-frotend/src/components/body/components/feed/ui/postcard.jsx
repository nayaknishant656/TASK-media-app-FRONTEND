import React from 'react';
import './postcard.css';

export default function PostCard({ post }) {
    // Fallback for missing data
    const content = post.content || post.description || post.name || "No content";
    const date = post.date ? new Date(post.date).toLocaleString() : new Date().toLocaleString();

    return (
        <div className="pc_card">
            <div className="pc_header">
                <div className="pc_avatar">
                    <img src={`https://ui-avatars.com/api/?name=User&background=random`} alt="Profile" />
                </div>
                <div className="pc_user_info">
                    <span className="pc_name">User</span>
                    <span className="pc_date">{date}</span>
                </div>
            </div>
            <div className="pc_body">
                <p>{content}</p>
            </div>
        </div>
    )
}
