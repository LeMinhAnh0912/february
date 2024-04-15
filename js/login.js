let input_fields = document.querySelectorAll("input");
for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];
  field.addEventListener("input", function (e) {
    if (e.target.value != "") {
      e.target.parentNode.classList.add("has-content");
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove("has-content");
    }
  });
}
let loginName = document.getElementById("username");
let loginPassword = document.getElementById("password");
function handleSubmit(event) {
  event.preventDefault();
  if (loginName.value === "admin" && loginPassword.value === "123456") {
    window.location.href = "users.html";
  } else {
    alert("email is not exits");
  }
}
