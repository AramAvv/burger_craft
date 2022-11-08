const fetch1 = fetch("http://localhost:3000/ingridients")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
console.log(fetch1);
// fetch(http://localhost:3000/order', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({a: 7, str: 'Some string: &=&'})
// }).then(res => res.json())
//     .then(res => console.log(res));

let images = document.querySelectorAll('.burger_image')
const add_meat_btn = document.querySelector('.btn_meat')
const meat_div = document.querySelector(".burger_item_meat");
const select_meat = document.querySelectorAll('.burger_item_meat option')
const meat_box = document.querySelector('.meat_box')
let select_meat_arr = document.querySelectorAll('.burger_item_meat select');

window.addEventListener('load',()=>{
    add_arrow(images);
})

add_meat_btn.addEventListener("click", () => {

  const select = document.createElement("select");
  meat_div.append(select);
  select.setAttribute('name','meat')
  select_meat.forEach(item=>{
    console.log(item)
    const option = document.createElement('option')
    option.setAttribute('value',item.getAttribute('value'));
    option.textContent = item.textContent;
    select.append(option)
  })
  add_img(meat_box,'../img/pirjoala-de-vita.svg')
  select_meat_arr = document.querySelectorAll('.burger_item_meat select');
  console.log(select_meat_arr);

});


// const changes = () => {
//   select_meat_arr.forEach(item =>{
//     item.addEventListener('change',()=>{
//       console.log(item)
//       const img_tag_local = document.querySelector('item img');
//       console.log(img_tag_local)
//       if(item.value === 'beef_meet'){
//
//         change_img(meat_box,'../img/pirjoala-de-vita.svg')
//       }
//       else if(item.value .value === 'breaded_fillet'){
//         add_img(meat_box,'../img/pirjoala-de-pui.svg')
//       }else if(item.value .value === 'grilled_fillet'){
//         add_img(meat_box,'../img/pirjoala-de-pui-grilled.svg')
//       }
//     })
//   })
// }
// changes();

const add_img = (box,img_adress) => {

  const div = document.createElement('div') ;
  div.classList.add('burger_image')
  const img= document.createElement('img')
  img.setAttribute('src',img_adress)
  box.append(div);
  div.append(img);
  images = document.querySelectorAll('.burger_image')
  add_arrow(images)
}
const change_img = (img,new_src) => {
  img.removeAttribute('src');
  img.setAttribute('src',new_src)
}
const add_arrow = (arr) => {
  arr.forEach((item, index) => {
    console.log(item);
    if (index % 2 === 0) {
      item.classList.add("burger_image_before");
      item.classList.remove("burger_image_after");
    } else {
      item.classList.add("burger_image_after");
      item.classList.remove("burger_image_before");
    }

  });
};
