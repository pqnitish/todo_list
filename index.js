let task = document.getElementById("task");
//console.log(input.value);
let priority = document.getElementById("priority");
//console.log(priority);
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
//console.log(form)
let allDetails = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {};
  obj.input1 = task.value;
  obj.input2 = priority.value;
  //console.log(obj);
  allDetails.push(obj);
  tbody.innerHTML = null;
  //console.log(allDetails);
  allDetails.map((ele) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = ele.input1;
    td2.innerText = ele.input2;
    row.append(td1, td2);
    tbody.append(row);
  });
});
