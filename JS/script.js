// Yandex market
let things = [
  [
    ".swiper-wrapper",
    "swiper-slide",
    "item",
    "main-img",
    "price-zone",
    "d-price",
    "price",
    "discount",
    "star-zone",
    "stars",
    "rating-1",
    "rating-2",
    "rating-3",
    "rating-4",
    "rating-5",
    "star-number",
    "context",
    "btn",
  ],
  {
    name: "iPhone 14",
    id: Math.floor(Math.random() * 1000000),
    price: "84 600 ₽",
    discount: "-10%",
    dPrice: "76 150 ₽",
    img: "./Images/image-1.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 288,
    context:
      "Apple Телефон Apple iPhone 14 256Gb (PRODUCT)BLUE Global Синий, 256 ГБ",
  },
  {
    name: "Smart Kolonka",
    id: Math.floor(Math.random() * 1000000),
    price: "7 490 ₽",
    discount: "-5%",
    dPrice: "6 990 ₽",
    img: "./Images/image-2.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 6211,
    context:
      "Умная колонка Яндекс Новая Станция Мини - умная колонка с Алисой, серый опал",
  },
  {
    name: "Joy for ps4",
    id: Math.floor(Math.random() * 1000000),
    price: "5 490 ₽",
    discount: "-73%",
    dPrice: "1 472 ₽",
    img: "./Images/image-3.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 29,
    context:
      "Беспроводной Геймпад для PlayStation 4 Белый Bluetooth / PS4 / PC / Блютуз Джойстик для Сони Плейстейшен и ПК",
  },
  {
    name: "Smart Watch",
    id: Math.floor(Math.random() * 1000000),
    price: "6 800 ₽",
    discount: "-60%",
    dPrice: "2 748 ₽",
    img: "./Images/image-4.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 16,
    context:
      "Смарт часы серебристые (iOS  Android) / Smart часы с сенсорным экраном /Новинка.",
  },
  {
    name: "Nothing Phone",
    id: Math.floor(Math.random() * 1000000),
    price: "43 670 ₽",
    discount: "-6%",
    dPrice: "40 924 ₽",
    img: "./Images/image-5.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 99,
    context: "Смартфон Nothing Phone (1) 8/256 ГБ, белый",
  },
  {
    name: "AirPods",
    id: Math.floor(Math.random() * 1000000),
    price: "20 000 ₽",
    discount: "-1₽",
    dPrice: "19 999 ₽",
    img: "./Images/image-6.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 2535,
    context: "Беспроводные наушники Apple AirPods Pro 2, белый",
  },
  {
    name: "Microsoft Keyboard",
    id: Math.floor(Math.random() * 1000000),
    price: "9 050 ₽",
    discount: "-17%",
    dPrice: "7 539 ₽",
    img: "./Images/image-7.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 50,
    context:
      "Клавиатура Microsoft Bluetooth Designer Compact Keyboard, мембранная",
  },
  {
    name: "Samsung S22 Ultra",
    id: Math.floor(Math.random() * 1000000),
    price: "114 990 ₽",
    discount: "-17%",
    dPrice: "95 990 ₽",
    img: "./Images/image-8.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 925,
    context: "Смартфон Samsung Galaxy S22 Ultra 12/512 ГБ RU, черный фантом",
  },
  {
    name: "Macbook Pro",
    id: Math.floor(Math.random() * 1000000),
    price: "73 339 ₽",
    discount: "-0%",
    dPrice: "73 339 ₽",
    img: "./Images/image-9.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 2171,
    context:
      "16.2 Ноутбук Apple MacBook Air 13 Late 2020 2560x1600, Apple M1 3.2 ГГц, RAM 8 ГБ, SSD 256 ГБ, Apple graphics 7-",
  },
  {
    name: "Playstation 5",
    id: Math.floor(Math.random() * 1000000),
    price: "58 399 ₽",
    discount: "-0%",
    dPrice: "58 399 ₽",
    img: "./Images/image-10.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 987,
    context:
      "Игровая приставка Sony PlayStation 5 Digital Edition 825 ГБ SSD, белый",
  },
];
console.log(things);

// Rating stars function
let starRater = (rater1, rater2, rater3, rater4, rater5) => {
  let rate1 = rater1;
  let rate2 = rater2;
  let rate3 = rater3;
  let rate4 = rater4;
  let rate5 = rater5;

  rate1.addEventListener("click", function () {
    rate1.src = "./Images/star-icon.png";
    rate2.src = "./Images/gray-star-icon.png";
    rate3.src = "./Images/gray-star-icon.png";
    rate4.src = "./Images/gray-star-icon.png";
    rate5.src = "./Images/gray-star-icon.png";

    rate1.classList.add('star-anim')
    setTimeout(() => {
      rate1.classList.remove('star-anim')
    }, 1000);
  });
  rate2.addEventListener("click", function () {
    rate1.src = "./Images/star-icon.png";
    rate2.src = "./Images/star-icon.png";
    rate3.src = "./Images/gray-star-icon.png";
    rate4.src = "./Images/gray-star-icon.png";
    rate5.src = "./Images/gray-star-icon.png";

    rate1.classList.add('star-anim')
    setTimeout(() => {
      rate1.classList.remove('star-anim')
    }, 1000);
    rate2.classList.add('star-anim')
    setTimeout(() => {
      rate2.classList.remove('star-anim')
    }, 1000);
  });
  rate3.addEventListener("click", function () {
    rate1.src = "./Images/star-icon.png";
    rate2.src = "./Images/star-icon.png";
    rate3.src = "./Images/star-icon.png";
    rate4.src = "./Images/gray-star-icon.png";
    rate5.src = "./Images/gray-star-icon.png";

    rate1.classList.add('star-anim')
    setTimeout(() => {
      rate1.classList.remove('star-anim')
    }, 1000);
    rate2.classList.add('star-anim')
    setTimeout(() => {
      rate2.classList.remove('star-anim')
    }, 1000);
    rate3.classList.add('star-anim')
    setTimeout(() => {
      rate3.classList.remove('star-anim')
    }, 1000);
  });
  rate4.addEventListener("click", function () {
    rate1.src = "./Images/star-icon.png";
    rate2.src = "./Images/star-icon.png";
    rate3.src = "./Images/star-icon.png";
    rate4.src = "./Images/star-icon.png";
    rate5.src = "./Images/gray-star-icon.png";

    rate1.classList.add('star-anim')
    setTimeout(() => {
      rate1.classList.remove('star-anim')
    }, 1000);
    rate2.classList.add('star-anim')
    setTimeout(() => {
      rate2.classList.remove('star-anim')
    }, 1000);
    rate3.classList.add('star-anim')
    setTimeout(() => {
      rate3.classList.remove('star-anim')
    }, 1000);
    rate4.classList.add('star-anim')
    setTimeout(() => {
      rate4.classList.remove('star-anim')
    }, 1000);
  });
  rate5.addEventListener("click", function () {
    rate1.src = "./Images/star-icon.png";
    rate2.src = "./Images/star-icon.png";
    rate3.src = "./Images/star-icon.png";
    rate4.src = "./Images/star-icon.png";
    rate5.src = "./Images/star-icon.png";

    rate1.classList.add('star-anim')
    setTimeout(() => {
      rate1.classList.remove('star-anim')
    }, 1000);
    rate2.classList.add('star-anim')
    setTimeout(() => {
      rate2.classList.remove('star-anim')
    }, 1000);
    rate3.classList.add('star-anim')
    setTimeout(() => {
      rate3.classList.remove('star-anim')
    }, 1000);
    rate4.classList.add('star-anim')
    setTimeout(() => {
      rate4.classList.remove('star-anim')
    }, 1000);
    rate5.classList.add('star-anim')
    setTimeout(() => {
      rate5.classList.remove('star-anim')
    }, 1000);
  });
};

// Yandex market function
let getMore = (arr) => {
  let doc = document;
  let wrap = document.querySelector(arr[0][0]);

  for (let item of arr) {
    if (item.name != "iPhone 14" && item.name != undefined) {
      let slide = doc.createElement("div");
      slide.classList.add(arr[0][1]);
      wrap.append(slide);

      let thing = doc.createElement("div");
      thing.classList.add(arr[0][2]);
      slide.append(thing);

      let span = doc.createElement("span");
      thing.append(span);

      let main_img = doc.createElement("img");
      main_img.src = item.img;
      main_img.title = item.name;
      main_img.classList.add(arr[0][3]);
      span.append(main_img);

      let price_zone = doc.createElement("div");
      price_zone.classList.add(arr[0][4]);
      span.append(price_zone);

      let d_price = doc.createElement("p");
      d_price.classList.add(arr[0][5]);
      let d_price_content = doc.createTextNode(item.dPrice);
      d_price.append(d_price_content);
      price_zone.append(d_price);

      let price = doc.createElement("p");
      price.classList.add(arr[0][6]);
      let price_content = doc.createTextNode(item.price);
      price.append(price_content);
      price_zone.append(price);

      let discount = doc.createElement("p");
      discount.classList.add(arr[0][7]);
      let discount_content = doc.createTextNode(item.discount);
      discount.append(discount_content);
      price_zone.append(discount);

      let star_zone = doc.createElement("div");
      star_zone.classList.add(arr[0][8]);
      span.append(star_zone);

      let stars = doc.createElement("div");
      stars.classList.add(arr[0][9]);
      star_zone.append(stars);

      let star1 = doc.createElement("img");
      let star2 = doc.createElement("img");
      let star3 = doc.createElement("img");
      let star4 = doc.createElement("img");
      let star5 = doc.createElement("img");
      star1.src = item.starImg;
      star2.src = item.starImg;
      star3.src = item.starImg;
      star4.src = item.starImg;
      star5.src = item.starImg;
      star1.classList.add(arr[0][10]);
      star2.classList.add(arr[0][11]);
      star3.classList.add(arr[0][12]);
      star4.classList.add(arr[0][13]);
      star5.classList.add(arr[0][14]);
      stars.append(star1);
      stars.append(star2);
      stars.append(star3);
      stars.append(star4);
      stars.append(star5);

      let star_num = doc.createElement("p");
      star_num.classList.add(arr[0][15]);
      let star_num_content = doc.createTextNode(item.starNumber);
      star_num.append(star_num_content);
      star_zone.append(star_num);

      let context = doc.createElement("p");
      context.classList.add(arr[0][16]);
      let context_content = doc.createTextNode(item.context);
      context.append(context_content);
      span.append(context);

      let btn = doc.createElement("button");
      btn.classList.add(arr[0][17]);
      let btn_content = doc.createTextNode("В корзину");
      btn.append(btn_content);
      thing.append(btn);

      starRater(star1, star2, star3, star4, star5)
    }
  }

  const swiper = new Swiper(".swiper", {
    loop: true,
    lazy: true,
    slidesPerView: 3,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

// Rating stars for HTML made block
let starr1 = document.querySelector('.rating-1')
let starr2 = document.querySelector('.rating-2')
let starr3 = document.querySelector('.rating-3')
let starr4 = document.querySelector('.rating-4')
let starr5 = document.querySelector('.rating-5')
starRater(starr1, starr2, starr3, starr4, starr5)

// Function yandex market start on button click
let show_btn = document.querySelector(".show-more");
show_btn.addEventListener("click", function () {
  setTimeout(() => {
    show_btn.classList.add("hide");
    getMore(things);
  }, 300);
});

// Star rater helper
setTimeout(() => {
  alert("Вы можете ставить оценку товарам!")
}, 10000);