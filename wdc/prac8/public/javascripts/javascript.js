function loadPage() {
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var actors = JSON.parse(this.responseText);
        var table = document.getElementsByTagName("tbody");

        for (item in actors){
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            cell.innerText = item.first_name;
            var cell = document.createElement("td");
            cell.innerText = item.first_name;
            document.row.appendChild(cell);
        }

    }
  };

  xhttp.open("GET", "/actors.html", true);
  xhttp.send();
}