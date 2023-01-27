// Yandex market
let things = [
  [
    ".wrapper",
    "slide",
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
    cathegory: "Смартфоны",
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
    cathegory: "Аудиотехника",
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
    cathegory: "Ноутбуки",
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
    cathegory: "Умные часы",
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
    cathegory: "Смартфоны",
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
    cathegory: "Наушники",
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
    cathegory: "Ноутбуки",
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
    cathegory: "Смартфоны",
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
    cathegory: "Ноутбуки",
    price: "",
    discount: "",
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
    cathegory: "Ноутбуки",
    price: "",
    discount: "",
    dPrice: "58 399 ₽",
    img: "./Images/image-10.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 987,
    context:
      "Игровая приставка Sony PlayStation 5 Digital Edition 825 ГБ SSD, белый",
  },
  {
    name: "Xiaomi 12T PRO",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Смартфоны",
    price: "65 990 ₽",
    discount: "-14%",
    dPrice: "56 790 ₽",
    img: "./Images/image-11.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 79,
    context: "Смартфон Xiaomi 12T PRO 12GB+256GB Blue (MZB0CCGRU)",
  },
  {
    name: "Google Pixel 7",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Смартфоны",
    price: "48 460 ₽",
    discount: "-5%",
    dPrice: "45 920 ₽",
    img: "./Images/image-12.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 24,
    context: "Google Смартфон Google Pixel 7 8/128GB (JP) (Черный)",
  },
  {
    name: "Lenovo Legion 5",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Ноутбуки",
    price: "",
    discount: "",
    dPrice: "119 999 ₽",
    img: "./Images/image-13.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 707,
    context:
      "15.6 Ноутбук Lenovo Legion 5 15ACH6H 1920x1080, AMD Ryzen 5 5600H 3.3 ГГц, RAM 16 ГБ, SSD 1 ТБ, NVIDIA GeForce RTX 3060, без ОС, 82JU018VRK, Phantom Blue",
  },
  {
    name: "Xiaomi Poco Watch",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Умные часы",
    price: "",
    discount: "",
    dPrice: "4 940 ₽",
    img: "./Images/image-14.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 67,
    context: "Умные часы Xiaomi Poco Watch GL Global Blue",
  },
  {
    name: "Xiaomi Mi Band 7",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Умные часы",
    price: "3 490 ₽",
    discount: "-14%",
    dPrice: "2 990 ₽",
    img: "./Images/image-15.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 1055,
    context: "Умный браслет Xiaomi Mi Band 7 CN, черный",
  },
  {
    name: "Xiaomi Mibro X1",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Умные часы",
    price: "5 995 ₽",
    discount: "-37%",
    dPrice: "3 750 ₽",
    img: "./Images/image-16.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 2,
    context: "Умные часы Xiaomi Mibro X1 (XPAW005), черный",
  },
  {
    name: "Samsung Galaxy Watch 5",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Умные часы",
    price: "",
    discount: "",
    dPrice: "16 694 ₽",
    img: "./Images/image-17.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 149,
    context: "Умные часы Samsung Galaxy Watch 5 Silver (40 mm) R900",
  },
  {
    name: "Apple AirPods 2",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Наушники",
    price: "",
    discount: "",
    dPrice: "9 360 ₽",
    img: "./Images/image-18.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 4404,
    context: "Беспроводные наушники Apple AirPods 2 (с зарядным футляром)",
  },
  {
    name: "Redmi Buds 3 lite",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Наушники",
    price: "1 590 ₽",
    discount: "-6%",
    dPrice: "1 490 ₽",
    img: "./Images/image-19.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 933,
    context: "Наушники Xiaomi Redmi Buds 3 lite, черный",
  },
  {
    name: "Xiaomi Redmi Buds 4",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Наушники",
    price: "4 190 ₽",
    discount: "-14%",
    dPrice: "3 590 ₽",
    img: "./Images/image-20.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 61,
    context:
      "Беспроводные наушники Xiaomi Redmi Buds 4 BHR5847GL, светло-голубой",
  },
  {
    name: "Galaxy Buds Live",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Наушники",
    price: "6 200 ₽",
    discount: "-7%",
    dPrice: "5 750 ₽",
    img: "./Images/image-21.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 1862,
    context: "Наушники и bluetooth-гарнитура Samsung Galaxy Buds Live черный",
  },
  {
    name: "HyperX QuadCast S",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Аудиотехника",
    price: "6 200 ₽",
    discount: "-7%",
    dPrice: "5 750 ₽",
    img: "./Images/image-22.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 97,
    context: "Игровой микрофон HyperX QuadCast S (HMIQ1S-XX-RG/G)",
  },
  {
    name: "Yeti Midnight",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Аудиотехника",
    price: "",
    discount: "",
    dPrice: "16 990 ₽",
    img: "./Images/image-23.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 91,
    context: "Микрофон Yeti Midnight Blue",
  },
  {
    name: "Smart Kolonka",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Аудиотехника",
    price: "",
    discount: "",
    dPrice: "16 990 ₽",
    img: "./Images/image-24.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 5812,
    context: "Яндекс.Станция 2 - умная колонка с Алисой, Медный",
  },
  {
    name: "VK Smart Kolonka",
    id: Math.floor(Math.random() * 1000000),
    cathegory: "Аудиотехника",
    price: "",
    discount: "",
    dPrice: "6 310 ₽",
    img: "./Images/image-25.webp",
    starImg: "./Images/star-icon.png",
    starNumber: 462,
    context: "Умная колонка VK Капсула Мини с голосовым помощником",
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

    rate1.classList.add("star-anim");
    setTimeout(() => {
      rate1.classList.remove("star-anim");
    }, 1000);
  });
  rate2.addEventListener("click", function () {
    rate1.src = "./Images/star-icon.png";
    rate2.src = "./Images/star-icon.png";
    rate3.src = "./Images/gray-star-icon.png";
    rate4.src = "./Images/gray-star-icon.png";
    rate5.src = "./Images/gray-star-icon.png";

    rate1.classList.add("star-anim");
    setTimeout(() => {
      rate1.classList.remove("star-anim");
    }, 1000);
    rate2.classList.add("star-anim");
    setTimeout(() => {
      rate2.classList.remove("star-anim");
    }, 1000);
  });
  rate3.addEventListener("click", function () {
    rate1.src = "./Images/star-icon.png";
    rate2.src = "./Images/star-icon.png";
    rate3.src = "./Images/star-icon.png";
    rate4.src = "./Images/gray-star-icon.png";
    rate5.src = "./Images/gray-star-icon.png";

    rate1.classList.add("star-anim");
    setTimeout(() => {
      rate1.classList.remove("star-anim");
    }, 1000);
    rate2.classList.add("star-anim");
    setTimeout(() => {
      rate2.classList.remove("star-anim");
    }, 1000);
    rate3.classList.add("star-anim");
    setTimeout(() => {
      rate3.classList.remove("star-anim");
    }, 1000);
  });
  rate4.addEventListener("click", function () {
    rate1.src = "./Images/star-icon.png";
    rate2.src = "./Images/star-icon.png";
    rate3.src = "./Images/star-icon.png";
    rate4.src = "./Images/star-icon.png";
    rate5.src = "./Images/gray-star-icon.png";

    rate1.classList.add("star-anim");
    setTimeout(() => {
      rate1.classList.remove("star-anim");
    }, 1000);
    rate2.classList.add("star-anim");
    setTimeout(() => {
      rate2.classList.remove("star-anim");
    }, 1000);
    rate3.classList.add("star-anim");
    setTimeout(() => {
      rate3.classList.remove("star-anim");
    }, 1000);
    rate4.classList.add("star-anim");
    setTimeout(() => {
      rate4.classList.remove("star-anim");
    }, 1000);
  });
  rate5.addEventListener("click", function () {
    rate1.src = "./Images/star-icon.png";
    rate2.src = "./Images/star-icon.png";
    rate3.src = "./Images/star-icon.png";
    rate4.src = "./Images/star-icon.png";
    rate5.src = "./Images/star-icon.png";

    rate1.classList.add("star-anim");
    setTimeout(() => {
      rate1.classList.remove("star-anim");
    }, 1000);
    rate2.classList.add("star-anim");
    setTimeout(() => {
      rate2.classList.remove("star-anim");
    }, 1000);
    rate3.classList.add("star-anim");
    setTimeout(() => {
      rate3.classList.remove("star-anim");
    }, 1000);
    rate4.classList.add("star-anim");
    setTimeout(() => {
      rate4.classList.remove("star-anim");
    }, 1000);
    rate5.classList.add("star-anim");
    setTimeout(() => {
      rate5.classList.remove("star-anim");
    }, 1000);
  });
};

// Функция яндекс маркет для 2-HTML
let getMore2 = (arr, item) => {
  let doc = document.querySelector('.basketBody');
  let wrap = document.querySelector(arr[0][0]);

  if (item.name != undefined) {
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
    let discount_content = doc.createTextNode(item.discount);
    discount.append(discount_content);
    if (discount.innerHTML != "") {
      discount.classList.add(arr[0][7]);
    }
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
    let btn_content = doc.createTextNode("Купить");
    btn.append(btn_content);
    thing.append(btn);

    btn.addEventListener("click", function () {
      modal.classList.remove("hide");
      modal_img.src = item.img;
      modal_context.innerHTML = item.context;
      setInterval(() => {
        modal_price.innerHTML =
          +item.dPrice.replace(/₽/gi, "").replace(/ /gi, "") *
            +modal_num.innerHTML +
          "₽";
      }, 100);
      getMore2(things, item)
    });

    starRater(star1, star2, star3, star4, star5);
  }
};

// Функция яндекс маркет
let getMore = (arr, catheg) => {
  let doc = document;
  let wrap = document.querySelector(arr[0][0]);

  let modal = document.querySelector(".modal");
  let modal_btn = document.querySelector(".btn-1");
  let modal_context = document.querySelector(".modal-context");
  let modal_img = document.querySelector(".main-info").firstElementChild;
  let modal_price = document.querySelector(".modal-price");
  let modal_num = document.querySelector(".count-num");

  for (let item of arr) {
    if (item.name != undefined) {
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
      let discount_content = doc.createTextNode(item.discount);
      discount.append(discount_content);
      if (discount.innerHTML != "") {
        discount.classList.add(arr[0][7]);
      }
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

      btn.addEventListener("click", function () {
        modal.classList.remove("hide");
        modal_img.src = item.img;
        modal_context.innerHTML = item.context;
        let int = setInterval(() => {
          modal_price.innerHTML = +item.dPrice.replace(/₽/gi, "").replace(/ /gi, "") * +modal_num.innerHTML + "₽";
          modal_btn.onclick = ()=>{
            clearInterval(int)
          }
        }, 100);
      });

      starRater(star1, star2, star3, star4, star5);

      if (item.cathegory != catheg) {
        slide.remove();
      }
    }
  }
  modal_btn.addEventListener("click", function () {
      modal.classList.add("hide");
  });
};
let getDelete = () => {
  let slides = document.querySelectorAll(".slide");
  for (let item of slides) {
    item.remove();
  }
};

// Запускаем функцию в начальный экран
getMore(things, "Смартфоны");
getMore(things, "Умные часы");
getMore(things, "Наушники");
getMore(things, "Аудиотехника");
getMore(things, "Ноутбуки");

// Кнопки категории
let cath_all = document.querySelector(".cath-all");
let cath1 = document.querySelector(".cath-1");
let cath2 = document.querySelector(".cath-2");
let cath3 = document.querySelector(".cath-3");
let cath4 = document.querySelector(".cath-4");
let cath5 = document.querySelector(".cath-5");

cath_all.addEventListener("click", function () {
  cath_all.classList.add("white-bg");
  cath1.classList.remove("white-bg");
  cath2.classList.remove("white-bg");
  cath3.classList.remove("white-bg");
  cath4.classList.remove("white-bg");
  cath5.classList.remove("white-bg");

  cath_all.classList.remove("black-bg");
  cath1.classList.add("black-bg");
  cath2.classList.add("black-bg");
  cath3.classList.add("black-bg");
  cath4.classList.add("black-bg");
  cath5.classList.add("black-bg");

  // Все категории
  getDelete();
  getMore(things, "Смартфоны");
  getMore(things, "Умные часы");
  getMore(things, "Наушники");
  getMore(things, "Аудиотехника");
  getMore(things, "Ноутбуки");
});

cath1.addEventListener("click", function () {
  cath_all.classList.remove("white-bg");
  cath1.classList.add("white-bg");
  cath2.classList.remove("white-bg");
  cath3.classList.remove("white-bg");
  cath4.classList.remove("white-bg");
  cath5.classList.remove("white-bg");

  cath_all.classList.add("black-bg");
  cath1.classList.remove("black-bg");
  cath2.classList.add("black-bg");
  cath3.classList.add("black-bg");
  cath4.classList.add("black-bg");
  cath5.classList.add("black-bg");

  // Категория "Смартфоны"
  getDelete();
  getMore(things, "Смартфоны");
});

cath2.addEventListener("click", function () {
  cath_all.classList.remove("white-bg");
  cath1.classList.remove("white-bg");
  cath2.classList.add("white-bg");
  cath3.classList.remove("white-bg");
  cath4.classList.remove("white-bg");
  cath5.classList.remove("white-bg");

  cath_all.classList.add("black-bg");
  cath1.classList.add("black-bg");
  cath2.classList.remove("black-bg");
  cath3.classList.add("black-bg");
  cath4.classList.add("black-bg");
  cath5.classList.add("black-bg");

  // Категория "Умные часы"
  getDelete();
  getMore(things, "Умные часы");
});

cath3.addEventListener("click", function () {
  cath_all.classList.remove("white-bg");
  cath1.classList.remove("white-bg");
  cath2.classList.remove("white-bg");
  cath3.classList.add("white-bg");
  cath4.classList.remove("white-bg");
  cath5.classList.remove("white-bg");

  cath_all.classList.add("black-bg");
  cath1.classList.add("black-bg");
  cath2.classList.add("black-bg");
  cath3.classList.remove("black-bg");
  cath4.classList.add("black-bg");
  cath5.classList.add("black-bg");

  // Категория "Наушники"
  getDelete();
  getMore(things, "Наушники");
});

cath4.addEventListener("click", function () {
  cath_all.classList.remove("white-bg");
  cath1.classList.remove("white-bg");
  cath2.classList.remove("white-bg");
  cath3.classList.remove("white-bg");
  cath4.classList.add("white-bg");
  cath5.classList.remove("white-bg");

  cath_all.classList.add("black-bg");
  cath1.classList.add("black-bg");
  cath2.classList.add("black-bg");
  cath3.classList.add("black-bg");
  cath4.classList.remove("black-bg");
  cath5.classList.add("black-bg");

  // Категория "Аудиотехника"
  getDelete();
  getMore(things, "Аудиотехника");
});

cath5.addEventListener("click", function () {
  cath_all.classList.remove("white-bg");
  cath1.classList.remove("white-bg");
  cath2.classList.remove("white-bg");
  cath3.classList.remove("white-bg");
  cath4.classList.remove("white-bg");
  cath5.classList.add("white-bg");

  cath_all.classList.add("black-bg");
  cath1.classList.add("black-bg");
  cath2.classList.add("black-bg");
  cath3.classList.add("black-bg");
  cath4.classList.add("black-bg");
  cath5.classList.remove("black-bg");

  // Категория "Ноутбуки"
  getDelete();
  getMore(things, "Ноутбуки");
});

// Swiper js
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

// Функция считатель
let itemCounter = () => {
  let minus = document.querySelector(".minus");
  let plus = document.querySelector(".plus");
  let resultNum = document.querySelector(".count-num");

  plus.addEventListener("click", function () {
    resultNum.innerHTML = +resultNum.innerHTML + 1;
  });

  minus.addEventListener("click", function () {
    if (+resultNum.innerHTML <= 1) {
      resultNum.innerHTML = 1;
      console.error("Меньше 1 товара добавлять в корзину невозможно!");
    } else resultNum.innerHTML = +resultNum.innerHTML - 1;
  });

  setInterval(() => {
    if (+resultNum.innerHTML <= 1) {
      resultNum.innerHTML = 1;
    }
  }, 100);
};
for (let item of document.querySelector(".modal").classList) {
  if (item != "hide") {
    itemCounter();
  }
}

// Поисковая система
let doc = document
let wrap = doc.querySelector('.wrappper')
let search_div = doc.querySelector('.search')
let inp = search_div.firstElementChild
let icon = search_div.lastElementChild
let searchSistem = ()=>{
  // Стили
  search_div.style.width = 30 + "px"
  inp.style.width = 0 + "px"
  inp.style.paddingLeft = 0 + "px"
  icon.addEventListener('click', function(){
    search_div.style.width = 200 + "px"
    inp.style.width = 170 + "px"
    inp.style.paddingLeft = 10 + "px"
  })
  inp.onblur = ()=>{
    if (inp.value == "") {
      search_div.style.width = 30 + "px"
      inp.style.width = 0 + "px"
      inp.style.paddingLeft = 0 + "px"
    }
  }

  // Логика
  let changeFunc = ()=>{
    let items = doc.querySelectorAll('.slide')
    for (let item of items) {
      if (inp.value != "") {
        if (item.firstElementChild.firstElementChild.lastElementChild.innerHTML.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase())) {
          item.classList.remove('hide')
        } else if (item.firstElementChild.firstElementChild.firstElementChild.title.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase())) {
          item.classList.remove('hide')
        } else item.classList.add('hide')
      } else item.classList.remove('hide')
    }
  }
  icon.addEventListener('click', changeFunc)
  inp.addEventListener('keyup', changeFunc)
}
searchSistem()