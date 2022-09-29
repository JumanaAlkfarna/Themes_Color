 // spinner
let loading = document.querySelector(".page-loader");
setTimeout((_) => {
  loading.style.display = "none";
}, 6000);


// given nav fixed top
let nav = document.querySelector("header");
window.onscroll = (_) => {
  console.log("eee");

  if (window.scrollY < 10) {
    nav.classList.remove("fixed-top");
  } else {
    if(loading.style.display == "none"){
      nav.classList.add("fixed-top");
    }
  }
};





// show number in cart && show details in empty button
let Locksprod = document.querySelector(".onbtn");
let Locknav = document.querySelector(".num");
let aa = document.querySelector(".uld");
let pri = document.querySelector(".priOr");
let prCode = document.querySelector(".prodCode");
console.log(Locksprod );
let index = 1;
let a = 1;

Locksprod.onclick = (_) => {
  console.log("kkk");
  Locknav.style.opacity = "1";
  Locknav.innerHTML = index++;

  aa.innerHTML += ` <li><a class="dropdown-item aa" href="#"> ♣ Product ${a++} <br> 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Code :  ${prCode.innerText} <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price : &nbsp;  ${pri.innerText}</a></li>`;
};


// given color whn click a link
let linkAll = document.querySelectorAll("nav a");

linkAll.forEach((link) => {
  link.onclick = function active() {
    clear();
    link.style.color = "#00c8c8";
  };
});

function clear() {
  linkAll.forEach((link) => {
    link.style.color = "";
    link.style.background = "";
  });
}

// make counter for oty
let otybtns = document.querySelectorAll(".oty .input-group .btn");
let inp_t = document.querySelector(".oty .input-group input");
console.log(otybtns , inp_t);
let ii = 1;
let vv = inp_t.value;

otybtns[0].onclick= _=>{
  console.log("kkk")
  inp_t.value = ++ii;
} 
otybtns[1].onclick= _=>{
  console.log("kkk")
  inp_t.value = --ii;
} 




/*------------------------------------------
 style switcher
-------------------------------------------*/
function styleSwitcherToggler(){
  const styleSwitcher = document.querySelector('.js-style-switcher'),
  styleSwitcherToggler= document.querySelector('.js-style-switcher-toggler');
  styleSwitcherToggler.addEventListener("click", function(){
    styleSwitcher.classList.toggle("open");
    this.querySelector('i').classList.toggle('fa-xmark');
    this.querySelector('i').classList.toggle('fa-gear');
  })

}
styleSwitcherToggler();

/*------------------------------------------
theme colors
-------------------------------------------*/
let Colors  = document.querySelectorAll(".color");

// To clear icons
function clear() {
  Colors.forEach(ele => {
    ele.innerHTML= "";
  });
}


let color_1 = document.querySelector(".color1");
let color_2 = document.querySelector(".color2");
let color_3 = document.querySelector(".color3");
let color_4 = document.querySelector(".color4");
let color_5 = document.querySelector(".color5");
let body = document.querySelector("body");
console.log(color_2);
color_1.onclick = _=>{
  clear()
  body.classList.add("color-green");
  color_1.innerHTML= `<i class="fa-solid fa-check text-white"></i>`;
}
color_2.onclick = _=>{
  clear()
  body.classList.add("color-red");
  color_2.innerHTML= `<i class="fa-solid fa-check text-white"></i>`;
}
color_3.onclick = _=>{
  clear()
  body.classList.add("color-blue");
  color_3.innerHTML= `<i class="fa-solid fa-check text-white"></i>`;
}
color_4.onclick = _=>{
  clear()
  body.classList.add("color-orange");
  color_4.innerHTML= `<i class="fa-solid fa-check text-white"></i>`;
}
color_5.onclick = _=>{
  clear()
  body.classList.add("color-mov");
  color_5.innerHTML= `<i class="fa-solid fa-check text-white"></i>`;
}




