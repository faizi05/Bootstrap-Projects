const toggleBtn = document.getElementById("toggle_btn"); // get toggle btn
const sidebar = document.getElementById("sidebar"); //sidebar
const content = document.getElementById("content"); // content
const logo = document.getElementById("web_logo"); // Sidebar Logo
// Add click event listner on toggle btn
toggleBtn.addEventListener("click", function () {
  //   Add/Remove class on sidebar
  sidebar.classList.toggle("resize-sidebar");
  content.classList.toggle("resize-content");
  logo.classList.toggle("hide-logo");
});
