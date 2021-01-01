import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Button, Label, Icon } from 'semantic-ui-react';

import MyPopup from '../util/MyPopup';

function LikeButton({ user, post: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id },
  });

  const likeButton = user ? (
    liked ? (
      <MyPopup content="Unlike">
        <Button color="teal">
          <Icon name="heart" />
        </Button>
      </MyPopup>
    ) : (
      <MyPopup content="Like">
        <Button color="teal" basic>
          <Icon name="heart" />
        </Button>
      </MyPopup>
    )
  ) : (
    <MyPopup content="You need to login first">
      <Button as="div" color="teal" basic>
        <Icon name="heart" />
      </Button>
    </MyPopup>
  );

  return (
    <Button as="div" labelPosition="right" onClick={likePost}>
      {/* <MyPopup content={liked ? 'Unlike' : 'Like'}>{likeButton}</MyPopup> */}
      {likeButton}
      <Label basic color="teal" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
}

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export default LikeButton;
