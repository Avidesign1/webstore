function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}






 


  

const shoes = [
  {
    name: `shoes`,
    price: `$99`,
    image: `img/shoes.jpg` ,
    qty: `12`,
    description: `A Cool pair of shoes`,

    } 
]


const tshirt = [
  {
    name: `Tshirt`,
    price: `$78`,
    image: `img/tshirt.jpg` ,
    qty: `10`,
    description: `A Nice cool T-shirt`,

    } 
]
const jacket= [
  {
    name: `jacket`,
    price: `$98`,
    image: `img/jacket.jpg` ,
    qty: `16`,
    description: `A Nice cool jacket`,

    } 
]
const sunglasses = [
  {
    name: `sunglasses`,
    price: `$120`,
    image: `img/sunglasses.jpg`,
    qty: `8`,
    description: `A Nice cool shades`,

    } 
]
const sneakers = [
  {
    name: `sneakers`,
    price: `$189`,
    image: `img/sneakers.jpg` ,
    qty: `17`,
    description: `A Nice cool pair of sneakers`,

    } 
]  
    



/************* FUNCTIONS *************/
// Stored functions that will run as part of this application


function isInStock(shoes) {
  if (shoes.qty > 12) {
    return true;
  } else {
    return false;
  }
}

function isInThisCategory(shoes) {
  
  if (this == 'all') {
    return true;
  } else if (shoes.category == this) {
    return true;
  } else {
    return false;
  }
}




// Function: getCourseAsHtmlString
// Parameters: course:Object
// Return: String of HTML (<article>)

function getCourseAsHtmlString(shoes) {

  // If the cost of a product is less than $100, tell the user this is a "GREAT DEAL!"

  let greatdeal;

  if (shoes.cost < 100) {
    greatdeal = `<small class="callout urgent">Great deal!</small>`;
  } else {
    greatdeal = `😫`
  }

  return `<article class="course ${shoes.category}">
            <h3>${shoes.name} ${greatdeal}</h3>
           
            <div class="shoes-cost">${shoes.cost}</div>
          </article>`;
}

function renderShoes(arrToRender) {
  // Connect each Object from the incoming Array to an HTML template
  const arrOfHtmlShoes = arrToRender.map(getShoesAsHtmlString);
  const strOfHtmlShoes = arrOfHtmlShoes.join(`\n`);

  document.getElementById('shoes').innerHTML = strOfHtmlShoes;  
}








function toggleCourseLayout(event) {
  document.getElementById('shoes').classList.toggle('grid-view');
}

function loadShoesCategory(event) {
  // Runs every time the dropdown changes
  const categoryImSearchingFor = event.target.value; // Get the new option from the dropdown/select
  renderShoes(shoes.filter(isInThisCategory, categoryImSearchingFor)); // Print only courses in a category
}

function loadShoesByName(event) {
  const nameImSearchingFor = event.target.value; // Get the value from the field
  renderShoes(shoes.filter(isMatchingName, nameImSearchingFor));
}


/************* EXECUTABLE *************/
// Execute functions that will access data
// document.getElementById('courses').innerHTML = getCourseAsHtmlString(courses[0])
// document.getElementById('courses').innerHTML += getCourseAsHtmlString(courses[1])


renderShoes(shoes); // Print the full set of courses
//renderCourses(courses.filter(isInStock));  //  Print only courses in stock

document.getElementById('toggleView').addEventListener('click', toggleShoesLayout);
document.getElementById('shoesCategory').addEventListener('change', loadShoesCategory);
document.getElementById('shoesName').addEventListener('input', loadShoesByName);












function myFunction() {
  var x = document.getElementById("myImg").src;
  document.getElementById("list").innerHTML = x;
}



let numItemsInCart = 0;

function addOneToCart() {
    numItemsInCart += 1;
    document.getElementById(`cartNum`).innerHTML = `${numItemsInCart}`;
}

document.getElementById(`addOne`).addEventListener('click', addOneToCart);



function websiteSurprise() {
  var txt;
  if (confirm("Press Ok!")) {
    txt = "Hello How are you today!";
  } else {
    txt = "ok check again!";
  }
  document.getElementById("surprise").innerHTML = txt;
}