import React, { useState } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import CommentData from "../Comment/Comment";

function CommentList(props) {
  const [commentList, setCommentList] = useState(
    props.comment_list ? props.comment_list : []
  );
  return (
    <Comment.Group style={{ marginBottom: "20px" }}>
      <Header as="h3" dividing>
        Комментарии
      </Header>
      {commentList.map((comment) => (
        <CommentData comment={comment}></CommentData>
      ))}
      <Form reply>
        <Form.TextArea />
        <Button
          content="Написать"
          style={{ width: "fit-content" }}
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </Comment.Group>
  );
}

export default CommentList;
