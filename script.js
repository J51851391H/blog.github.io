// Lex, Glossay Page

	// JavaScript code to toggle visibility based on checked boxes
  
   document.addEventListener("DOMContentLoaded", function() {
  const organizations = Array.from(document.querySelectorAll(".organization"));

  const handleCheckboxChange = () => {
    const serviceCheckboxes = document.querySelectorAll("input[name='category']:checked");
    const locationCheckboxes = document.querySelectorAll("input[name='location']:checked");

    const selectedServiceCategories = Array.from(serviceCheckboxes).map(cb => cb.id);
    const selectedLocationCategories = Array.from(locationCheckboxes).map(cb => cb.id);

    // If no categories are selected in both filters, show all organizations
    if (selectedServiceCategories.length === 0 && selectedLocationCategories.length === 0) {
      organizations.forEach(org => org.style.display = "block");
      return;
    }

    // Filter organizations based on selected categories
    organizations.forEach(org => {
      const orgInfo = org.querySelector("span[data-category]");
      const orgCategories = orgInfo.getAttribute("data-category").split(" ");
      const orgLocations = orgInfo.getAttribute("data-location").split(" ");

      const isServiceMatch = selectedServiceCategories.length === 0 || selectedServiceCategories.some(cat => orgCategories.includes(cat));
      const isLocationMatch = selectedLocationCategories.length === 0 || selectedLocationCategories.some(loc => orgLocations.includes(loc));

      if (isServiceMatch && isLocationMatch) {
        org.style.display = "block";
      } else {
        org.style.display = "none";
      }
    });
  };

  document.querySelectorAll("input[name='category'], input[name='location']").forEach(checkbox => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });

  // Initially, show all organizations
  organizations.forEach(org => org.style.display = "block");
});


// Last Updated at top of page

  document.addEventListener("DOMContentLoaded", function() {

  // Function to update the 'Updated' text
  const updateLastUpdated = () => {
    const today = new Date();
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();
    const lastUpdatedElement = document.getElementById("lastUpdated");
    lastUpdatedElement.innerHTML = `updated ${month} ${year}`; 
    lastUpdatedElement.style.fontVariant = 'small-caps';
    lastUpdatedElement.style.fontSize = '1em'; // Reducing font size
    lastUpdatedElement.style.color = 'black'; // Setting text color to black
  };

  // Call the function
  updateLastUpdated();
});

// Footer

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
});









 
