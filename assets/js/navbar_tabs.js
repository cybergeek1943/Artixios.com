var HomeTab = document.getElementById("NavbarHomeTab")
var SoftwareTab = document.getElementById("NavbarSoftwareTab")
var ResourcesTab = document.getElementById("NavbarResourcesTab")
var AboutTab = document.getElementById("NavbarAboutTab")

var all_tabs = [HomeTab, SoftwareTab, ResourcesTab, AboutTab]
function __unbold_all() {  // unbold all tabs
    for (var i=0; i < all_tabs.length; i+=1) {
        all_tabs[i].style.fontWeight = 'normal';
        all_tabs[i].style.color = 'var(--bs-navbar-color)';
    };
}

 // called from onload event in html body onload attribute
function embolden(element) {
    __unbold_all() // unbold all tabs
    element.style.fontWeight = 'bold';
    element.style.color = 'var(--bs-navbar-active-color)';
}
