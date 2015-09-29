var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Daniel Lo Nigro">Hello ReactJS.NET World!</Comment>
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
          Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);


//var CommentBox = React.createClass({
//    displayName: 'CommentBox',
//    render: function () {
//        return (
//          React.createElement('div', { className: "commentBox" },
//            "Hello, world! I am a CommentBox."
//          )
//        );
//    }
//});
//React.render(
//  React.createElement(CommentBox, null),
//  document.getElementById('content')
//);