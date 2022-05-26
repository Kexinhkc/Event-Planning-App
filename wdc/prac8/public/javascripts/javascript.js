function loadPage() {
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var actors = JSON.parse(this.responseText);
        for (item in actors){
            document.createElement("tr")
        }
        document.getE
    }
  };

  xhttp.open("GET", "/actors.html", true);
  xhttp.send();
}