
let items = [
  {
    name: "White",
    img_1: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb1-removebg-preview_1_.png",
    img_2:"https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/6/16_25_9.png",
    img_3:"https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb1-removebg-preview_1_.png",
    img_4:"https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/6/16_25_9.png",
    img_5:"https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb1-removebg-preview_1_.png",
    img_6:"https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb1-removebg-preview_1_.png",
    ddetail: "Mask",
    detail_1:"Mask",
    price_detail: "MRP &#200",
    price: 179,
    
  },
  {
    name: "White",
    img_1: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb1-removebg-preview_1_.png",
    img_2:"https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/6/16_25_9.png",
    img_3:"https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/6/16_25_9.png", 
    img_4:"https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/6/16_25_9.png",
    
    detail: "Mask",
    detail_1:"Mask",
    price_detail: "MRP &#200",
    price: 189,
    
  },
  {
    name: "Black",
    img_1: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png",
    img_2: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png",
    img_3: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png",
    img_4: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png",
    detail: "Mask",
    detail_1:"Mask",
    price_detail: "MRP &#200",
    price: 179,
    
  },
  {
    name: "Black",
    img_1: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png",
    img_2: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png",
    img_3: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png",
    img_4: "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png",
    detail: "Mask",
    detail_1:"Mask",
    price_detail: "MRP &#200",
    price: 179,
    
  },
  
  
];


if (localStorage.getItem("items") == null){
    localStorage.setItem("items", JSON.stringify(items));
}


function showProducts(d) {
  let items = d;
  

    let items_div = document.getElementById('items');

    items_div.innerHTML = null

    items.forEach(function (el,i,j) {
        
        let div = document.createElement('div')

        let p_name = document.createElement('h3')
        p_name.innerHTML = el.name;

         let span_detail = document.createElement('span')
        span_detail.innerHTML = el.detail;

         let p_price_detail = document.createElement('h4')
      p_price_detail.innerHTML = el.price_detail;
      
      let span_price = document.createElement('p');
      span_price.innerHTML = el.price;

         let img = document.createElement('img')
        img.src = el.img_1;


        div.append(img, p_name, span_detail, p_price_detail,span_price) ;
      
      div.addEventListener('click', function () {
        let index = i;
        let namedes = j
        localStorage.setItem('index', JSON.stringify(index));
        window.location.href = "productdesc_1.html"
      });
      div.style.cursor = "pointer";
      items_div.append(div)
    })
}
showProducts(JSON.parse(localStorage.getItem('items')));


function White() {
let check = document.getElementById('White');
  if (check.checked) {
    let data = JSON.parse(localStorage.getItem('items'))
    let result = [];

    for (let i = 0; i < data.length; i++){
      if (data[i].name == "White") {
        result.push(data[i]);
      }
    }
    showProducts(result);
  }
  else {
   showProducts(JSON.parse(localStorage.getItem('items')));
  }
}

function Black() {
let check = document.getElementById('Black');
  if (check.checked) {
    let data = JSON.parse(localStorage.getItem('items'))
    let result = [];

    for (let i = 0; i < data.length; i++){
      if (data[i].name == "Black") {
        result.push(data[i]);
      }
    }
    showProducts(result);
  }
  else {
   showProducts(JSON.parse(localStorage.getItem('items')));
  }
}

function White() {
  let click = document.getElementById('White');
  if (click.checked) {
    let data = JSON.parse(localStorage.getItem('items'));
    let result = [];
    console.log(data[0].img)
      for (let i = 0; i < data.length; i++) {
          if (data[i].img_1 == "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb1-removebg-preview_1_.png") {
              result.push(data[i]);
          }
      
          if (data[i].img_1 == "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/6/16_25_9.png") {
              result.push(data[i]);
          }
      }
     showProducts(result);
    }
  else {
   showProducts(JSON.parse(localStorage.getItem('items')));
      
    }
}


function White() {
    let check = document.getElementById('White');
    if (check.checked) {
        let data = JSON.parse(localStorage.getItem('items'));
        let result = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i].img_1 == "https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/6/16_25_9.png") {
                result.push(data[i]);
            }
        }
        showProducts(result);
    }
        else {
            showProducts(JSON.parse(localStorage.getItem('items')));
        }
}





function black() {
    let check = document.getElementById('black');
    if (check.checked) {
        let data = JSON.parse(localStorage.getItem('items'));
        let result = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i].img_1 =="https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png") {
                result.push(data[i]);
            }
             if (data[i].img_1 =="https://www.printland.in/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/6/_/6_205_1_1.png") {
                result.push(data[i]);
            }
        }
        showProducts(result);
    }
        else {
            showProducts(JSON.parse(localStorage.getItem('items')));
        }
}