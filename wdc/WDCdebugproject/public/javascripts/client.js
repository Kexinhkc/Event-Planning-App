
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

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

  ////////////////////////////////////////////////////////////////////////////////


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

  function onSignIn2(googleUser) {
    var profile = googleUser.getBasicProfile();

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Login Successfully");
           window.location.replace("homeAdmin.html");
        }else if (this.readyState == 4 && this.status >= 400){
            alert("Login Failed");
        }
    };

    xhttp.open("POST", "/adminLogin");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({token : googleUser.getAuthResponse().id_token}));

  }

  ////////////////////////////////////////////////////////////////////////////////

  function adminLogin() {

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
           window.location.replace("homeAdmin.html");
        }else if (this.readyState == 4 && this.status >= 400){
            alert("Login Failed");
        }
    };

    xhttp.open("POST", "/adminLogin",true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));

  }


  ////////////////////////////////////////////////////////////////////////////////


  function createAccount() {

    // console.log("inside login()");

    let user={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        first_name:document.getElementById('first_name').value,
        last_name:document.getElementById('last_name').value,
        //token: localStorage.getItem('token')
    };

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Account Created Successfully");
           window.location.replace("home.html");
        }else if (this.readyState == 4 && this.status >= 400){
            alert("Failed to Create Account");
        }
    };

    xhttp.open("POST", "/userAccount",true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));

  }