const fetch1 = fetch("./script/package.json")
  .then((response) => response.json())
  .then((data) => Object.entries(data));
console.log(fetch1);

const body = document.querySelector("body");
const add_item = document.querySelector("button");
const meat_div = document.querySelector(".burger_item_meat");

add_item.addEventListener("click", () => {
  const select = document.createElement("select");
  meat_div.append(select);
  let items = [
    "BEEF MEET(35 lei)",
    "BREADED CHICKEN FILLET(25 lei)",
    "GRILLED CHICKEN FILLET(25 lei)",
  ];
  const burger_items = document.querySelector(".burger_meat");
  const newMeat_image = document.createElement("img");
  const div = document.createElement("div");
  newMeat_image.src = "img/pirjoala-de-vita.svg";
  for (let i = 0; i < items.length; i++) {
    const burger_img_detailes = document.querySelectorAll(".burger_image");
    div.append(newMeat_image);
    burger_items.append(div);
    div.classList.add("burger_image");
    let item = items[i];
    const newOption = document.createElement("option");
    newOption.setAttribute("value", item);
    const textNode = document.createTextNode(item);
    newOption.appendChild(textNode);
    select.append(newOption);
    add_arrow(burger_img_detailes);
  }
});

const add_arrow = (arr) => {
  arr.forEach((item, index) => {
    console.log(item);
    if (index % 2 === 0) {
      item.classList.add("burger_image_before");
    } else {
      item.classList.add("burger_image_after");
    }
  });
};
