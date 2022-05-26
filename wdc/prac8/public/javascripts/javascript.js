function loadPage() {
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var actors = JSON.parse(this.responseText);
        var table = document.getElement
        for (item in actors){
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            cell.innerText = item.first_name;
            document.b.appendChild(para);
        }

    }
  };

  xhttp.open("GET", "/actors.html", true);
  xhttp.send();
}