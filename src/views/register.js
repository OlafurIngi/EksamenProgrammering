document.addEventListener("DOMContentLoaded", (event) => {
// Her we define form
    const form = document.getElementById("form ");
    form.addEventListener("submit", (event) => {
        // Prevent any default action
        event.preventDefault();
        // defining email and password by their ID in the form
        const email =  document.getElementById("email").value
        const password =  document.getElementById("password").value

        const user = {
            email: email,
            password: password,
        };

        // Fetch the information of the user
        fetch("http://localhost:4000/users/create", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(user), 
        }) 
        .then((res) => res.json());
        
});
});




/*document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const user = {
        email: email,
        password: password,
      };
  
      fetch("http://localhost:4000/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/login.html";
          }
        })
        .catch(() => {
          window.alert("Error, try again");
        });
    });

  });
  */