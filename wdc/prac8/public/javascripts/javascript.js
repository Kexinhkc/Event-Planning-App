function loadPage() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var actors = JSON.parse(this.responseText);
        var table = document.getElementsByTagName("tbody");

        console.log("okay");

        // for (let item in actors){
        //     console.log(actors.first_name);
        //     console.log(actors.last_name);

            // var row = document.createElement("tr");
            // var cell1 = document.createElement("td");
            // cell1.innerText = item.first_name;
            // var cell2 = document.createElement("td");
            // cell2.innerText = item.last_name;
            // document.row.appendChild(cell2);
            // document.table.appendChild(row);
        }
    };
    xhttp.open("GET", "/actors.html", true);
    xhttp.send();
  };

