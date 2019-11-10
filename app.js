function heroClassToggle() {
  var element = document.getElementById("hero");
  element.classList.toggle("toggle-hero");
}

// FAQ PAGE
function toggleIcon(e) {
    $(e.target)
      .prev(".panel-heading")
      .find(".more-less")
      .toggleClass("fa-sort-up fa-sort-down");
  }
  $(".panel-group").on("hidden.bs.collapse", toggleIcon);
  $(".panel-group").on("shown.bs.collapse", toggleIcon);