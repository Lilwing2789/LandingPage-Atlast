/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
 * 
*/
//define a global variable to store navbar__list
const menu = document.querySelector("#navbar__list");
//define a global variable to store section elements
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//helper function used to create list items
//function used to created list items that serve as links for navbar
function createListItem(section) {
  const id = section.id;
  const dataNav = section.dataset.nav;
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = dataNav;
  a.href = `#${id}`;
  a.classList.add("menu__link");
  li.appendChild(a);
  menu.appendChild(li);
}

  /**
   * End Helper Functions
   * Begin Main Functions
   * 
  */

  // build the nav

  // Create a function to check if a section is in the viewport.
  function isSectionInViewport(section) {
    const boundings = section.getBoundingClientRect();
    const inView = boundings.top >= 0
      && boundings.right <= window.innerWidth
      && boundings.bottom <= window.innerHeight;
    return inView;
  }
  // Add an event listener to the window to listen for the `scroll` event.
  addEventListener("scroll", () => {
    // Iterating through the list of `section` elements.
    for (const section of sections) {
      // adding active class to sections in viewport
      if (isSectionInViewport(section)) {
        section.classList.add("nav-active");
      } else {
        // if the section isn't in viewport remove active class 
        section.classList.remove("nav-active");
      }
    }
  });
  // Call the `createListItem` function for each `section` element.
  sections.forEach(createListItem);
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

