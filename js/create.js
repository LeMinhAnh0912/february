const password = document.getElementById("password");
const errorPassword = document.getElementById("errorPassword");
const errorUsername = document.getElementById("errorUsername");
const inputname = document.getElementById("username");
const errorName = document.getElementById("errorName");
const inputemail = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
var checkName = false;
function handleInput() {
  // console.log(inputname.value);test dieu kien
  console.log(inputname.value);
  if (inputname.value === "") {
    errorName.innerHTML = "Tên không được để trống";
    errorName.style.display = "flex";
    checkName = false;
  } else if (inputname.value.length < 6) {
    errorName.innerHTML = "Phải có trên 6 ký tự";
    errorName.style.display = "flex";
    checkName = false;
  } else if (inputname.value === inputname.value.toLowerCase()) {
    errorName.innerHTML = "Phải có ít nhất 1 ký tự viết hoa";
    errorName.style.display = "flex";
    checkName = false;
  } else {
    errorName.style.display = "none";
    checkName = true;
  }
}

// var checkEmail = false;
// function handleInputEmail() {
//   console.log(inputemail.value);
//   if (inputemail.value === "") {
//     errorEmail.innerHTML = "Tên không được để trống";
//     errorEmail.style.display = "flex";
//     checkEmail = false;
//   } else if (inputemail.value.length < 8) {
//     errorEmail.innerHTML = "Phải có trên 8 ký tự";
//     errorEmail.style.display = "flex";
//     checkEmail = false;
//   } else if (inputemail.value === inputemail.value.toUpperCase()) {
//     errorEmail.innerHTML = "Phải có ít nhất 1 ký tự viết thường";
//     errorEmail.style.display = "flex";
//     checkEmail = false;
//   } else if (inputemail.value === inputemail.value.toLowerCase()) {
//     errorEmail.innerHTML = "Phải có ít nhất 1 ký tự viết hoa";
//     errorEmail.style.display = "flex";
//     checkEmail = false;
//   } else {
//     errorEmail.style.display = "none";
//     checkEmail = true;
//   }
// }
let checkEmail = false;
function handleInputEmail() {
  let emailInformation = /@/;
  if (inputemail.value === "") {
    errorEmail.innerHTML = "Email không được để trống";
    checkEmail = false;
  } else if (inputemail.value === inputemail.value.toLowerCase()) {
    errorEmail.innerHTML = "Phải có ít nhất 1 ký tự viết hoa";
    errorEmail.style.display = "flex";
    checkEmail = false;
  } else if (inputemail.value.length < 6) {
    errorEmail.innerHTML = "Email phải có trên 5 ký tự";
    checkEmail = false;
  } else if (!emailInformation.test(inputemail.value)) {
    errorEmail.innerHTML = "Nhập đúng định dạng @";
    checkEmail = false;
  } else {
    errorEmail.innerHTML = "";
    checkEmail = true;
  }
}
// // Kiểm tra điều kiện có ít nhất 1 số
function isAllCharPresent(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) return true;
  }
  return false;
}

var checkPassword = false;
function handleInputPassword() {
  console.log(errorPassword);

  if (password.value === "") {
    errorPassword.innerHTML = "Tên không được để trống";
    errorPassword.style.display = "flex";
    checkPassword = false;
  } else if (password.value.length < 8) {
    errorPassword.innerHTML = "Phải có trên 8 ký tự";
    errorPassword.style.display = "flex";
    checkPassword = false;
  } else {
    errorPassword.style.display = "none";
    checkPassword = true;
  }
}

let users = JSON.parse(localStorage.getItem("users")) || [];
function handleSubmit(event) {
  event.preventDefault();

  if (checkName && checkEmail && checkPassword) {
    const newUser = {
      //Math.floor: lấy phần nguyên
      id: Math.floor(Math.random() * 1000), //ví dụ; 0,1111 thì nhân 1000 để lấy phần nguyên.
      name: inputname.value,
      email: inputemail.value,
      password: password.value,
      isActive: true,
    }; //target.reset:reset form sau khi nhập hết thông tin.
    // event.target.reset();
    window.location.href = "signin.html";
    users.push(newUser);
    console.log(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký tài khoản thành công.");
  } else {
    alert("Vui lòng đăng nhập đầy đủ hết thông tin");
  }
}
