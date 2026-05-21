// Dark and light mode button
const darkbutton = document.querySelector("#darkbutton");
darkbutton.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")){
        darkbutton.textContent = "Light Mode"
    }
    else
        darkbutton.textContent = "Dark Mode"
})

//Accordion setup (from W3 Schools)
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//Mixitup initializer
var mixer = mixitup('#mixitupContainer',{
    selectors: {target: '.mix'
},
animation: {duration: 250}});