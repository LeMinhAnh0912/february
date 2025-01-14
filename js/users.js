document.querySelectorAll(".sidebar-submenu").forEach((e) => {
  e.querySelector(".sidebar-menu-dropdown").onclick = (event) => {
    event.preventDefault();
    e.querySelector(".sidebar-menu-dropdown .dropdown-icon").classList.toggle(
      "active"
    );

    let dropdown_content = e.querySelector(".sidebar-menu-dropdown-content");
    let dropdown_content_lis = dropdown_content.querySelectorAll("li");

    let active_height =
      dropdown_content_lis[0].clientHeight * dropdown_content_lis.length;

    dropdown_content.classList.toggle("active");

    dropdown_content.style.height = dropdown_content.classList.contains(
      "active"
    )
      ? active_height + "px"
      : "0";
  };
});

setDarkChart = (dark) => {
  let theme = {
    theme: {
      mode: dark ? "dark" : "light",
    },
  };

  customer_chart.updateOptions(theme);
  category_chart.updateOptions(theme);
};

// DARK MODE TOGGLE
let darkmode_toggle = document.querySelector("#darkmode-toggle");

darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  document.querySelector("body").classList.toggle("dark");
  darkmode_toggle.querySelector(".darkmode-switch").classList.toggle("active");
  setDarkChart(document.querySelector("body").classList.contains("dark"));
};

let overlay = document.querySelector(".overlay");
let sidebar = document.querySelector(".sidebar");

document.querySelector("#mobile-toggle").onclick = () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
};

document.querySelector("#sidebar-close").onclick = () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
};

var users = JSON.parse(localStorage.getItem("users"));
let tbody = document.getElementById("tbody");
function displayData() {
  let html = "";
  for (let i in users) {
    html += `
<tr>
<td>${users[i].id}</td>
<td>${users[i].name}</td>
<td>${users[i].email}</td>
<td>${users[i].password}</td>
 <td>
 <input type = "checkbox" onchange = "handleChangeCheckbox('${users[i].id}')" ${
      users[i].isActive === true ? "checked" : ""
    }>
 <button onclick = "handleDelete('${users[i].id}')">Delete </button>
 </td>
</tr>
    `;
  }
  tbody.innerHTML = html;
}
displayData();

function handleDelete(id) {
  const index = users.findIndex((user) => user.id == id);
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  displayData();
}
function handleChangeCheckbox(id) {
  const index = users.findIndex((user) => user.id == id);
  users[index].isActive = !users[index].isActive;
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users[index].isActive);
}
