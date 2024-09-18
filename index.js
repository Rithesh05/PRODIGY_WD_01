// Select the nav element
const nav = document.querySelector('nav');

// Add an event listener for scroll events
window.addEventListener('scroll', () => {
    // Check if the scroll position is greater than 120 pixels
    if (window.scrollY > 120) {
        // Change the background color of the nav element
        nav.style.opacity="0.5";
    } else {
        // Reset background color when scroll position is less than or equal to 120 pixels
        nav.style.backgroundColor = 'black';
        nav.style.color = 'white'; // Optional: reset text color
    }
});
function closesidebar(){
    document.getElementById("sidebar").style.display="none";
}
function opensidebar(){
    document.getElementById("sidebar").style.display="flex";
}
