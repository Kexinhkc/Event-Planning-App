// function parseJwt (token) {
//   var base64Url = token.split('.')[1];
//   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//  }).join(''));

//  return JSON.parse(jsonPayload);
// };

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("Login Successfully");
        }else if (this.readyState == 4 && this.status >= 400){
            alert("Login Failed");
        }
    }

    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({token : googldUser.getAuthResponse().id_token}));

  }