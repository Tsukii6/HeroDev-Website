/* Define Two Object Types: */
function ObjectType1(name, email, phoneNumber) {
  this.name = name;
  this.email = email;
  this.phoneNumber = phoneNumber;
}
function ObjectType2(about, contact) {
  this.about = about;
  this.contact = contact;
}
//Create arrays to store instances of these objects.
var array1 = [ 
  new ObjectType1("Fatima", "153141@student.squ.edu.com", "+39 338 331 1604"), 
  new ObjectType1("Shatha", "s142045@student.squ.edu.com", "+968 9149 1828"),
  new ObjectType1("Rawan", "138028@student.squ.edu.com", "+968 7928 5566")
 
];
var array2 = [ 
  new ObjectType2(`Feedback`, "+918 91491828"), 
  new ObjectType2(`FunPage`, "Herodev@gmail.com"),
];

//populate these tables with data from the arrays.
function populateTable1() {
  let table = document.getElementById("table1").getElementsByTagName('tbody')[0];
  table.innerHTML = ""; //clear existing row
  array1.forEach(function(item) {
      var row = table.insertRow();
      row.insertCell(0).innerText = item.name;
      row.insertCell(1).innerText = item.email;
      row.insertCell(2).innerText = item.phoneNumber;
  });
}
function populateTable2() {
  let table = document.getElementById("table2").getElementsByTagName('tbody')[0];
  table.innerHTML = ""; 
  array2.forEach(function(item) {
      var row = table.insertRow();
      row.insertCell(0).innerText = item.about;
      row.insertCell(1).innerText = item.contact;
  });
}

populateTable1()
populateTable2()
/* Implement the search functionality */
function searchArray1() {
  var query = document.getElementById("searchInput1").value.toLowerCase(); 
  var filteredArray = array1.filter(function(item) { 
  return item.name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query) || item.phoneNumber.toLowerCase().includes(query); 
  }); 
  displaySearchResults(filteredArray, "table1"); 
}

function displaySearchResults(filteredArray, tableId) { 
  var table = document.getElementById(tableId).getElementsByTagName('tbody')[0]; 
  table.innerHTML = "";  
  filteredArray.forEach(function(item) { 
    var row = table.insertRow(); 
    for (var key in item) { 
      if (item.hasOwnProperty(key)) { 
        row.insertCell().innerText = item[key]; 
      } 
    } 
  }); 
}
