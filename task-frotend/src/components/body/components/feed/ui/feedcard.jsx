import React from 'react';
import './feedcard.css';

export default function FeedCard() {
    return (
        <div className="fc_card">
            {/* Header */}
            <div className="fc_header">
                <div className="fc_profile_section">
                    <div className="fc_avatar">
                        <img src="https://ui-avatars.com/api/?name=Kishun+Kumar&background=random" alt="Profile" />
                    </div>
                    <div className="fc_user_info">
                        <div className="fc_name_row">
                            <span className="fc_name">Kishun Kumar Jha</span>
                            <span className="fc_handle">@ideash3cnb</span>
                        </div>
                        <div className="fc_date">Sat, 07 Feb, 2026, 09:42:15 am</div>
                    </div>
                </div>
                <button className="fc_follow_btn">Follow</button>
            </div>

            {/* Chart Section */}
            <div className="fc_chart_container">
                <div className="fc_y_axis">
                    <span>0</span>
                </div>
                <div className="fc_bars">
                    {/* Bars based on image */}
                    <div className="fc_bar_wrapper">
                        <div className="fc_bar" style={{ height: '60%' }}></div>
                        <span className="fc_bar_label">1 Feb</span>
                    </div>
                    <div className="fc_bar_wrapper">
                        <div className="fc_bar" style={{ height: '60%' }}></div>
                        <span className="fc_bar_label">2 Feb</span>
                    </div>
                    <div className="fc_bar_wrapper">
                        <div className="fc_bar" style={{ height: '60%' }}></div>
                        <span className="fc_bar_label">3 Feb</span>
                    </div>
                    <div className="fc_bar_wrapper">
                        <div className="fc_bar" style={{ height: '60%' }}></div>
                        <span className="fc_bar_label">4 Feb</span>
                    </div>
                    <div className="fc_bar_wrapper">
                        <div className="fc_bar" style={{ height: '60%' }}></div>
                        <span className="fc_bar_label">5 Feb</span>
                    </div>
                    <div className="fc_bar_wrapper">
                        <div className="fc_bar" style={{ height: '60%' }}></div>
                        <span className="fc_bar_label">6 Feb</span>
                    </div>
                    <div className="fc_bar_wrapper">
                        <div className="fc_bar" style={{ height: '50%' }}></div>
                        <span className="fc_bar_label">7 Feb</span>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="fc_legend">
                <div className="fc_legend_item">
                    <span className="fc_dot blue"></span>
                    <span>Low</span>
                </div>
                <div className="fc_legend_item">
                    <span className="fc_dot orange"></span>
                    <span>Medium</span>
                </div>
                <div className="fc_legend_item">
                    <span className="fc_dot red"></span>
                    <span>High</span>
                </div>
            </div>

            {/* Content Body */}
            <div className="fc_content_body">
                <h3 className="fc_section_title">Active Referral Earnings</h3>

                <div className="fc_stat_card">
                    <div className="fc_stat_icon blue_icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <div className="fc_stat_text">
                        Last 7 days earning — <strong>2500 Points</strong>
                    </div>
                </div>

                <div className="fc_stat_card">
                    <div className="fc_stat_icon orange_icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div className="fc_stat_text">
                        Last 30 days earning — <strong>8300 Points</strong>
                    </div>
                </div>

                <div className="fc_stat_card column_layout">
                    <div className="fc_stat_header">
                        <div className="fc_stat_icon red_icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                        </div>
                        <div className="fc_stat_text">
                            All-time earnings:
                        </div>
                    </div>
                    <div className="fc_badges">
                        <div className="fc_badge badge_blue">Low: 4660</div>
                        <div className="fc_badge badge_orange">Medium: 6100</div>
                        <div className="fc_badge badge_red">High: 7800</div>
                    </div>
                </div>

                <div className="fc_stat_card">
                    <div className="fc_stat_icon blue_icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <div className="fc_stat_text">
                        Last 7 days active referrals — <strong>85 Users</strong>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="fc_footer">
                <div className="fc_action">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span>2</span>
                </div>
                <div className="fc_action">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <span>42</span>
                </div>
                <div className="fc_action">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
}
