import { Component } from "react";
import React from "react";

class Input extends Component {
    state = {
        text: ""
    }

    render() {
        return (
            <div className="Input">
                <form onSubmit={e => this.onSubmit(e)}>
                    <input onChange={e => this.onChange(e)}
                    value={this.state.text}
                    type="text"
                    placeholder="Enter your message and press ENTER"
                    autoFocus
                    />
                    <button>Send</button>

                </form>
            </div>
        )
    }

    onChange(e) {
        this.setState({text: e.target.value});
      }

      onSubmit(e) {
        e.preventDefault();
        const trimmedTxt = this.state.text.trim();
        if(trimmedTxt.length > 0){
            this.props.onSendMessage(trimmedTxt);
            this.setState({text: ''});
        }else{
            return;
        }    
    }

    
}

export default Input;