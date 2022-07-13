const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

$('#post').click(function () {
  let postText = $('#container>#input').val();
  if (postText) {
    tweeter.addPost(postText);
    $('#container>#input').val('');
    renderer.renderPosts(tweeter.getPosts());
  } else {
    const errorParagraph = $('#container>p');
    errorParagraph.css('color', 'red');
    errorParagraph.text('Empty input,please enter post text !!');
    setTimeout(function () {
      errorParagraph.text('');
    }, 2000);
  }
});

$('#posts').on('click', '.delete', function () {
  tweeter.removePost($(this).data('id'));
  renderer.renderPosts(tweeter.getPosts());
});

$('#posts').on('click', '.comments>button', function () {
  let comment = $(this).closest('.comments').find('input').val();
  if (comment) {
    tweeter.addComment(comment, $(this).data('id'));
    renderer.renderPosts(tweeter.getPosts());
  } else {
    const errorParagraph = $(this).closest('.comments').find('>p:last-child');
    errorParagraph.css('color', 'red');
    errorParagraph.text('Empty input,please enter comment !!');
    setTimeout(function () {
      errorParagraph.text('');
    }, 2000);
  }
});

$('#posts').on('click', '.delete-comment', function () {
  tweeter.removeComment($(this).data('post-id'), $(this).data('comment-id'));
  renderer.renderPosts(tweeter.getPosts());
});
