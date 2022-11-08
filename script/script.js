const fetch1 = () => {
  fetch("./script/package.json")
    .then((response) => response.json())
    .then((data) => {
      const meat = data.meat;
      console.log(meat);
      const select = document.createElement("select");

      meat.forEach((element) => {
        const option = document.createElement("option");
        option.textContent = `${element.name.toUpperCase()} (${
          element.price
        } lei)`;
        select.append(option);
        meat_div.append(select);
      });
      const cheese = data.cheese;
      console.log(cheese);
      cheese.forEach((element) => {
        console.log(element.name.toUpperCase());
      });
    });
};
let images = document.querySelectorAll(".burger_image");
const add_meat_btn = document.querySelector(".btn_meat");
const meat_div = document.querySelector(".burger_item_meat");
const select_meat = document.querySelectorAll(".burger_item_meat option");
const meat_box = document.querySelector(".meat_box");
let select_meat_arr = document.querySelectorAll(".burger_item_meat select");

window.addEventListener("load", () => {
  add_arrow(images);
});

add_meat_btn.addEventListener("click", () => {
  fetch1();
  // const select = document.createElement("select");
  meat_div.append(select);
  select.setAttribute("class", "meat_select");
  select_meat.forEach((item) => {
    const option = document.createElement("option");
    option.setAttribute("value", item.getAttribute("value"));
    option.textContent = item.textContent;
    select.append(option);
  });
  for (let i = 0; i < select_meat_arr.length; i++) {
    if (i === select_meat_arr.length - 1) {
      if (select_meat_arr[i].value === "beef_meet") {
        add_img(meat_box, "../img/pirjoala-de-vita.svg");
      } else if (select_meat_arr[i].value === "breaded_fillet") {
        add_img(meat_box, "../img/pirjoala-de-pui.svg");
      } else if (select_meat_arr[i].value === "grilled_fillet") {
        add_img(meat_box, "../img/pirjoala-de-pui-grilled.svg");
      }
    }
  }
  select_meat_arr = document.querySelectorAll(".burger_item_meat select");
});

const add_img = (box, img_adress) => {
  const div = document.createElement("div");
  div.classList.add("burger_image");
  const img = document.createElement("img");
  img.setAttribute("src", img_adress);
  box.append(div);
  div.append(img);
  images = document.querySelectorAll(".burger_image");
  add_arrow(images);
};
const add_arrow = (arr) => {
  arr.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("burger_image_before");
      item.classList.remove("burger_image_after");
    } else {
      item.classList.add("burger_image_after");
      item.classList.remove("burger_image_before");
    }
  });
};
const select_info = document.querySelectorAll("#meat");
const burger_info = document.querySelector(".check_text");
select_info.forEach((element) => {
  element.addEventListener("click", (e) => {
    burger_info.textContent = e.target.textContent;
  });
});
