const Tweeter = function () {
  let _posts = [
    {
      text: 'First post!',
      id: 'p1',
      comments: [
        { id: 'c1', text: 'First comment on first post!' },
        { id: 'c2', text: 'Second comment on first post!!' },
        { id: 'c3', text: 'Third comment on first post!!!' },
      ],
    },
    {
      text: 'Aw man, I wanted to be first',
      id: 'p2',
      comments: [
        {
          id: 'c4',
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: 'c5', text: 'Yeah, believe in yourself!' },
        { id: 'c6', text: 'Haha second place what a joke.' },
      ],
    },
  ];

  let _postIdCounter = _posts.length;
  let _commentIdCounter = countComments();
  function countComments() {
    let count = 0;
    for (const post of _posts) {
      count += post.comments.length;
    }
    return count;
  }
  const getPosts = function () {
    return _posts;
  };
  const addPost = function (str) {
    _postIdCounter++;
    _posts.push({ text: str, id: `p${_postIdCounter}`, comments: [] });
  };
  const removePost = function (postId) {
    _posts = _posts.filter((post) => post.id != postId);
  };

  const addComment = function (str, id) {
    _posts.map((post) => {
      if (post.id == id) {
        _commentIdCounter++;
        post.comments.push({
          id: `c${_commentIdCounter}`,
          text: str,
        });
      }
    });
  };

  const removeComment = function (postId, commentId) {
    _posts.filter((post) => {
      if (post.id == postId) {
        post.comments = post.comments.filter(
          (comment) => comment.id != commentId
        );
      }
    });
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
