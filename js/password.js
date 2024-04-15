let inputEmail = document.getElementById("email");
let errorEmail = document.getElementById("errorEmail");
let inputOldpassword = document.getElementById("oldPassword");
let erorrOldpassword = document.getElementById("erorrOldpassword");
let inputNewpassword = document.getElementById("newPassword");
let erorrNewpassword = document.getElementById("erorrNewpassword");
let inputConfirmpassword = document.getElementById("confirmPassword");
let errorConfirmpassword = document.getElementById("errorConfirmpassword");

var checkEmail = false;
function handleEmail() {
  if (inputEmail.value == "") {
    errorEmail.innerHTML = "Tên không được để trống";
    errorEmail.style.display = "flex";
    checkEmail = false;
  } else {
    // errorEmail = "";
    errorConfirmpassword.style.display = "none";
    checkEmail = true;
  }
}
var checkOldpassword = false;
function handleOldpassword() {
  if (inputOldpassword.value == "") {
    erorrOldpassword.innerHTML = "Tên không được để trống";
    erorrOldpassword.style.display = "flex";
    checkOldpassword = false;
  } else {
    // erorrOldpassword = "";
    errorConfirmpassword.style.display = "none";
    checkOldpassword = true;
  }
}
var checkNewpassword = false;
function handleNewpassword() {
  if (inputNewpassword.value == "") {
    erorrNewpassword.innerHTML = "Tên không được để trống";
    erorrNewpassword.style.display = "flex";
    checkNewpassword = false;
  } else {
    // erorrNewpassword = "";
    errorConfirmpassword.style.display = "none";
    checkNewpassword = true;
  }
}
var checkConfirmpassword = false;
function handleConfirmpassword() {
  if (inputConfirmpassword.value == "") {
    errorConfirmpassword.innerHTML = "Tên không được để trống";
    errorConfirmpassword.style.display = "flex";
    checkConfirmpassword = false;
    console.log("aaa");
  } else if (inputNewpassword.value !== inputConfirmpassword.value) {
    errorConfirmpassword.innerHTML = "Nhập lại mật khẩu ";
    errorConfirmpassword.style.display = "flex";
    console.log("bbb");

    checkConfirmpassword = false;
  } else {
    // errorConfirmpassword.innerHTML = "";
    errorConfirmpassword.style.display = "none";
    checkConfirmpassword = true;
  }
}
let users = JSON.parse(localStorage.getItem("users")) || [];
function handleSubmit(event) {
  event.preventDefault();
  //   console.log(checkEmail);
  //   console.log(checkConfirmpassword);
  //   console.log(checkNewpassword);
  //   console.log(checkOldpassword);
  if (
    checkEmail == true &&
    checkOldpassword == true &&
    checkNewpassword == true &&
    checkConfirmpassword == true
  ) {
    let index = users.findIndex((user) => user.email == inputEmail.value);
    console.log(index);

    if (index != -1) {
      users[index].password = inputNewpassword.value;
      localStorage.setItem("users", JSON.stringify(users));
    }
    alert("doi mat khau thanh cong");
  } else {
    alert("Nhập sai thông tin");
  }
}
