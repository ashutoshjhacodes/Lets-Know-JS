// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Get the common ancestor element to which we'll attach the event listener
  const taskList = document.getElementById('task-list');

  // Add a click event listener to the taskList (common ancestor)
  taskList.addEventListener('click', function(event) {
      // Check if the clicked element is a "delete" button
      if (event.target.classList.contains('delete')) {
          // Get the parent <li> element of the clicked button
          const listItem = event.target.closest('li');

          // Remove the parent <li> element from the list
          if (listItem) {
              listItem.remove();
          }
      }
  });
});
