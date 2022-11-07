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
  const meat_image = document.querySelector(".burger_meat_image");
  const newMeat_image = document.createElement("img");
  newMeat_image.src = "img/pirjoala-de-vita.svg";
  meat_image.append(newMeat_image);
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    const newOption = document.createElement("option");
    newOption.setAttribute("value", item);
    const textNode = document.createTextNode(item);
    newOption.appendChild(textNode);
    select.append(newOption);
  }
});

// const burger_img_detailes = document.querySelectorAll('.burger_image')
// const add_arrow = (arr) => {
//   arr.forEach((item, index) =>{
//     console.log(item)
//     if(index % 2 === 0){
//       item.classList.toggle('burger_image_before')
//     }else {
//       item.classList.toggle('burger_image_after')
//     }
//   })
// }
// add_arrow(burger_img_detailes)
