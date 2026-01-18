let slides = document.querySelectorAll(".slide");
let bars = document.querySelectorAll(".bar");
let index = 0;
const countries = [
    {name:"Maroc", code:"MA", currency:"MAD", flag:"🇲🇦"},
    {name:"France", code:"FR", currency:"EUR", flag:"🇫🇷"},
    {name:"USA", code:"US", currency:"USD", flag:"🇺🇸"},
    {name:"Espagne", code:"ES", currency:"EUR", flag:"🇪🇸"},
    {name:"Allemagne", code:"DE", currency:"EUR", flag:"🇩🇪"},
    {name:"Italie", code:"IT", currency:"EUR", flag:"🇮🇹"},
    {name:"Canada", code:"CA", currency:"CAD", flag:"🇨🇦"},
    {name:"Brésil", code:"BR", currency:"BRL", flag:"🇧🇷"},
    {name:"Japon", code:"JP", currency:"JPY", flag:"🇯🇵"},
    {name:"Chine", code:"CN", currency:"CNY", flag:"🇨🇳"},
];

const btn = document.getElementById("countryBtn");
const dropdown = document.getElementById("countryDropdown");
const list = document.getElementById("countryList");
const search = document.getElementById("countrySearch");
const selected = document.getElementById("selectedCountry");
const container = document.querySelector(".country-select");

btn.onclick = () => {
    container.classList.toggle("open");
}

function renderCountries(filter=""){
    list.innerHTML="";
    countries.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(c=>{
        const div = document.createElement("div");
        div.className="country-item";
        div.innerHTML = `${c.flag} ${c.name} <span>${c.currency}</span>`;
        div.onclick = ()=>{
            selected.innerHTML = `${c.flag} ${c.name} <small>${c.currency}</small>`;
            container.classList.remove("open");
        }
        list.appendChild(div);
    });
}

search.oninput = e => renderCountries(e.target.value);

renderCountries();

/* close when clicking outside */
document.addEventListener("click",e=>{
    if(!container.contains(e.target)){
        container.classList.remove("open");
    }
});

// show slide
function showSlide(i){
    slides.forEach(s=>s.classList.remove("active"));
    bars.forEach(b=>b.classList.remove("active"));
    slides[i].classList.add("active");
    bars[i].classList.add("active");
    index = i;
}

// auto slide
setInterval(()=>{
    index = (index+1)%slides.length;
    showSlide(index);
}, 6000);

// bars click
bars.forEach((bar,i)=>{
    bar.onclick = ()=>showSlide(i);
});

// swipe mobile
let startX = 0;
document.querySelector(".hero-slider").addEventListener("touchstart",e=>{
    startX = e.touches[0].clientX;
});
document.querySelector(".hero-slider").addEventListener("touchend",e=>{
    let endX = e.changedTouches[0].clientX;
    if(startX - endX > 50) showSlide((index+1)%slides.length);
    if(endX - startX > 50) showSlide((index-1+slides.length)%slides.length);
});

const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

// فتح search
openSearch.addEventListener("click", () => {
  searchBar.classList.add("active");
  searchInput.focus();
});

// إغلاق search
closeSearch.addEventListener("click", () => {
  searchBar.classList.remove("active");
  searchInput.value = "";
  products.forEach(p => p.style.display = "block");
});

// البحث فـ المنتجات
searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();
    product.style.display = name.includes(value) ? "block" : "none";
  });
});