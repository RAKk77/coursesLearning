let allProducds = [
  {
    id: 1,
    name: "C++",
    title: "Learn Programing with C++",
    image: "./images/im1.png",
    price: "20$",
    rating: "1",
  },
  {
    id: 2,
    name: "Java",
    title: "Learn Programing with Java",
    image: "./images/im2.png",
    price: "25$",
    rating: "2",
  },
  {
    id: 3,
    name: "JavaScript",
    title: "Learn Programing with JavaScript",
    image: "./images/im3.png",
    price: "30$",
    rating: "3",
  },
  {
    id: 4,
    name: "TypeScript",
    title: "Learn Programing with TypeScript",
    image: "./images/im4.png",
    price: "20$",
    rating: "4",
  },
  {
    id: 5,
    name: "PHP",
    title: "Learn Programing with PHP",
    image: "./images/img5.png",
    price: "25$",
    rating: "5",
  },
  {
    id: 6,
    name: "React",
    title: "Learn Programing with React",
    image: "./images/icon-6.png",
    price: "25$",
    rating: "6",
  },
];

const body = document.querySelector("body");
const products = document.getElementById("products");
const shoping = document.getElementById("shoping");
let inforshoping = document.querySelector(".inforshoping");
const cancel = document.getElementById("cancel");
const productlist = document.querySelector("#productlist");
const quantity = document.querySelector("#quantity");
let totalprice = document.querySelector("#totalprice");

let checklist = [];
function oninto() {
  allProducds.forEach((item, key) => {
    let div = document.createElement("div");

    div.classList.add("item");
    div.innerHTML = `
    <div
        class="shadow-fav w-[90%] rounded-t-[2.5rem] rounded-b-[1rem] bg-slate-800 flex flex-col items-center my-4 m-auto overflow-hidden "
      >
        <div class=" bg-black/60 w-full flex justify-center py-2 "><img src="${item.image}" width="200px" class="transform motion-safe:hover:scale-110  transition-all"/></div>
        <div class="w-full px-8 pb-4">
          <h2 class="text-white text-[1.3rem] mt-2">
            ${item.name}
          </h2>
          <p class="text-white text-[1rem] mt-2">
            ${item.title}
          </p>
          <div class="w-20 text-center ">
            <p class="my-3 text-black bg-slate-300 rounded-3xl">${item.price}</p>
          </div>

          
          <div>
            <button onclick="addCard(${key})"
              class="mt-2 animate-bounce px-[25px] py-[10px] rounded-3xl text-white bg-sky-500 hover:bg-sky-700 "
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
   `;
    products.appendChild(div);
  });
}
oninto();

shoping.addEventListener("click", function () {
  let showing = inforshoping.classList.contains("hidden", "translate-y-full");
  if (showing) {
    // Show popup with slide-down animation
    inforshoping.classList.remove("hidden");
    inforshoping.classList.add("animate-slideDown");
  }
});

cancel.addEventListener("click", function () {
  let hide = inforshoping.classList.contains("hidden");

  if (!hide) {
    inforshoping.classList.add("hidden");
  }
});

function addCard(id) {
  // console.log(allProducds[id]);
  if (checklist[id] == null) {
    checklist[id] = allProducds[id];
    checklist[id].qty = 1;
  } else {
    checklist[id].qty += 1;
  }
  reload();
}

function reload() {
  productlist.innerHTML = "";
  let count = 0;
  let total = 0;
  checklist.forEach((item, key) => {
    total = parseInt(item.price * item.qty);
    console.log(total);
    count += item.qty;
    let li = document.createElement("li");
    li.classList.add(
      "flex",
      "items-center",
      "gap-5",
      "p-2",
      "bg-slate-400",
      "rounded-3xl",
      "mb-2",
      "hover:bg-slate-200",
      "transition-all"
    );

    li.innerHTML = `
    <img src="${item.image}"  width="40px"/>
    <p>${item.name}</p>
    <span>${item.price}</span>
     <div
        class="flex items-end gap-3 ml-auto px-[20px] py-[5px] bg-slate-300 rounded-full"
      >
        <button
          class="px-[7px] py-[1px] rounded-full bg-slate-600 text-white active:scale-50 transition-all"
        >
          +
        </button>
        <div class="count text-[1rem] font-[500]">${item.qty}</div>
        <button
          class="px-[7px] py-[1px] rounded-full bg-slate-600 text-white active:scale-50 transition-all"
        >
          -
        </button>
    </div>
    `;
    productlist.appendChild(li);
  });

  quantity.innerHTML = count;
  totalprice.innerHTML = `<button class="bg-sky-400 w-[90%] py-3 rounded-md">Total price${total}</button>`;
}
