// ÆNDRE

// If you are not logged in go to login.html
document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    if (!user) {
      location.href = "/login.html";
    }
  
    // Delete account button
    document.getElementById("delete").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const user = JSON.parse(localStorage.getItem("user"));
  
      fetch("http://localhost:4000/users/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            localStorage.removeItem("user");
            location.href = "/login.html";
          }
        })
        .catch(() => {
          window.alert("Error");
        });
    });
  });
  
  
  // Logging out
  document.getElementById("logout").addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem("user");
    location.href = "login.html";
  });

