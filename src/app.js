import data from "./data.json" assert {type: 'json'};


function displayPortfolio(data) {
  let portfolioElement = document.querySelector("#portfolio")
  let portfolioHTML = "";
  for (let show of data)  {
  portfolioHTML =  portfolioHTML +
    ` Test
    `;
    portfolioElement.innerHTML = portfolioHTML;
  }

    }


displayPortfolio(data)
