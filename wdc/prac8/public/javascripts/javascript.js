function loadPage() {
    console.log('insideeee')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

         var actors =JSON.parse(this.responseText);
         var table = document.getElementsByTagName("tbody");

        console.log(actors)

        for (var i=0;i<actors.length; i++){
            // console.log(item.first_name);
            // console.log(item.last_name);

            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            cell1.innerText = actors[i].first_name;
            row.appendChild(cell1);
            var cell2 = document.createElement("td");
            cell2.innerText = actors[i].last_name;
            row.appendChild(cell2);
            table[0].appendChild(row);
        }
    }

  }
  xhttp.open("GET", "/actors", true);
  xhttp.send();
}


function addActor() {

  let user = {
    firstname: document.getElementsByID('actor-first-name')[0].value,
    lastname: document.getElementsByID('actor-last-name')[0].value
  };

  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          alert("Actor added successfully!");
      }
  }

  xhttp.open("POST", "/add");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(user));

}



