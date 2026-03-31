document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.debate-post');
  
    posts.forEach(post => {
      const agreeBtn = post.querySelector('.opinion-button.agree');
      const neutralBtn = post.querySelector('.opinion-button.neutral');
      const disagreeBtn = post.querySelector('.opinion-button.disagree');
  
      const agreeCount = agreeBtn.querySelector('.opinion-count');
      const neutralCount = neutralBtn.querySelector('.opinion-count');
      const disagreeCount = disagreeBtn.querySelector('.opinion-count');
  
      let agreeVotes = parseInt(agreeCount.textContent);
      let neutralVotes = parseInt(neutralCount.textContent);
      let disagreeVotes = parseInt(disagreeCount.textContent);
  
      agreeBtn.addEventListener('click', () => {
        agreeVotes++;
        agreeCount.textContent = agreeVotes;
        updateStats();
      });
  
      neutralBtn.addEventListener('click', () => {
        neutralVotes++;
        neutralCount.textContent = neutralVotes;
        updateStats();
      });
  
      disagreeBtn.addEventListener('click', () => {
        disagreeVotes++;
        disagreeCount.textContent = disagreeVotes;
        updateStats();
      });
  
      function updateStats() {
        const total = agreeVotes + neutralVotes + disagreeVotes;
        const agreePercent = Math.round((agreeVotes / total) * 100);
        const neutralPercent = Math.round((neutralVotes / total) * 100);
        const disagreePercent = 100 - agreePercent - neutralPercent;
  
        const stats = post.querySelectorAll('.stats-bar .stat-item');
        stats[0].querySelector('span').textContent = `${agreePercent}% Agree`;
        stats[1].querySelector('span').textContent = `${neutralPercent}% Neutral`;
        stats[2].querySelector('span').textContent = `${disagreePercent}% Disagree`;
      }
    });
  });
  