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
  }