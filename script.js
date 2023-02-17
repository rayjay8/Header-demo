const product = document.getElementById("product");
const marketplace = document.getElementById("marketplace");
const community = document.getElementById("community");
const user = document.getElementById("user");
const hover = document.getElementById("hover");
const menu = document.getElementById("menu");
const mobileView = document.getElementById("mobileView");
const dropdown1 = document.getElementById("dropdown-1");
const dropdown2 = document.getElementById("dropdown-2");
const dropdown3 = document.getElementById("dropdown-3");
let expand1 = false;
let expand2 = false;
let expand3 = false;
let toggleMenu = false;

document.addEventListener("click", (e) => {
  if (
    e.target !== product &&
    e.target !== marketplace &&
    e.target !== community
  ) {
    dropdown1.style.display = "none";
    dropdown2.style.display = "none";
    dropdown3.style.display = "none";
    expand1 = false;
    expand2 = false;
    expand3 = false;
  }
});

product.addEventListener("click", () => {
  expand1 = !expand1;
  if (expand1) {
    dropdown1.style.display = "grid";
  } else {
    dropdown1.style.display = "none";
  }
  if (expand2 || expand3) {
    expand2 = false;
    expand3 = false;
    dropdown2.style.display = "none";
    dropdown3.style.display = "none";
  }
});

marketplace.addEventListener("click", () => {
  expand2 = !expand2;
  if (expand2) {
    dropdown2.style.display = "grid";
  } else {
    dropdown2.style.display = "none";
  }
  if (expand1 || expand3) {
    expand1 = false;
    expand3 = false;
    dropdown1.style.display = "none";
    dropdown3.style.display = "none";
  }
});

community.addEventListener("click", () => {
  expand3 = !expand3;
  if (expand3) {
    dropdown3.style.display = "grid";
  } else {
    dropdown3.style.display = "none";
  }
  if (expand1 || expand2) {
    expand1 = false;
    expand2 = false;
    dropdown1.style.display = "none";
    dropdown2.style.display = "none";
  }
});

menu.addEventListener("click", () => {
  toggleMenu = !toggleMenu;
  if (toggleMenu) {
    mobileView.style.display = "flex";
    menu.innerHTML = `<span class="material-symbols-outlined">
    close
    </span>`;
  } else {
    mobileView.style.display = "none";
    menu.innerHTML = `<span class="material-symbols-outlined"> menu </span>`;
  }
});
