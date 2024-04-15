let mainClass = document.querySelector(".main-class");
//Hiển thị mảng product:
let products = JSON.parse(localStorage.getItem("products")) || [];
console.log(products);
function displayProduct() {
  for (let i in products) {
    mainClass.innerHTML += `  <div class="main1">
    <div class="image">
      <img src="${products[i].image}" alt="" width ="200px" />
    </div>
    <div class="btn-buy">
      <p class="concept">${products[i].fullname}</p>
      <p class="save">${products[i].price}</p>
      <button class="buyNow" onclick = "handleChangePage('${products[i].fullname}')">Buy Now</button>
    </div>
    

  </div>

    `;
  }
}

function handleChangePage(fullname) {
  console.log(fullname); //Tên sản phẩm
  window.location.href = `product-detail.html?${fullname}`;
  //Tên sản phẩm -> lưư sản phẩm vào local để trang detail hiển thị thông tin của sản phẩm.
  let product = products.find((product) => fullname == product.fullname);
  console.log(product);
  localStorage.setItem("product", JSON.stringify(product));
}
displayProduct();

function handleSignIn() {
  window.location.href = "signin.html";
}

let currentEmail = document.getElementById("current-email");

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}; //in ra
console.log(currentUser);
if (currentUser.access_token !== "" && currentUser.access_token !== undefined) {
  currentEmail.innerHTML = currentUser.email;
  document.getElementById("btn-sign-out").style.display = "flex";
  document.getElementById("icon-sign-in").style.display = "none";
} else {
  document.getElementById("btn-sign-out").style.display = "none";
  document.getElementById("icon-sign-in").style.display = "flex";
  currentEmail.innerHTML = "";
}
function handleSignOut() {
  localStorage.removeItem("currentUser");
  window.location.href = "/html/signin.html";
}
