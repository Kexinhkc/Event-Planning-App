function onSignIn(response) {
  const responsePayload = decodeJwtResponse(response.credential);

  console.log("ID: " + responsePayload.sub);
  console.log('Full Name: ' + responsePayload.name);
  console.log('Given Name: ' + responsePayload.given_name);
  console.log('Family Name: ' + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);

    // var xhttp = new XMLHttpRequest();
    // xhttp.open('POST', '',true);
    // xhttp.setRequestHeader('Content-Type', 'application/json');
    // xhttp.send(JSON.stringify('id_token'));
  }