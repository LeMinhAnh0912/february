const inputemail = document.getElementById("email");
const errorLoginEmail = document.getElementById("errorLoginEmail");

const password = document.getElementById("password");
const errorLoginPassword = document.getElementById("errorLoginPassword");

const users = JSON.parse(localStorage.getItem("users"));

let currentEmail = document.getElementById("current-email");

let checkEmail = false;
function handleInputLoginEmail() {
  let emailInformation = /@/;
  if (inputemail.value === "") {
    errorLoginEmail.innerHTML = "Email không được để trống";
    checkEmail = false;
  } else if (inputemail.value.length < 6) {
    errorLoginEmail.innerHTML = "Email phải có trên 5 ký tự";
    errorLoginPassword.style.display = "flex";
    checkEmail = false;
  } else if (!emailInformation.test(inputemail.value)) {
    errorLoginEmail.innerHTML = "Nhập đúng định dạng @";
    errorLoginEmail.style.display = "flex";
    checkEmail = false;
  } else {
    errorLoginEmail.innerHTML = "";
    errorLoginEmail.style.display = "none";
    checkEmail = true;
  }
}
var checkPassword = false;
function handleInputLoginPassword() {
  console.log(errorLoginPassword);

  if (password.value === "") {
    errorLoginPassword.innerHTML = " Mật khẩu không được để trống";
    errorLoginPassword.style.display = "flex";
    checkPassword = false;
  } else if (password.value.length < 8) {
    errorLoginPassword.innerHTML = "Phải có trên 8 ký tự";
    errorLoginPassword.style.display = "flex";
    checkPassword = false;
  } else {
    errorLoginPassword.innerHTML = "";
    errorLoginPassword.style.display = "none";
    checkPassword = true;
  }
}

function handleLoginSubmit(event) {
  event.preventDefault();
  console.log(checkEmail);
  console.log(checkPassword);

  if (checkEmail && checkPassword) {
    let index = users.findIndex((user) => user.email === email.value);
    // console.log(index);
    if (index != -1) {
      if (users[index].password === password.value) {
        if (users[index].isActive == false) {
          alert("Tài khoản của bạn đã bị khóa");
        } else {
          // console.log("bbb");
          alert("Đăng nhập tài khoản thành công.");
          // console.log("aa");
          const currentUser = {
            access_token: "10000000-1000-4000-8000-100000000000".replace(
              /[018]/g,
              (c) =>
                (
                  c ^
                  (crypto.getRandomValues(new Uint8Array(1))[0] &
                    (15 >> (c / 4)))
                ).toString(16)
            ),
            email: users[index].email,
            products: [],
          };
          localStorage.setItem("currentUser", JSON.stringify(currentUser));

          event.target.reset();
          window.location.href = "project.html";
        }
      }
    }
  } else {
    alert("Bạn vui lòng nhập đầy đủ thông tin");
  }
}
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}; //in ra
console.log(currentUser);
if (currentUser.access_token == !"") {
  currentEmail.innerHTML = currentUser.email;
  document.getElementById("btn-sign-out").style.display = "flex";
  document.getElementById("icon-sign-in").style.display = "none";
} else {
  document.getElementById("btn-sign-out").style.display = "none";
  document.getElementById("icon-sign-in").style.display = "flex";
  currentEmail.innerHTML = "";
}

function handleLink() {
  window.location.href = "password.html";
}
