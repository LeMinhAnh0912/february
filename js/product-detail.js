const detailProduct = document.getElementById("main-detail-product");
const product = JSON.parse(localStorage.getItem("product"));
console.log(product);
function displayProduct() {
  detailProduct.innerHTML = `
  <img src="${product.image}" alt="" />
          <div class="main-create"> 
            <p>${product.price}</p>
            <p>${product.fullname}</p>
            <p>${product.quantity}</p>
            <div class="main-span-btn">
              <button class="subtract">-</button>
              <span class="span">1</span>
              <button class="plus">+</button>
            </div>
          </div>

    `;
}
displayProduct();
