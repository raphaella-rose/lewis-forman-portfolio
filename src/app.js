import data from "./data.json" assert {type: 'json'};


function displayPortfolio(data) {
  let portfolioHTML = "";
  let portfolioElement = document.querySelector("#portfolio")
  for (let show of data)  {
  portfolioHTML += 
    ` <div class="row text-center mt-2">
    <div class="col-sm mt-2 text-center">
    <div class="hover-image">
      <img class="img-fluid rounded project" src=${show[0].image} alt=${show[0].name}>
      <div class="hover-overlay hover-overlay--solid">
        <div class="hover-description">
          <div class="text-decoration-none project-link">${show[0].name}</div>
        </div>
      </div>
    </div>
    </div>
    <div class="col-sm mt-2 text-center">
    <div class="hover-image">
      <img class="img-fluid rounded project" src=${show[1].image} alt=${show[1].name}>
      <div class="hover-overlay hover-overlay--solid">
        <div class="hover-description">
          <div class="text-decoration-none project-link">${show[1].name}</div>
        </div>
      </div>
    </div>
    </div>
    <div class="col-sm mt-2 text-center">
    <div class="hover-image">
      <img class="img-fluid rounded project" src=${show[2].image} alt=${show[2].name}>
      <div class="hover-overlay hover-overlay--solid">
        <div class="hover-description">
          <div class="text-decoration-none project-link">${show[2].name}</div>
        </div>
      </div>
    </div>
    </div>
    </div>
    `;
    portfolioElement.innerHTML = portfolioHTML;
  }

    }
   

displayPortfolio(data)