var menuBar = $("#menu-bar");
var menuItems = $(".nav-items");

menuBar.on("click", () => {
    menuItems.toggleClass("visibilityToggle");
});