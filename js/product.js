let image = document.getElementById("image");
let code = document.getElementById("code");
let fullname = document.getElementById("fullname");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let tbody = document.getElementById("tbody-product");
let add = document.getElementById("add");
let save = document.getElementById("save");
//Hiển thị mảng product:
let products = JSON.parse(localStorage.getItem("products")) || [];

function displayProduct() {
  let html = "";
  for (let i in products) {
    html += `
        <tr>
        <td>${i + 1}</td>
        <td> <img src="${
          products[i].image
        }" alt = "" style="width: 200px; height: 200px"/></td>
        <td>${products[i].code}</td>
        <td>${products[i].fullname}</td>
        <td>${products[i].price}</td>
        <td>${products[i].quantity}</td>
        <td>
        <button onclick = "handleEdit('${products[i].fullname}')">Edit</button>
        <button onclick = "handleDelete('${
          products[i].fullname
        }')">Delete</button>
        </td>
        </tr>
        `;
    tbody.innerHTML = html;
  }
  image.value = "";
  code.value = "";
  fullname.value = "";
  price.value = "";
  quantity.value = "";
}
displayProduct();

function addProduct() {
  let newProduct = {
    id: Math.floor(Math.random() * 1000),
    image: image.value,
    code: code.value,
    fullname: fullname.value,
    price: price.value,
    quantity: quantity.value,
  };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  displayProduct();
  alert("Thêm mới sản phẩm thành công");
}

function handleDelete(fullname) {
  console.log(fullname);
  let index = products.findIndex((product) => product.fullname == fullname);
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProduct();
  alert("Xóa sản phẩm thành công");
}

function handleEdit(name) {
  localStorage.setItem("product", name);
  add.style.display = "none";
  save.style.display = "inline"; //or:block
  let index = products.findIndex((product) => product.fullname == name);
  image.value = products[index].image;
  code.value = products[index].code;
  fullname.value = products[index].fullname;
  price.value = products[index].price;
  quantity.value = products[index].quantity;
}

function saveProduct() {
  let fullname1 = localStorage.getItem("product");
  let index = products.findIndex((product) => product.fullname === fullname1);
  products[index].image = image.value;
  products[index].code = code.value;
  products[index].fullname = fullname.value;
  products[index].quantity = quantity.value;
  localStorage.setItem("products", JSON.stringify(products));

  displayProduct();
  alert("Lưu sản phẩm thành công");
  add.style.display = "inline";
  save.style.display = "none";
}
