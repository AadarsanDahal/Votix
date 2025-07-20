function openCreateModal() {
    document.getElementById("createPostModal").classList.remove("hidden");
  }
  
  function closeCreateModal() {
    document.getElementById("createPostModal").classList.add("hidden");
  }
  
  document.getElementById('imageInput').addEventListener('change', function () {
    const previewArea = document.getElementById('previewArea');
    previewArea.innerHTML = ""; // Clear previous previews
  
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
  