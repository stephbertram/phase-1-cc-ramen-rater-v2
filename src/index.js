// index.js

//Global DOM Elements
const url = 'http://localhost:3000/ramens'
const ramenMenu = document.querySelector('#ramen-menu')
const ramenImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const ramenRestaurant = document.querySelector('.restaurant')
const ramenRating = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')
const ramenForm = document.querySelector('#new-ramen')


//Fetch

function getRamens() {
  return fetch(url)
  .then(resp => resp.json())
  .then(ramensData => {
    // for (let ramen of ramensData) {
      console.log(ramensData)
    ramensData.forEach(ramen => displayRamens(ramen))
      
      // displayRamens(ramen)
   
})
  .catch(err => console.log(err))

}

// Callbacks



const addSubmitListener = () => ramenForm.addEventListener('submit', handleFormSubmit);
  

const handleFormSubmit = e => { 
  e.preventDefault()
  const newRamen = {
    name: document.querySelector('#new-name').value,
    restaurant: document.querySelector('#new-restaurant').value,
    image: document.querySelector('#new-image').value,
    rating: document.querySelector('#new-rating').value,
    
    comment: document.querySelector('#new-comment').value,
  }
  displayRamens(newRamen);
}

  //For displayRamens: on page load, get all ramen objects from the server
  //display the image for each of the ramen using an img tag inside the #ramen-menu div

const displayRamens = (ramen) => {
  console.log(ramen)
  const img = document.createElement('img')
  img.src = ramen.image
  img.alt = ramen.name
  img.className = "ramen-menu-items"
  img.addEventListener("click", e => handleClick(ramen) ) 
  ramenMenu.append(img)
  };
  // ramenMenu.innerHTML += `
  //   <img src=${ramensObj.image} alt=${ramensObj.name} class="ramen-menu-items" />
  //`


//For handleClicks: Click on an image from the #ramen-menu div and fire a callback called handleClick to see all the 
//info about that ramen displayed inside the #ramen-detail div (where it says insert comment here and insert rating here).

const handleClick = (ramen) => {
  ramenImage.src = ramen.image
  ramenImage.alt = ramen.name
  ramenName.innerText = ramen.name
  ramenRestaurant.innerText = ramen.restaurant
  ramenRating.innerText = ramen.rating
  ramenComment.innerText = ramen.comment
};


// Event Listeners



// Invoke Functions

const main = () => {
  // Invoke displayRamens here
  getRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}

main()



// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
