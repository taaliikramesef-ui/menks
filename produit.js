const countries = [
    {name:"Maroc", currency:"MAD", flag:"🇲🇦"},
    {name:"France", currency:"EUR", flag:"🇫🇷"},
    {name:"USA", currency:"USD", flag:"🇺🇸"},
    {name:"Espagne", currency:"EUR", flag:"🇪🇸"},
    {name:"Allemagne", currency:"EUR", flag:"🇩🇪"},
    {name:"Italie", currency:"EUR", flag:"🇮🇹"},
    {name:"Canada", currency:"CAD", flag:"🇨🇦"},
    {name:"Japon", currency:"JPY", flag:"🇯🇵"},
    {name:"Chine", currency:"CNY", flag:"🇨🇳"},
];

const btn = document.getElementById("countryBtn");
const dropdown = document.getElementById("countryDropdown");
const list = document.getElementById("countryList");
const search = document.getElementById("countrySearch");
const selected = document.getElementById("selectedCountry");
const container = document.querySelector(".country-select");

btn.onclick = () => {
    dropdown.classList.toggle("show");
}
function renderCountries(filter=""){
    list.innerHTML="";
    countries
      .filter(c=>c.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(c=>{
        const div = document.createElement("div");
        div.className="country-item";
        div.innerHTML = `${c.flag} ${c.name} <span>${c.currency}</span>`;
        div.onclick = ()=>{
            selected.innerHTML = `${c.flag} ${c.name} <small>${c.currency}</small>`;
            dropdown.classList.remove("show");
        }
        list.appendChild(div);
    });
}
search.oninput = e => renderCountries(e.target.value);

renderCountries();