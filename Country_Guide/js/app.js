
// <-----------all Main container-------------->
const datacontainer = document.querySelector(".data-container");
const container1 = document.querySelector(".Container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container-3");

// <-----------fetch URLr-------------->
const URL = "https://restcountries.com/v3.1/all";

function GetCountry() {
  fetch(URL)
    .then((resp) => resp.json())
    .then((country) => {
      country.forEach((element) => {
        showcountry(element);
      });
    });
}

GetCountry();
// <-----------show all country-------------->

function showcountry(countries) {
  const createEl = document.createElement("div");
  createEl.classList.add("card-body");
  datacontainer.appendChild(createEl);

  createEl.innerHTML = ` <img src="${countries.flags["png"]}" alt="" class="country-image">
  <p class="countryname"> ${countries.name.common}</p>
  <p class="population"> Population:${countries.population}</p>
  <p class="countryRegion">Region:${countries.region}</p>
  <p class="capital">Capital:${countries.capital}</p>
`;
// <-----------Modal container-------------->
  createEl.addEventListener("click", (e) => {
    const targetDiv = e.target.parentElement;
    targetDiv.parentElement.style.display = "none";
    container2.style.display = "none";
    const modaldiv = document.createElement("div");
    modaldiv.classList.add("container-3");



    const native = countries.name["nativeName"];

    for (key in native) {
      native[key].common;
    }

    container3.innerHTML = `   <button class="btn-back">Go Back</button>
   <div class="modal-container">
       <div class="modal-image"><img src="${
         countries.flags["png"]
       }" alt=""></div>
   
       
       <div class="modal-details-container">
   
           <div class="detial1">
             <h2>${countries.name.common}</h2>
               <p class="native-name"><strong>native-name</strong>:${
                 native[key].common
               }</p>
               <p class="native-name"><strong>Population</strong>: ${
                 countries.population
               }</p>
               <p class="native-name"><strong>Region</strong>:${
                 countries.region
               }</p>   
               <p class="native-name"><strong>Sub-Region</strong>:${
                 countries.subregion
               }</p>
               <p class="native-name"><strong>Region</strong>${
                 countries.region
               }</p>   
                <p class="native-name"><strong>Capital</strong>:${
                  countries.capital
                }</p>
                <p class="native-name border-cr"><strong>Border</strong>:${
                  countries.borders
                }</p>

               
           </div>
   
   
     
           <div class="detials2">
               <p class="native-name"><strong>Currency</strong>${
                 Object.values(countries.currencies)[0].name
               }</p>
               <p class="native-name"><strong>Top-level-domain</strong>:${
                 countries.tld
               }</p>
               <p class="native-name"><strong>Languges</strong>: ${Object.values(
                 countries.languages
               )}</p>    
           </div>
       </div>
       
   
   </div>
   `;
// <-----------Modal back facility-------------->

    const backbn = document.querySelector(".btn-back");

    backbn.addEventListener("click", () => {
      const targetDiv = e.target.parentElement;
      targetDiv.parentElement.style.display = "flex";
      container2.style.display = "flex";
      const modalcont = document.querySelector(".modal-container");
      modalcont.style.display = "none";
      backbn.style.display = "none";
    });

// <-----------No boundry country get-------------->

    const mdldetail = document.querySelector(".detial1");
    const bordercr = mdldetail.children[7];
    if (bordercr.innerText.includes(undefined)) {
      bordercr.innerHTML = "<strong>  don't Have any Boundry.. <strong>";
      bordercr.style.color = "hsl(0, 53%, 58%)";
    }
  });
}

// <-----------Search Country-------------->

const search = document.querySelector(".search");
search.addEventListener("input", (e) => {
  const { value } = e.target;
  const countryname = document.querySelectorAll(".countryname");

  countryname.forEach((elem) => {
    if (elem.innerText.toLowerCase().includes(value.toLowerCase())) {
      elem.parentElement.style.display = "grid";
    } else {
      elem.parentElement.style.display = "none";
    }
  });
});


// <-----------Region By filter-------------->
const regionFilter = document.querySelectorAll(".dropshow .region");

regionFilter.forEach((Getregion) => {
  Getregion.addEventListener("click", (e) => {
    const targettextcontent = e.target.textContent;

    const countryRegion = document.querySelectorAll(".countryRegion");
    const allfilter = document.querySelector(".all");
    countryRegion.forEach((regionget) => {
      const allcard = regionget.parentElement;
      const regiontext = regionget.textContent;
      allfilter.addEventListener("click", () => {
        allcard.style.display = "grid";
      });
      if (regiontext.includes(targettextcontent)) {
        allcard.style.display = "grid";
      } else {
        allcard.style.display = "none";
      }
    });
  });
});

// <-----------Region By filter-------------->

const dropdownbtn = document.querySelector(".dropdown-btn");
dropdownbtn.addEventListener("click", () => {
  const dropdownshow = document.querySelector(".dropshow ");
  const dropdownhide = document.querySelector(".dropdownHide");
  dropdownshow.style.transition = "1s ease-in";

  dropdownshow.classList.toggle("dropdownHide");
});
// <-----------Dark and Light Mode-------------->

const moons = document.querySelector(".fa-moon");
const moonn = moons.parentElement;

moonn.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("darkmode")) {
    body.classList.remove("darkmode");
    moons.classList.toggle("fas");
  } else {
    body.classList.add("darkmode");
    moons.classList.add("fas");
  }
});


