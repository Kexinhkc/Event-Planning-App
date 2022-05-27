function loadPage() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

         var actors =JSON.parse(this.responseText);
         var table = document.getElementsByTagName("tbody");

        console.log(actors[0].last_name)

        for (let item in actors){
            // console.log(item.first_name);
            // console.log(item.last_name);

            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            cell1.innerText = item.first_name;
            row.appendChild(cell1);
            var cell2 = document.createElement("td");
            cell2.innerText = item.last_name;
            row.appendChild(cell2);
            table[0].appendChild(row);
        }
    };
    xhttp.open("GET", "/getActors", true);
    xhttp.send();
  }
}



