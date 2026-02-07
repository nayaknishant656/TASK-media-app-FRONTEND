import React, { useState } from 'react';
import './createpostcard.css';

export default function CreatePostCard({ onPost }) {
    const [content, setContent] = useState('');

    const handlePostClick = () => {
        if (content.trim()) {
            onPost(content);
            setContent(''); // Clear input after posting
        }
    };

    return (
        <div className='cp_card_parent'>
            <div className='cp_card'>
                <div className='cp_card_header'>
                    <h2 className='cp_title'>Create Post</h2>
                    <div className='cp_tabs'>
                        <button className='cp_tab active'>All Posts</button>
                        <button className='cp_tab'>Promotions</button>
                    </div>
                </div>

                <div className='cp_card_body'>
                    <textarea
                        className='cp_textarea'
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>

                <div className='cp_separator'></div>

                <div className='cp_card_footer'>
                    <div className='cp_actions_left'>
                        {/* Image Icon */}
                        <div className="cp_icon_wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cp_icon">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                        </div>

                        {/* Smile Icon */}
                        <div className="cp_icon_wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cp_icon">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                        </div>

                        {/* Chart Icon */}
                        <div className="cp_icon_wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cp_icon">
                                <line x1="12" y1="20" x2="12" y2="10"></line>
                                <line x1="18" y1="20" x2="18" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="16"></line>
                            </svg>
                        </div>

                        {/* Promote Section */}
                        <div className="cp_promote_wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cp_icon">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                            <span className="cp_promote_text">Promote</span>
                        </div>
                    </div>

                    <div className='cp_actions_right'>
                        <button
                            className='cp_post_btn'
                            onClick={handlePostClick}
                            style={{
                                backgroundColor: content.trim() ? '#1877F2' : '#E4E6EB',
                                color: content.trim() ? 'white' : '#BCC0C4',
                                cursor: content.trim() ? 'pointer' : 'not-allowed'
                            }}
                            disabled={!content.trim()}
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}