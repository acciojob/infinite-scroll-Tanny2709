// Get the container where list items will be added
const listContainer = document.getElementById('list');

// Track the current item count
let itemCount = 0;

// Function to create and append list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `Item ${itemCount}`;
    listContainer.appendChild(li);
  }
}

// Add 10 list items initially
addListItems(10);

// Add infinite scroll functionality
window.addEventListener('scroll', () => {
  // Check if the user has scrolled to the bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    addListItems(2); // Add 2 more items
  }
});
