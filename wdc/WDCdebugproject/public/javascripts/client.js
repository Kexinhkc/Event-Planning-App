
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Login Successfully");
           window.location.replace("home.html");
        }else if (this.readyState == 4 && this.status >= 400){
            alert("Login Failed");
        }
    };

    xhttp.open("POST", "/login");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({token : googleUser.getAuthResponse().id_token}));

  }



  function login() {

    console.log("inside login()");

    let user={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        //token: localStorage.getItem('token')
    };

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Login Successfully");
           window.location.replace("home.html");
        }else if (this.readyState == 4 && this.status >= 400){
            alert("Login Failed");
        }
    };

    xhttp.open("POST", "/login",true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));

  }

