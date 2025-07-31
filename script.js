/*===== MENU SHOW =====*/
// Function to toggle the visibility of the navigation menu when the toggle button is clicked
const showMenu = (toggleId, navId) => {
  // Get references to the toggle button and the navigation menu by their IDs
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  // If both elements exist
  if (toggle && nav) {
    // Add a click event listener to the toggle button
    toggle.addEventListener("click", () => {
      // Toggle the 'show' class on the nav menu (to show/hide it)
      nav.classList.toggle("show")
    })
  }
}
// Call the function with the IDs of the toggle button and nav menu
showMenu("nav-toggle", "nav-menu")

/*===== REMOVE MENU MOBILE =====*/
// Get all elements with the class 'nav__link' (menu links)
const navLink = document.querySelectorAll(".nav__link")

// Function to remove the 'show' class from the nav menu (close menu after clicking a link)
function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show")
}

// Add the linkAction function to each link when clicked
navLink.forEach((n) => n.addEventListener("click", linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
// Get all sections that have an ID attribute
const sections = document.querySelectorAll("section[id]")

// Add a scroll event listener to the window
window.addEventListener("scroll", scrollActive)

// Function to highlight the nav link corresponding to the currently visible section
function scrollActive() {
  // Get current vertical scroll position
  const scrollY = window.pageYOffset

  // Loop through each section
  sections.forEach((current) => {
    // Get height and top position of each section
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50 // adjust for header height
    const sectionId = current.getAttribute("id")

    // Check if the current scroll position is within this section's range
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Add 'active' class to the nav link corresponding to this section
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active")
    } else {
      // Remove 'active' class if section is not in view
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active")
    }
  })
}

/*===== SCROLL REVEAL ANIMATION =====*/
// Initialize ScrollReveal library with settings
const sr = ScrollReveal({
  origin: "top",     // Animation will start from the top
  distance: "80px",  // Elements move 80px during reveal
  duration: 2000,    // Animation duration is 2 seconds
  reset: true        // Animation resets when elements go out of view
})

/*SCROLL HOME*/
// Reveal these elements in the home section with optional delay/origin
sr.reveal(".home__title", {})                         // Home title appears
sr.reveal(".home__scroll", { delay: 200 })            // Scroll icon appears after 200ms
sr.reveal(".home__img", { origin: "right", delay: 400 }) // Home image slides in from right

/*SCROLL ABOUT*/
// Reveal about section elements with delays to stagger animation
sr.reveal(".about__img", { delay: 500 })              // Image appears after 500ms
sr.reveal(".about__subtitle", { delay: 300 })         // Subtitle appears after 300ms
sr.reveal(".about__profession", { delay: 400 })       // Profession title appears after 400ms
sr.reveal(".about__text", { delay: 500 })             // About text appears after 500ms
sr.reveal(".about__social-icon", { delay: 600, interval: 200 }) // Social icons appear one by one

/*SCROLL SKILLS*/
// Skills section animations
sr.reveal(".skills__subtitle", {})                    // Skills subtitle appears
sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 }) // Skills appear in staggered animation
sr.reveal(".skills__img", { delay: 400 })             // Skills image appears after 400ms

/*SCROLL PORTFOLIO*/
// Each portfolio image appears with 200ms gap between them
sr.reveal(".portfolio__img", { interval: 200 })

/*SCROLL CONTACT*/
// Contact section animations
sr.reveal(".contact__subtitle", {})                   // Contact subtitle appears
sr.reveal(".contact__text", { interval: 200 })        // Contact text lines appear one by one
sr.reveal(".contact__input", { delay: 400 })          // Contact form input appears after 400ms
sr.reveal(".contact__button", { delay: 600 })         // Contact button appears after 600ms
