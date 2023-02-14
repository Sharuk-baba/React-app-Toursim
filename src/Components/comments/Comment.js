import React, { Component } from 'react'//import react
import CommentBox from './CommentBox';//import comment component


let commentCounter = 1 ;//comment counter

export class Comment extends Component {//React class component

    // const [commentCounter,setCommentCounter]
    constructor(props) {//constructor
      super(props)
    
      this.state = {//setting state value
        commentValue: "",
        commentLine: [{ commentId:"", text: "---comments below---" }]
        };
        
    }

    submitCommentLine = (e) => {//event handler
        e.preventDefault();
        this.setCommentLine();
       };
       enterCommentLine = (e) => {//event handler
        if (e.charCode === 13) {
         this.setCommentLine();
        }
       };

    setCommentLine = () => {//arrow function
this.setState({
  commentLine: [
   ...this.state.commentLine,
   { commentId: commentCounter++, text: this.state.commentValue }],
  commentValue: "",
});}
    handleCommentValue = (e) => {//event handler
        this.setState({
          commentValue: e.target.value,
         });
        };
    
  render() {//render
    
    
    return (//front end code
      <div>
        
       
        

        <CommentBox 
             commentValue={this.state.commentValue}
             handleCommentValue={this.handleCommentValue}
             enterCommentLine={this.enterCommentLine}
             submitCommentLine={this.submitCommentLine}
             commentL={this.state.commentLine}

  /> {/*Comment Box Component */}


      </div>
    )
  }
}

export default Comment //default export
