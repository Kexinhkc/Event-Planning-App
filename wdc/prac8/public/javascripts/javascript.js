function loadPage() {
    //console.log('insideeee')
    var some = document.getElementById("one");
    var actor = document.getElementById("two");
     some.remove();
     actor.remove();
    // some.innerHTML="";
    // actor.innerHTML="";

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

  var actor = {
    firstname: document.getElementById('actor-first-name').value,
    lastname: document.getElementById('actor-last-name').value
  };

  var xhttp = new XMLHttpRequest();

  // xhttp.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //         alert("Actor added successfully!");
  //     }
  // }

  xhttp.open("POST", "/add", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(actor));

}



