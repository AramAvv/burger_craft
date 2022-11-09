const order = [];
let indexNr = 0;
let countMeat = 0;
let countBSouce = 0;
let countTSouce = 0;
let countCheese = 0;
let countToppings = 0;
let images = document.querySelectorAll(".burger_image");
// buttons for add selects
const add_meat_btn = document.querySelector(".btn_meat");
const add_bSauce_btn = document.querySelector(".btn_bSauce");
const add_tSauce_btn = document.querySelector(".btn_tSauce");
const add_cheese_btn = document.querySelector(".btn_cheese");
const add_toppings_btn = document.querySelector(".btn_toppings");
//divs for drop-downs
const meat_div = document.querySelector(".burger_item_meat");
const topSauce_div = document.querySelector(".div_topSauce");
const bottomSauce_div = document.querySelector(".div_bottomSauce");
const cheese_div = document.querySelector(".div_cheese");
const toppings_div = document.querySelector(".div_toppings");
//divs for images parts
const meat_box = document.querySelector(".meat_box");
const bottomSauce_box = document.querySelector(".bottom_sauce_box");
const cheese_box = document.querySelector(".cheese_box");
const top_sauce_box = document.querySelector(".top_sauce_box");
const toppings_box = document.querySelector(".toppings_box");
//arrays
let select_meat_arr = document.querySelectorAll(".burger_item_meat select");
let select_arr = document.querySelectorAll("select");
let spans = document.querySelectorAll(".burger_image span");

const fetch1 = (category) => {
  const cat = category;
  fetch("./script/package.json")
    .then((response) => response.json())
    .then((data) => {
      createSelect(data, cat);
    });
};

add_meat_btn.addEventListener("click", () => {
  fetch1("meat");
  indexNr += 1;
  console.log(indexNr);
});
add_bSauce_btn.addEventListener("click", () => {
  fetch1("bottom_sauce");
  indexNr += 1;
  console.log(indexNr);
});
add_tSauce_btn.addEventListener("click", () => {
  fetch1("top_sauce");
});
add_cheese_btn.addEventListener("click", () => {
  fetch1("cheese");
});
add_toppings_btn.addEventListener("click", () => {
  fetch1("toppings");
});

const createSelect = (data, category) => {
  const cat = data[category];
  const divParent = document.createElement("div");
  divParent.classList.add("divParent");
  const select = document.createElement("select");
  select.className = [category];
  divParent.append(select);

  if (category === "meat") {
    meat_div.append(divParent);
    countMeat++;
    if (countMeat > 1) {
      deleteSign(divParent);
    }
  } else if (category === "bottom_sauce") {
    bottomSauce_div.append(divParent);
    countBSouce++;
    if (countBSouce > 1) {
      deleteSign(divParent);
    }
  } else if (category === "top_sauce") {
    topSauce_div.append(divParent);
    countTSouce++;
    if (countTSouce > 1) {
      deleteSign(divParent);
    }
  } else if (category === "cheese") {
    cheese_div.append(divParent);
    countCheese++;
    if (countCheese > 1) {
      deleteSign(divParent);
    }
  } else if (category === "toppings") {
    toppings_div.append(divParent);
    countToppings++;
    if (countToppings > 1) {
      deleteSign(divParent);
    }
  }

  cat.forEach((element) => {
    const option = document.createElement("option");
    if (element.price !== undefined) {
      option.textContent = `${element.name.toUpperCase()} (${
        element.price
      } lei)`;
    } else {
      option.textContent = "-";
    }
    select.append(option);
  });

  const div = document.createElement("div");
  const img = document.createElement("img");

  div.classList.add("burger_image");
  if (category === "meat") {
    meat_box.append(div);
  } else if (category === "bottom_sauce") {
    bottomSauce_box.append(div);
  }

  div.append(img);
  img.src = cat[1].url;

  const span = document.createElement("span");
  for (let i = 0; i < cat.length; i++) {
    span.textContent = cat[0].name;
    console.log(cat[i]);
  }
  div.append(span);
  const select1 = document.querySelectorAll(`.${category}`);
  select1.forEach((element) => {
    element.addEventListener("change", (e) => {
      span.textContent = e.target.value;
    });
  });

  images = document.querySelectorAll(".burger_image");
  spans = document.querySelectorAll(".burger_image span");

  add_arrow(images, spans);
};

const add_arrow = (arrArrow, arrSpan) => {
  arrArrow.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("burger_image_before");
      item.classList.remove("burger_image_after");
    } else {
      item.classList.add("burger_image_after");
      item.classList.remove("burger_image_before");
    }
  });

  arrSpan.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("left_description");
      item.classList.remove("right_description");
    } else {
      item.classList.add("right_description");
      item.classList.remove("left_description");
    }
  });
};
const deleteSign = (divParent) => {
  const deleteSelect = document.createElement("div");
  deleteSelect.setAttribute("class", "deleteSelect");
  divParent.append(deleteSelect);
  deleteSelect.addEventListener("click", () => {
    divParent.remove();
  });
};

window.addEventListener("load", () => {
  fetch1("meat");
  fetch1("bottom_sauce");
  fetch1("top_sauce");
  fetch1("cheese");
  fetch1("toppings");
});

