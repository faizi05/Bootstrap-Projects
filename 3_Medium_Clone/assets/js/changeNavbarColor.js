window.addEventListener("scroll", () => {
  let navbar = document.getElementById("navbar"); // get navbar
  let getStartedSutton = document.getElementById("get-started-button"); // get get-started-button
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > 350
  ) {
    // add class on navbar or get-started-button
    navbar.classList.add("white-navbar");
    getStartedSutton.classList.add("get-started-green-btn");
  } else {
    // remove class on navbar or get-started-button
    navbar.classList.remove("white-navbar");
    getStartedSutton.classList.remove("get-started-green-btn");
  }
});
