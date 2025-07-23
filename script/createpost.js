// Show modal
function openCreateModal() {
  document.getElementById("createPostModal").classList.remove("hidden");
}

// Hide modal
function closeCreateModal() {
  document.getElementById("createPostModal").classList.add("hidden");
}

// Preview images
document.getElementById('imageInput').addEventListener('change', function () {
  const previewArea = document.getElementById('previewArea');
  previewArea.innerHTML = "";
  Array.from(this.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      previewArea.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

// Load posts from storage
document.addEventListener('DOMContentLoaded', () => {
  const storedPosts = JSON.parse(localStorage.getItem('debatePosts')) || [];
  storedPosts.forEach(post => {
    renderPost(post, false);
  });
});

// Create post
document.querySelector('.create-btn').addEventListener('click', function () {
  const topic = document.getElementById('debate-topic').value.trim();
  const category = document.getElementById('debate-category').value;
  const context = document.getElementById('debate-context').value.trim();
  const imageInput = document.getElementById('imageInput');

  if (!topic || !category) {
    alert('Debate topic and category are required!');
    return;
  }

  const images = [];
  Array.from(imageInput.files).forEach(file => {
    const url = URL.createObjectURL(file);
    images.push(url);
  });

  const postData = {
    id: Date.now(),
    topic,
    category,
    context,
    images,
    agree: 0,
    neutral: 0,
    disagree: 0,
    comments: 0
  };

  renderPost(postData, true);

  document.getElementById('debate-topic').value = '';
  document.getElementById('debate-category').selectedIndex = 0;
  document.getElementById('debate-context').value = '';
  imageInput.value = '';
  document.getElementById('previewArea').innerHTML = '';

  closeCreateModal();
});

function renderPost(data, save) {
  const post = document.createElement('div');
  post.classList.add('debate-post');
  post.dataset.id = data.id;

  let imageHTML = '';
  if (data.images.length) {
    imageHTML = `<div class="debate-images">` +
      data.images.map(src => `<img src="${src}" class="debate-upload-preview" />`).join('') +
      `</div>`;
  }

  post.innerHTML = `
    <div class="post-header">
      <div class="avatar">
        <img class="author-image" src="/images/boy.png" alt="">
      </div>
      <div class="user-info">
        <div class="username">Nimesh Adhikari</div>
        <div class="timestamp">Just now</div>
      </div>
      <div class="post-options">
        <button class="dots-btn" onclick="toggleDotsMenu(this)">⋮</button>
        <div class="dots-menu hidden">
          <button class="delete-post-btn">🗑 Delete Post</button>
        </div>
      </div>
    </div>

    <div class="post-content">
      <div class="debate-topic">${data.topic}</div>
      <div class="topic-category">${data.category}</div>
      ${data.context ? `<p class="extra-context">${data.context}</p>` : ""}
      ${imageHTML}
    </div>

    <div class="stats-bar">
      <div class="stat-item"><div class="stat-dot agree"></div><span>0% Agree</span></div>
      <div class="stat-item"><div class="stat-dot neutral"></div><span>0% Neutral</span></div>
      <div class="stat-item"><div class="stat-dot disagree"></div><span>0% Disagree</span></div>
    </div>

    <div class="debate-actions">
      <button class="opinion-button agree"><i class="fas fa-check"></i><span>Agree</span><span class="opinion-count">0</span></button>
      <button class="opinion-button neutral"><i class="fas fa-minus"></i><span>Neutral</span><span class="opinion-count">0</span></button>
      <button class="opinion-button disagree"><i class="fas fa-times"></i><span>Disagree</span><span class="opinion-count">0</span></button>
    </div>

    <div class="post-actions">
      <button class="action-button"><i class="fas fa-comment action-icon"></i><span>Comment</span><span>0</span></button>
      <button class="action-button"><i class="fas fa-share action-icon"></i><span>Share</span></button>
    </div>
  `;

  // Add to UI
  document.querySelector('.posts-container').prepend(post);

  // Add voting functionality
  addVotingLogic(post);

  // Add delete functionality
  const deleteBtn = post.querySelector('.delete-post-btn');
  deleteBtn.addEventListener('click', () => {
    const id = post.dataset.id;
    post.remove();
    const posts = JSON.parse(localStorage.getItem('debatePosts')) || [];
    const updatedPosts = posts.filter(p => p.id != id);
    localStorage.setItem('debatePosts', JSON.stringify(updatedPosts));
  });

  // Save to localStorage
  if (save) {
    const posts = JSON.parse(localStorage.getItem('debatePosts')) || [];
    posts.unshift(data);
    localStorage.setItem('debatePosts', JSON.stringify(posts));
  }
}

function addVotingLogic(post) {
  let agree = 0, neutral = 0, disagree = 0;

  const agreeBtn = post.querySelector('.opinion-button.agree');
  const neutralBtn = post.querySelector('.opinion-button.neutral');
  const disagreeBtn = post.querySelector('.opinion-button.disagree');

  const agreeCount = agreeBtn.querySelector('.opinion-count');
  const neutralCount = neutralBtn.querySelector('.opinion-count');
  const disagreeCount = disagreeBtn.querySelector('.opinion-count');

  agreeBtn.addEventListener('click', () => {
    agree++;
    agreeCount.textContent = agree;
    updateStats();
  });

  neutralBtn.addEventListener('click', () => {
    neutral++;
    neutralCount.textContent = neutral;
    updateStats();
  });

  disagreeBtn.addEventListener('click', () => {
    disagree++;
    disagreeCount.textContent = disagree;
    updateStats();
  });

  function updateStats() {
    const total = agree + neutral + disagree;
    const agreePercent = Math.round((agree / total) * 100);
    const neutralPercent = Math.round((neutral / total) * 100);
    const disagreePercent = 100 - agreePercent - neutralPercent;

    const stats = post.querySelectorAll('.stats-bar .stat-item');
    stats[0].querySelector('span').textContent = `${agreePercent}% Agree`;
    stats[1].querySelector('span').textContent = `${neutralPercent}% Neutral`;
    stats[2].querySelector('span').textContent = `${disagreePercent}% Disagree`;
  }
}

// Toggle 3-dot menu
function toggleDotsMenu(button) {
  const menu = button.nextElementSibling;
  menu.classList.toggle('hidden');
}
