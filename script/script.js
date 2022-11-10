const order = [];
let indexNr = 0;
//Delete Sign count
let countMeat = 0;
let countBSouce = 0;
let countTSouce = 0;
let countCheese = 0;
let countToppings = 0;

let images = document.querySelectorAll(".burger_image");
let files_images = document.querySelectorAll('img')
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

const fetch1 = (category,value = 1,new_name,i,index) => {
    const cat = category;
    fetch("./script/package.json")
        .then((response) => response.json())
        .then((data) => {
            if(value === 1){
            createSelect(data, cat);}
            else if(value === 2){
                changeImage(data,cat,new_name,i);
            }else if(value === 3){
                createImage(data,cat,new_name,i,index)
            }
        });
};

add_meat_btn.addEventListener("click", () => {
    fetch1("meat");
});
add_bSauce_btn.addEventListener("click", () => {
    fetch1("bottom_sauce");

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
    indexNr++
    const divParent = document.createElement("div");
    divParent.setAttribute('index',indexNr)
    divParent.classList.add("divParent");
    const select = document.createElement("select");
    select.className = category;
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
            if(element.name === 'sriracha'){
                option.textContent = `${element.name.toUpperCase()}(spicy) (${
                element.price} lei)`;}
            else {
                option.textContent = `${element.name.toUpperCase()} (${
                    element.price } lei)`;
            }
        }else {
            option.textContent = "-";
        }
        select.append(option);
    });

    if (category === "meat") {
        const div = document.createElement("div");
        const img = document.createElement("img");
        div.setAttribute('index',indexNr)

        div.classList.add("burger_image");
        if (category === "meat") {
            meat_box.append(div);
        }

        div.append(img);
        img.src = cat[0].url;

        const span = document.createElement("span");
        span.textContent = cat[0].name;
        div.append(span);

        images = document.querySelectorAll(".burger_image");
        spans = document.querySelectorAll(".burger_image span");

        add_arrow(images, spans);
    }
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
const changeImage = (data,category,new_name,i) => {
    console.log(data)
    console.log(category)
   data[category].forEach(item =>{
       const item_name = item.name.trim();
       const changed_name = new_name.trim();
       if(item_name === changed_name){
           files_images[i].src = item.url
       }
   })
}

const createImage = (data,category,new_name,i,index) => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')
    div.classList.add('burger_image')
    div.setAttribute('index',index)
    div.append(img)
    div.append(span)
    console.log(new_name)
    data[category].forEach(item =>{
        if(item.name.trim() === new_name.trim().toLowerCase()){
            console.log(item)
            img.setAttribute('src',item.url)
            console.log(img.src)
            span.textContent = item.name
        }
    })

    switch (category){

        case 'bottom_sauce': bottomSauce_box.append(div);
            images = document.querySelectorAll(".burger_image");
            spans = document.querySelectorAll(".burger_image span");

            add_arrow(images, spans);
        break;
        case 'top_sauce': top_sauce_box.append(div);
            images = document.querySelectorAll(".burger_image");
            spans = document.querySelectorAll(".burger_image span");

            add_arrow(images, spans);
        break;
        case 'cheese': cheese_box.append(div);
            images = document.querySelectorAll(".burger_image");
            spans = document.querySelectorAll(".burger_image span");

            add_arrow(images, spans);
        break;
        case 'toppings': toppings_box.append(div);
            images = document.querySelectorAll(".burger_image");
            spans = document.querySelectorAll(".burger_image span");

            add_arrow(images, spans);
        break;
    }




}


const deleteSign = (parent) => {
    const deleteSelect = document.createElement("div");
    deleteSelect.setAttribute("class", "deleteSelect");
    parent.append(deleteSelect);
    deleteSelect.addEventListener("click", () => {

        images.forEach(item =>{
            if(item.getAttribute('index') === parent.getAttribute('index')){
                console.log(item)
                item.remove()

                images = document.querySelectorAll('.burger_image')
                spans = document.querySelectorAll('span')
                add_arrow(images,spans)
            }
        })
        parent.remove();

    });
};





window.addEventListener('change',(e)=>{

    if(e.target.tagName === 'SELECT'){
        const category = e.target.getAttribute('class')
        const index_value = e.target.value.indexOf('(');
        let span_new = e.target.value.slice(0,index_value);
        const select_index = e.target.parentElement.getAttribute('index');
        images = document.querySelectorAll('.burger_image');
        spans = document.querySelectorAll('span')
        files_images = document.querySelectorAll('img')
        let countImageExistance = 0;


        for (let i = 0; i < images.length; i++) {
            if(images[i].getAttribute('index') === select_index){
                spans[i].textContent = span_new;
                if(span_new === ''){
                    files_images[i].parentElement.remove()

                    images = document.querySelectorAll('.burger_image')
                    spans = document.querySelectorAll('span')
                    add_arrow(images,spans)
                }
            }
        }
        console.log(span_new)
        for (let i = 0; i < files_images.length; i++) {
            if(files_images[i].parentElement.getAttribute('index') === select_index && span_new !== ''){
                span_new = span_new.toLowerCase()
                fetch1(category,2,span_new,i)
            }else if(select_index !== files_images[i].parentElement.getAttribute('index')){

                if(countImageExistance === files_images.length-1){
                   fetch1(category,3,span_new,i,select_index)
                }
                countImageExistance++;
            }

        }
        console.log(select_index)



    }
})
window.addEventListener("load", () => {
    fetch1("meat");
    fetch1("bottom_sauce");
    fetch1("top_sauce");
    fetch1("cheese");
    fetch1("toppings");
});