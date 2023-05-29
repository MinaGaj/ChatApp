import {Component} from "react";
import React from "react";

class Messages extends Component {

    render() {
        const {messages, currentMember} = this.props;
        return (
            <ul className="Messages-list">
                {messages.map((m, index) => this.renderMessage(m, currentMember, index))}
            </ul>
        );
    }

    renderMessage(message, currentMember, index) {
        
        const {member, text} = message;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";
    
        return (
            <li key={index} className={className}>
                <span
                    className="avatar"
                    style={{backgroundColor: member.color}}
            ></span>
            <div className="Message-content">
                <div className="username">
                    {member.username}
                </div>
                <div className="text">{text}</div>
            </div>
            </li>
        );
    
    }
    

   
 
}


export default Messages;