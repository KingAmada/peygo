/****************************************************
  FAQ Expand/Collapse
*****************************************************/
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const plusMinus = button.querySelector(".plus-minus");
      if (answer.style.display === "block") {
        answer.style.display = "none";
        plusMinus.textContent = "+";
      } else {
        answer.style.display = "block";
        plusMinus.textContent = "-";
      }
    });
  });
});

/****************************************************
  Tabs (e.g., “Paid” vs “Pending” in wallet page)
*****************************************************/
const tabButtons = document.querySelectorAll(".tab");
tabButtons.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove 'active' from all tabs
    tabButtons.forEach(t => t.classList.remove("active"));
    // Add 'active' to clicked tab
    tab.classList.add("active");

    // Hide all tab contents
    const allContents = document.querySelectorAll(".tab-content");
    allContents.forEach(content => content.classList.remove("active"));

    // Show the correct tab content
    const targetId = tab.dataset.tab;
    document.getElementById(targetId).classList.add("active");
  });
});
