function loadPage() {
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    }
  };

  xhttp.open("GET", "/actors.html", true);
  xhttp.send();
}