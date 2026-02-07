import React, { useState, useOptimistic, useTransition } from 'react';
import './postcard.css';

const HeartIcon = ({ filled }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "#e0245e" : "none"} stroke={filled ? "#e0245e" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const CommentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export default function PostCard({ post }) {
    // Fallback for missing data
    const content = post.content || post.description || post.name || "No content";
    const date = post.date ? new Date(post.date).toLocaleString() : new Date().toLocaleString();
    const initialLikes = post.likes ? post.likes.length : 0;
    const initialIsLiked = false;

    const [state, setState] = useState({
        likes: initialLikes,
        isLiked: initialIsLiked
    });

    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState(post.comments || []);

    const [optimisticState, addOptimistic] = useOptimistic(
        state,
        (currentState, optimisticValue) => ({
            likes: currentState.isLiked ? currentState.likes - 1 : currentState.likes + 1,
            isLiked: !currentState.isLiked
        })
    );

    const [, startTransition] = useTransition();

    const handleLike = () => {
        startTransition(async () => {
            addOptimistic({ type: 'toggle' });
            try {
                const newIsLiked = !state.isLiked;
                const newLikes = state.isLiked ? state.likes - 1 : state.likes + 1;
                setState({ likes: newLikes, isLiked: newIsLiked });
            } catch (error) {
                console.error("Failed to like post", error);
            }
        });
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        const newComment = {
            id: Date.now(),
            text: commentText,
            user: "You",
            date: new Date().toISOString()
        };

        setComments([...comments, newComment]);
        setCommentText('');
    };

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
            <div className="pc_footer">
                <div className="pc_actions">
                    <button className={`pc_action_btn ${optimisticState.isLiked ? 'like_active' : ''}`} onClick={handleLike}>
                        <HeartIcon filled={optimisticState.isLiked} />
                        <span>{optimisticState.likes > 0 ? optimisticState.likes : 'Like'}</span>
                    </button>
                    <button className={`pc_action_btn ${showComments ? 'comment_active' : ''}`} onClick={() => setShowComments(!showComments)}>
                        <CommentIcon />
                        <span>{comments.length > 0 ? comments.length : 'Comment'}</span>
                    </button>
                </div>

                {showComments && (
                    <div className="pc_comments_section">
                        <div className="pc_comments_list">
                            {comments.map((comment) => (
                                <div key={comment.id} className="pc_comment_item">
                                    <div className="pc_comment_avatar">
                                        <img src={`https://ui-avatars.com/api/?name=${comment.user}&background=random`} alt="Avatar" />
                                    </div>
                                    <div className="pc_comment_content">
                                        <span className="pc_comment_user">{comment.user}</span>
                                        <p className="pc_comment_text">{comment.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <form className="pc_comment_input_wrapper" onSubmit={handleCommentSubmit}>
                            <img src={`https://ui-avatars.com/api/?name=You&background=random`} alt="You" />
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                            <button type="submit" disabled={!commentText.trim()}>Post</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}
