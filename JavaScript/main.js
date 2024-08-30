// Scroll up button
const scrollBtn = document.querySelector(".scroll-up");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const bars = document.querySelector(".fa-bars");
const xMark = document.querySelector(".fa-xmark");


// Scroll up button
window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
      scrollBtn.classList.add("top");
    } else {
      scrollBtn.classList.remove("top");
    }
  };

window.onload = () => {
      scrollBtn.classList.remove("top");
    };


  var typed = new Typed('.type', {
    strings: [
        'Abanoub Nassar' ,
        'a frontend developer' ,
        'a freelancer'

    ],
    typeSpeed : 60,
    backSpeed :60,
    loop:true
  });

  // show menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  bars.classList.toggle("active");
  xMark.classList.toggle("active");
});


/*Start Loader */
var loading = document.querySelector(".loadingio-spinner-eclipse-2by998twmg8");
var htmlSheet = document.getElementById("html");

function loader (){
    loading.classList.add("active"); /*هنا جبت اللوود وفعلت عدم التشغيل */
    htmlSheet.classList.add("active");
}
function fadeOut(){
    setTimeout(loader,1000); /* هنا قولت وقف التشغيل بعد 2 ثواني*/
}

window.onload = () => { /* هنا قولت نفذ معادلة عدم التشغيل بعد تحميل الصفحة*/
    fadeOut()   
}
/*End Loader */
  

