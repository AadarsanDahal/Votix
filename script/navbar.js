
  //profile icon ko lagi js
  
  function toggleProfileMenu() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("hidden");
  }

  document.addEventListener("click", function (event) {
    const profile = document.querySelector(".nav-profile");
    const dropdown = document.getElementById("profileDropdown");

    if (!profile.contains(event.target)) {
      dropdown.classList.add("hidden");
    }
  });

  function toggleTheme() {
    // You can implement your own dark/light theme switch here
    alert("Theme toggled! (You can replace this alert with actual code)");
  }



  
