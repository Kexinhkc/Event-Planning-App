function loadPage() {
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        JSON.parse(this.responseText)
        document.getE
    }
  };

  xhttp.open("GET", "/actors.html", true);
  xhttp.send();
}