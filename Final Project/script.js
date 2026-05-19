// Dark and light mode button
const darkbutton = document.querySelector("#darktoggle");
darkbutton.addEventListener("Click", function(){
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")){
        darkbutton.textContent = "Light Mode"
    }
    else
        darkbutton.textContent = "Dark Mode"
})