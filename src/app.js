let data = [1, 2, 3]
function displayPortfolio(data) {
let portfolioHTML = "";
  let portfolioElement = document.querySelector("#portfolio")
  for (let show of data)  {
  portfolioHTML += 
    ` <div class="row mt-3">
    test
    </div>
    `;
    portfolioElement.innerHTML = portfolioHTML;
  }


    }


displayPortfolio(data)
