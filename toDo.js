
var altCat = [];


function newTask()
{
	var d = new Date()
	var myTask = document.getElementById("theTask").value;
	var myCategory = document.getElementById("category").value;
	var myColor;
	var myDeadline = document.getElementById("theDeadline").value;

	var dd = d.getDate();
	var mm = d.getMonth()+1; //January is 0!

	var yyyy = d.getFullYear();
	var today = mm+'/'+dd+'/'+yyyy;

	var myTable = document.getElementById("myTable");
	var row = myTable.insertRow(1);
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	var cell4 = row.insertCell(4);
	var cell5 = row.insertCell(5);
	var cell6 = row.insertCell(6);

	var check = document.createElement('input');
	  check.setAttribute("type", "checkbox");
		check.setAttribute("value", false);
		check.addEventListener("click", function(){
																								if(this.value == "true"){ this.value ="false";}
																								else{this.value = "true"};
																							});

	var deleteB = document.createElement('button');
	  deleteB.innerHTML = "Delete";
		deleteB.addEventListener("click", function(){remove(this);});

	switch(myCategory){
		case "School": myColor = "red";
			break;
		case "Work": myColor = "gray";
			break;
		case "Friends": myColor = "orange";
			break;
		case "Family": myColor = "pink";
			break;
		default: myColor = findCat(myCategory);
	}

	cell0.innerHTML = myTask;
	cell1.innerHTML = myCategory;
	cell1.style.backgroundColor = myColor;
	cell2.innerHTML = today;
	cell3.innerHTML = myDeadline;
	cell4.appendChild(check);
	cell5.appendChild(deleteB);
//	console.log(myTask + myCategory + myColor + today + myDeadline);
//	add(myTask, myCategory, myColor, today, myDeadline);

	}

function addCategory()
{
	var myCategory = document.getElementById("altCategory").value;
	var categories = document.getElementById("category");
	categories.innerHTML = categories.innerHTML + "<option value='" + myCategory +"'>" +myCategory + "</option>";
	var color = document.getElementById("cColor").value;
	var index = altCat.length;
	altCat[index] = myCategory;
	altCat[index+1] = color;
}

function findCat(select)
{
	var i=0;
	while(i<altCat.length)
	{
		if(altCat[i] == select)
		{
			return altCat[i+1];
		}//if
	}//while
}

function sortAlpha(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
//			console.log(x.innerHTML + " " + y.innerHTML);
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortNum(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML > y.innerHTML) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML < y.innerHTML) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}//sortNum

function remove(element)
{
	var ask = confirm("Do you want to delete this task?");
	if(ask == true)
	{
		var node = element;
		while(node.tagName.toLowerCase() !== "table")
		{
			node = node.parentElement;
		}
		var rowId = element.parentElement.parentElement.rowIndex;
		document.getElementById("myTable").deleteRow(rowId);
	}

}
