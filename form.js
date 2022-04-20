function submitHandle() {
  
    let mobileNo = document.querySelector("#mo_number").value;
    document.getElementById("err_mno").innerHTML =
      mobileNo == ""
        ? "<span style='color: red;'>please enter mobile number"
        : "<span style='color: red;'> ";
  
    let workNo = document.querySelector("#work_number").value;
    document.getElementById("err_wno").innerHTML =
      workNo == ""
        ? "<span style='color: red;'>please enter work number"
        : "<span style='color: red;'> ";
  
    let address = document.querySelector("#address").value;
    document.getElementById("err_addr").innerHTML =
      address == "" || address < 4000
        ? "<span style='color: red;'>please enter your address"
        : "<span style='color: red;'> ";
  
    let zipNo = document.querySelector("#zipcode").value;
    document.getElementById("err_zip").innerHTML =
      zipNo == "" || zipNo.length > 6
        ? "<span style='color: red;'>please enter valid zipcode"
        : "<span style='color: red;'> ";
  
    let firstName = document.querySelector("#firstName").value;
    document.getElementById("err_firstName").innerHTML =
      firstName == ""
        ? "<span style='color: red;'>please enter your First Name"
        : "<span style='color: red;'></span>";
  
    let lastName = document.querySelector("#lastName").value;
    document.getElementById("err_lastName").innerHTML =
      lastName == ""
        ? "<span style='color: red;'>please enter your Last Name"
        : "<span style='color: red'> ";
  
    let city = document.querySelector("#city").value;
    document.getElementById("err_city").innerHTML =
      city == ""
        ? "<span style='color: red;'>please enter your city"
        : "<span style='color: red;'> ";
  
    let state = document.querySelector("#state").value;
    document.getElementById("err_state").innerHTML =
      state == ""
        ? "<span style='color: red;'>please enter your state"
        : "<span style='color: red;'> ";
  
    let country = document.querySelector("#country").value;
    document.getElementById("err_country").innerHTML =
      country == ""
        ? "<span style='color: red;'>please enter your country"
        : "<span style='color: red;'> ";
  
    let arr = {firstName,lastName,mobileNo,workNo,city,state,country,address,zipNo,};
  
    let arr2 = Object.values(arr).filter((data) => data !== "");
    if (arr2.length === 9) {
      if(localStorage.index) {
          let details = JSON.parse(localStorage.getItem("details"));
          details.splice(localStorage.index, 1, arr)
          localStorage.setItem("details", JSON.stringify(details));
        } 
      else if (!localStorage.getItem("details")) {
          let data = [];
          data.push(arr);
          localStorage.setItem("details", JSON.stringify(data));
      }
      else {
          let data = JSON.parse(localStorage.getItem("details"));
          data.push(arr);
          localStorage.setItem("details", JSON.stringify(data));
        }
      window.location.assign("./table.html");
      localStorage.removeItem("index");
    }
  }
  
  if (localStorage.index) {
    let a = JSON.parse(localStorage.getItem("details"));
    let b = a[localStorage.index];
    document.querySelector("#firstName").value = b.firstName;
    document.querySelector("#lastName").value = b.lastName;
    document.querySelector("#mo_number").value = b.mobileNo;
    document.querySelector("#work_number").value = b.workNo;
    document.querySelector("#city").value = b.city;
    document.querySelector("#state").value = b.state;
    document.querySelector("#country").value = b.country;
    document.querySelector("#address").value = b.address;
    document.querySelector("#zipcode").value = b.zipNo;
  }
  
