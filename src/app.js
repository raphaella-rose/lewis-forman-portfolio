let data = [[ {
  "name": "Cheeky Girls",
  "image": "/images/cheeky-girls.png"
}, {
   "name": "Roots" ,
  "image":  "/images/Roots.png"
}, {
   "name": "Ondine" ,
  "image":  "/images/Ondine.png"
}],
[{
   "name": "Candlewasters Spring Showcase" ,
  "image":  "/images/cw-spring.png"
}, 
{
   "name": "Certain Young Men" ,
  "image":  "/images/young-men.png"
},
{
   "name": "Boys" ,
  "image":  "/images/Boys.png"
}],
[{
   "name": "Prince Archipelago" ,
  "image":  "/images/prince.png"
},{
   "name": "The Roses of Eyam" ,
  "image":  "/images/roses-of-eyam.png"
},{
  "name": "Paradok Creative Producing Course" ,
  "image":  "/images/paradok-creative.png"
}],
[{
  "name": "Legally Blonde",
  "image": "/images/legally-blonde.png"
}, {
   "name": "A Streetcar Named Desire" ,
  "image":  "/images/streetcar.png"
},{
   "name": "Candlewasters Winter Showcase" ,
  "image":  "/images/cw-winter.png"
},],
[{
   "name": "Wasted" ,
  "image":  "/images/Wasted.png"
},{
  "name": "Escape the Bedlam",
  "image": "/images/bedlam.png"
}, {
   "name": "Haunted House" ,
  "image":  "/images/haunted-house.png"
}], 
[{
   "name": "The Improverts" ,
  "image":  "/images/improverts.png"
},{
  "name": "Radio 69" ,
  "image":  "/images/radio-69.jpg"
},
{
  "name": "Catching Up",
  "image": "/images/catching-up.png"
}], 
[{
  "name": "The Scottish Online Student Drama Festival",
  "image": "/images/scottish-fest.png"
}, {
   "name": "In The Name of the Father" ,
  "image":  "/images/itnotf.png"
}, {
  "name": "Seven Interviews" ,
  "image":  "/images/seven-interviews.png"
}],
[{
   "name": "Zoogmalion" ,
  "image":  "/images/Zoogmalion.png"
},{
  "name": "Eight",
  "image": "/images/eight.png"
}, {
  "name": "Good Girls Go To Heaven",
  "image": "/images/good-girls.jpg"
}],
[{
 "name": "The Closing of a Small and Insignificant Bowling Alley" ,
  "image":  "/images/bowling-alley.jpg"
}, {
  "name": "Dirk Gently's Holistic Detective Agency",
  "image": "/images/detective-agency.png"
}, {
  "name": "Deficit" ,
  "image":  "/images/deficit.jpg"
}],
[ {
  "name": "Mother and the Monster",
  "image": "/images/mother-monster.jpg"
}, {
  "name": "Moana",
  "image": "/images/moana.png"
}, {
  "name": "The Greatest Showman" ,
  "image":  "/images/greatest-showman.png"
}],
[{
  "name": "Gender-Reversed Hamilton",
  "image": "/images/gr-hamilton.png"
}, {
  "name": "Heathers",
  "image": "/images/heathers.png"
}, {
  "name": "Dear Evan Hansen" ,
  "image":  "/images/deh.png"
}],
[{
  "name": "In The Heights",
  "image": "/images/ith.png"
}, {
  "name": "Les Misérables",
  "image": "/images/les-mis.png"
}, {
  "name": "Hamilton" ,
  "image":  "/images/hamilton.png"
}]
 ]
function displayPortfolio(data) {
 let portfolioHTML = "";
  let portfolioElement = document.querySelector("#portfolio")
  for (let show of data)  {
  portfolioHTML += 
    ` <div class="row mt-3">
    <div class="col-sm text-center">
    <div class="hover-image">
      <img class="img-fluid rounded project" src=${show[0].image} alt=${show[0].name}>
      <div class="hover-overlay hover-overlay--solid">
        <div class="hover-description">
          <div class="text-decoration-none project-link">${show[0].name}</div>
        </div>
      </div>
    </div>
    </div>
    <div class="col-sm text-center">
    <div class="hover-image">
      <img class="img-fluid rounded project" src=${show[1].image} alt=${show[1].name}>
      <div class="hover-overlay hover-overlay--solid">
        <div class="hover-description">
          <div class="text-decoration-none project-link">${show[1].name}</div>
        </div>
      </div>
    </div>
    </div>
    <div class="col-sm text-center">
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
