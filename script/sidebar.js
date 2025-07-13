
// ------------------------------side-bar ko toggle ko lagi js -------------------------
function toggleChannelList() {
    toggleList('channel-list', 'channel-toggle-icon');
  }
  
  function toggleList(listId, iconId) {
    const list = document.getElementById(listId);
    const icon = document.getElementById(iconId);
  
    list.classList.toggle('closed');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  }