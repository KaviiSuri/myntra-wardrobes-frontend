import React from "react";
import styled from "styled-components";

const CommentsContainer = styled.div`
  height: 40vh;
  margin-top: 10vh;
  background-color: #f6f6f6;
  width: 100%;
  padding: 0 10vw;
  padding-top: 5vh;
`;
const CommentHeader = styled.h1`
  font-size: x-large;
  font-weight: 400;
`;
const CommentSection = () => {
  return (
    <CommentsContainer>
      <CommentHeader>Comments</CommentHeader>
    </CommentsContainer>
  );
};

export default CommentSection;
