let storeId = [];
let checkAll = document.getElementById("selectAll");
const Detail = JSON.parse(localStorage.details);

if (localStorage.getItem("details")) {
  let details = JSON.parse(localStorage.getItem("details"));
  console.log(details);
  let tabledata = details.map(
    (table, Index) =>
      `<tr id="tr">
    <td> <input id="select${Index}" type="checkbox" onclick="check(${Index})"/> </td>
    <td>${Index + 1}</td>
    <td>${table.firstName}</td>
    <td>${table.lastName}</td>
    <td>${table.mobileNo}</td>
    <td>${table.workNo}</td>
    <td>${table.city}</td>
    <td>${table.state}</td>
    <td>${table.country}</td>
    <td>${table.address}</td>
    <td>${table.zipNo}</td>
    <td> <button id="del" type="button" onclick="deleteHandle(${Index})">Delete</button> </td>
    <td> <button id="update" type="button" onclick="updateHandle(${Index})">Update</button> </td>
    </tr>`
  );
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = tabledata;
}

function deleteHandle(Index) {
  let a = JSON.parse(localStorage.getItem("details"));
  a.splice(Index, 1);
  localStorage.setItem("details", JSON.stringify(a));
  location.reload();
}

function updateHandle(Index) {
  localStorage.index = Index;
  window.location.assign("./form.html");
}

const check = (Index) => {
  let checkBox = document.getElementById(`select${Index}`);
  if (checkBox.checked == true) {
    !storeId.includes(Index) && storeId.push(Index);
  } else if (checkBox.checked == false) {
    let p = storeId.indexOf(Index);
    storeId.splice(p, 1);
    checkAll.checked = false;
  }
  if (storeId.length === Detail.length) {
    checkAll.checked = true;
  }
};

const deleteAll = () => {
  if (storeId.length > 0) {
    let newData = Detail.filter((data, Index) => {
      return !storeId.includes(Index);
    });
    localStorage.setItem("details", JSON.stringify(newData));
    location.reload();
  }
};

const selectAll = () => {
  Detail.map((data, Index) => {
    let checkBox = document.getElementById(`select${Index}`);
    if (checkAll.checked === true) {
      !storeId.includes(Index) && storeId.push(Index);
      checkBox.checked = true;
    } else {
      checkBox.checked = false;
      storeId.splice(0, storeId.length);
    }
  });
};
