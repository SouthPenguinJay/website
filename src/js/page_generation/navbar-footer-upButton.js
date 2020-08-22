// NAVBAR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("navbar script");

let navbarPlaceholder = document.querySelector('#navbarPlaceholder');

/* navbarPlaceholder.innerHTML += '<div class="dropdown">';
navbarPlaceholder.innerHTML += '<button class="dropbtn">Dropdown</button>';
navbarPlaceholder.innerHTML += '<div class="dropdown-content">';
navbarPlaceholder.innerHTML += '<a href="#">Link 1</a>';
navbarPlaceholder.innerHTML += '<a href="#">Link 2</a>';
navbarPlaceholder.innerHTML += '<a href="#">Link 3</a>';
navbarPlaceholder.innerHTML += '</div>';
navbarPlaceholder.innerHTML += '</div>'; */

navbarPlaceholder.innerHTML += `<div class="dropdown">
<button class="dropbtn">Dropdown</button>
<div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
</div>
</div>`


  
  
    
    
    
  

/* let ulNavbarContainer = document.createElement('ul');

let liPClogo = document.createElement('li');
liPClogo.innerHTML = '<a href="/index">PolyChampions</a>';
ulNavbarContainer.appendChild(liPClogo);

let liTeams = document.createElement('li');
liTeams.innerHTML = '<a href="/teams/bombers.html">Teams</a>';
ulNavbarContainer.appendChild(liTeams);

let liStats = document.createElement('li');
liStats.innerHTML = '<a href="/stats/statsdemo.html">Stats</a>';
ulNavbarContainer.appendChild(liStats);

let liGuides = document.createElement('li');
liGuides.innerHTML = '<a href="/guides/guidedemo.html">Guides</a>';
ulNavbarContainer.appendChild(liGuides);

let navbarPlaceholder = document.querySelector('#navbarPlaceholder');
navbarPlaceholder.appendChild(ulNavbarContainer);
 */

// FOOTER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("footer script");

let footerContainer = document.createElement('div');
let footerText = document.createElement('p');
footerText.innerText = 'PolyChampions website footer. Created by Luna. Stats brought to you with help from Legorooj, Nelluk, and the PolyChampions stats team. Graphics done by Newt.\n\n Join now on Discord!';

footerContainer.appendChild(footerText);

let footerPlaceholder = document.querySelector('#footerPlaceholder');
footerPlaceholder.appendChild(footerContainer);