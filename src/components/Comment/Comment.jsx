import React, { useState } from "react";
import { Comment, Icon } from "semantic-ui-react";

const CommentData = (props) => {
  const [comment, setComment] = useState(props.comment);
  return (
    //   <Comment.Group>
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a">{comment.name}</Comment.Author>
        <Comment.Metadata style={{textAlign: "right"}}>
          <div>{comment.date}</div>
        </Comment.Metadata>
        <Comment.Text>{comment.text}</Comment.Text>
        {/* <Comment.Actions>
          <Comment.Action>Report</Comment.Action>
        </Comment.Actions> */}
      </Comment.Content>
    </Comment>
  );
  //   </Comment.Group>
};

export default CommentData;
