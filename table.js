if (localStorage.getItem("details")) {
    let details = JSON.parse(localStorage.getItem("details"));
    console.log(details);
    let tabledata =details.map((table, Index) => (
`<tr id="tr">
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
    ));
    // console.log(tabledata);
    let tbody = document.querySelector('#tbody');
    tbody.innerHTML = tabledata;
}

function deleteHandle(Index) {
    let a = JSON.parse(localStorage.getItem("details"));
    a.splice(Index, 1);
    localStorage.setItem("details", JSON.stringify(a));
    location.reload();
}

function updateHandle(Index){

    localStorage.index = Index
   window.location.assign("./form.html");

}
