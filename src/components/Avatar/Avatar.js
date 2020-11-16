import './Avatar.scss';
import React from 'react';
import { Avatar } from '@material-ui/core';

const avatar = () => {
    return (
        <div className="avatarContainer">
            <div className="userDetailsSection">
                <div className="avatarSection">
                    <Avatar>S</Avatar>
                </div>
                <div className="usernameSection">
                    <span className="usernameText">fivefullsummers</span>
                </div>
            </div>
        </div>
    );
}

export default avatar;