// function parseJwt (token) {
//   var base64Url = token.split('.')[1];
//   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//  }).join(''));

//  return JSON.parse(jsonPayload);
// };

// function onSignIn(response) {

//      console.log(JSON.stringify(parseJwt(response.credential)));

//   // const responsePayload = decodeJwtResponse(response.credential);

//   // console.log("ID: " + responsePayload.sub);
//   // console.log('Full Name: ' + responsePayload.name);
//   // console.log('Given Name: ' + responsePayload.given_name);
//   // console.log('Family Name: ' + responsePayload.family_name);
//   // console.log("Image URL: " + responsePayload.picture);
//   // console.log("Email: " + responsePayload.email);

//     // var xhttp = new XMLHttpRequest();
//     // xhttp.open('POST', '',true);
//     // xhttp.setRequestHeader('Content-Type', 'application/json');
//     // xhttp.send(JSON.stringify('id_token'));
//   }