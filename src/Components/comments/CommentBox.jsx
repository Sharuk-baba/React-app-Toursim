import React, { Component } from 'react'//React import


export class CommentBox extends Component {//React class component

    render() {
        const { commentL } = this.props;//destructuring commentL
        

        const { commentValue, handleCommentValue,
            enterCommentLine, submitCommentLine } = this.props;
        const enableCommentButton = () => {
            return (commentValue ? false : true);
        }//comment button toggle 
        const changeCommentButtonStyle = () => {//change comment btton style
            return (commentValue ? "comments-button-enabled" :
                "comments-button-disabled");
        }
       
        return (//front end code
            <div className="comments-box" style={{ backgroundImage:"url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')",paddingLeft:"1.25rem",marginTop:"0px",height:"15.625rem", boxShadow:" 0.625rem -0.125rem 1.25rem 0.125rem rgb(0 0 0 / 30%)",borderRadius: "0.625rem"}}>
                <ul className="comments-list">
                    {commentL.map((val) => {
                        return(
                        <li className="each-comment" style={{listStyle:"none"}}
                            key={val.commentId}>{val.text}
                        </li>)
                    })
                    }
                </ul>

                <textarea onKeyPress={enterCommentLine} value={commentValue}
                    id="comments-input" onChange={handleCommentValue}
                     placeholder="Add a comment..." />
                <button onClick={submitCommentLine}  style={{borderRadius:"0.625rem",borderColor:"black",borderRadius:"0.625rem",fontSize:"1.25rem",width:"3.75rem",height:"2rem",paddingLeft:"0rem",paddingTop:"0rem"}}type="submit"
                    className="comments-button" id={changeCommentButtonStyle()}
                    disabled={enableCommentButton()}>Post</button>
                    
            </div>

        )
    }

}

export default CommentBox//default export
