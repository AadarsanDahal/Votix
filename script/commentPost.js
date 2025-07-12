function postComment(button) {
    const form = button.closest('.comment-form');
    const input = form.querySelector('.comment-input');
    const commentText = input.value.trim();
  
    if (commentText === '') return;
  
    const post = button.closest('.debate-post');
    const commentsPreview = post.querySelector('.comments-preview');
  
    // Create comment element
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
  
    // For demo purpose — initials and name hardcoded, you can fetch from logged in user
    commentItem.innerHTML = `
      <div class="comment-avatar">U</div>
      <div class="comment-content">
        <div class="comment-author">You</div>
        <div class="comment-text">${commentText}</div>
      </div>
    `;
  
    // Insert above the form
    commentsPreview.insertBefore(commentItem, form);
  
    // Clear input
    input.value = '';
  }
  