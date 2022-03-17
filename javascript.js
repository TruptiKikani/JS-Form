function reDirect() {
    window.location.assign("/table.html");
}

function submitHandle() {
    // e.preventDefault();
    // return false;

    let mobileNo = document.querySelector("#mo_number").value;
    if (mobileNo == "" || mobileNo == null) {
        document.getElementById("err_mno").innerHTML = "please enter mobile number";
    } else {
        document.getElementById("err_mno").innerHTML = "";
    }
    document.getElementById("err_mno").style.color = "red";
    // let mobile = { mobileNo: num };
    // console.log(mobile);


    let workNo = document.querySelector("#work_number").value;
    if (workNo == "" || workNo == null) {
        document.getElementById("err_wno").innerHTML = "please enter work number";
    } else {
        document.getElementById("err_wno").innerHTML = "";
    }
    document.getElementById("err_wno").style.color = "red";
    // let work = { workNo: num1 };
    // console.log(work);;


    let address = document.querySelector("#address").value;
    if (address == "" || address > 4000) {
        document.getElementById("err_addr").innerHTML = "please enter your address";
    } else {
        document.getElementById("err_addr").innerHTML = "";
    }
    document.getElementById("err_addr").style.color = "red";
    // let addr = { address: txt };
    // console.log(addr);


    let zipNo = document.querySelector("#zipcode").value;
    if (zipNo == "" || zipNo.length > 6) {
        document.getElementById("err_zip").innerHTML = "please enter valid zipcode";
    } else {
        document.getElementById("err_zip").innerHTML = "";
    }
    document.getElementById("err_zip").style.color = "red";
    // let zip = { zipNo: num2 };
    // console.log(zip);

    // let dropdown = document.querySelector("#dropdown").value;
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    let country = document.querySelector("#country").value;


    let arr = {
        fname,
        lname,
        mobileNo,
        workNo,
        city,
        state,
        country,
        address,
        zipNo
    }

    // arr.push(obj);
    console.log(arr);
    // e.preventDefault();
    // return false;



    // document.write(get);
    // document.write(data);

    // let details = [];
    // // console.log(details);

    // sessionStorage.setItem("details", JSON.stringify(details));

    // details = JSON.parse(sessionStorage.getItem("details"));
    // // console.log(details);

    // details.push(arr);
    // sessionStorage.setItem("details", JSON.stringify(details));
}