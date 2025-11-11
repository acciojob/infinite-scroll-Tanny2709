// Get the container where list items will be added
const listContainer = document.getElementById('infi-list');

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

// Infinite scroll inside the list container
listContainer.addEventListener('scroll', () => {
  // Check if user reached the bottom of the container
  if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight - 1) {
    addListItems(2); // Add 2 more items
  }
});
