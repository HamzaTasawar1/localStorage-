let divselector = document.querySelector("form");
// let getvalue = document.getElementById("get-value");
let tablevalue = document.getElementById("table-body");
let text = document.getElementById("text");
let h2 = document.getElementById("h2");
let number = document.getElementById("number");
let email = document.getElementById("email");

// Input-Page

if (divselector) {
  divselector.addEventListener("submit", (formcollector) => {
    formcollector.preventDefault();
    let name = formcollector.target.fname.value.trim();
    let Phone = formcollector.target.phone.value.trim();
    let Email = formcollector.target.email.value.trim();
    let Location = formcollector.target.address.value.trim();
    let key = Math.floor(Math.random() * 200);
    let userdata = JSON.parse(localStorage.getItem("form-block")) ?? {};
    const x = {
      [key]: {
        name: name,
        Phone: Phone,
        Email: Email,
        Location: Location,
      },
    };
    Object.assign(userdata, x);
    localStorage.setItem("form-block", JSON.stringify(userdata));
    divselector.reset();
  });
}

// Input-Page

// Table-Page
if (tablevalue) {
  let grantedvalue = () => {
    let assignvalue = JSON.parse(localStorage.getItem("form-block")) ?? {};
    let alldata = "";
    for (const value in assignvalue) {
      alldata += `<tr>
      <td> ${assignvalue[value].name}</td>
      <td> ${assignvalue[value].Phone}</td>
      <td> ${assignvalue[value].Email}</td>
      <td> ${assignvalue[value].Location}</td>
      <td><a href ="Email.html?key=${value}"><img src="arrow.png"></a></td>
      <td><img src="vector.png" onclick="remove(${value})"></td>
    </tr>`;
    }
    tablevalue.innerHTML = alldata;
  };

  grantedvalue();

  function remove(value) {
    let userdata = JSON.parse(localStorage.getItem("form-block")) ?? {};
    let data = value;
    delete userdata[data];

    localStorage.setItem("form-block", JSON.stringify(userdata));
    grantedvalue();
  }
}
function getOption() {
  let table, tr, td, i, txtValue, value;
  value = document.getElementById("select1").value.toUpperCase();
  console.log(value);
  table = document.getElementById("table-body");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    txtValue = td.textContent;
    console.log(txtValue.toUpperCase());
    if (txtValue.toUpperCase() == value) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
// filter

function filter() {
  let input, table, tr, td, td1, i, txtValue, txtValue1, value;
  input = document.getElementById("search").value.toUpperCase();
  value = document.getElementById("select1").value.toUpperCase();
  console.log(value);
  table = document.getElementById("table-body");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[3];
    if (td && td1) {
      txtValue = td.innerHTML;
      txtValue1 = td1.innerHTML.toUpperCase();
      console.log( txtValue1);
      // console.log(txtValue1.toUpperCase() === value);
      if (
        txtValue.toUpperCase().indexOf(input) > -1 &&
        (txtValue1 === value || value === "ALL")
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Assending

function assending() {
  let table = document.getElementById("Table-content");
  let rows = table.rows;
  let x, y, z, i;
  let conditon = true;
  while (conditon) {
    conditon = false;
    // let tableRow = tabledata.getElementsByTagName("tr");
    // console.log(tableRow);
    for (i = 1; i < rows.length - 1; i++) {
      console.log(rows.length);
      z = false;
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        z = true;
        break;
      }
    }
    if (z) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      conditon = true;
    }
  }
}
function descending() {
  let table = document.getElementById("Table-content");
  let rows = table.rows;
  let x, y, z, i;
  let conditon = true;
  while (conditon) {
    conditon = false;
    // let tableRow = tabledata.getElementsByTagName("tr");
    // console.log(tableRow);
    for (i = 1; i < rows.length - 1; i++) {
      console.log(rows.length);
      z = false;
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        z = true;
        break;
      }
    }
    if (z) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      conditon = true;
    }
  }
}
// Assending

// filter

// Table-Page

// Email-Page

function searchparameter() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("key");
  let userdata = JSON.parse(localStorage.getItem("form-block")) ?? {};
  text.innerHTML = userdata[product].name;
  h2.innerHTML = userdata[product].name;
  number.innerHTML = userdata[product].Phone;
  email.innerHTML = userdata[product].Email;
}

// Email-Page
