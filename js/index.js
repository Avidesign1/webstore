function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

hamburger button; javascript “onclick” “toggle-view”
- grid: 1fr 1fr   javascript file:


    -  const courses = [ { name: `t-shirt` price: `50` quantity: `10`
		}, {
		name: `blouse` 		price: `70`
		quantity: `50`
		}

function getCourseAsHtmlString(course) {

return `<article class="course ${course.category}">
            <h3>${course.name} ${greatdeal}</h3>
            <ul>
              <li>Course Code: <strong>${course.name}</strong></li>
              <li>Instructor: <strong>${course.instr.lastname}, ${course.instr.firstname}</strong></li>
              <li>Start: <strong>${course.start}</strong></li>
              <li class="course-weeks">
                Weeks: <strong>${course.numWks}</strong>
                <ul>
                  <li>Includes Break: <strong>${course.incBrks}</strong></li>
                </ul>
              </li>
              <li>Duration: <strong>${course.duration}</strong></li>
            </ul>
            <div class="course-cost">${course.cost}</div>
          </article>`;
}

function renderCourses(arrToRender) {
  // Connect each Object from the incoming Array to an HTML template
  const arrOfHtmlCourses = arrToRender.map(getCourseAsHtmlString);
  const strOfHtmlCourses = arrOfHtmlCourses.join(`\n`);

  document.getElementById('courses').innerHTML = strOfHtmlCourses;  
}

renderCourses(courses);

