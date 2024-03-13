// Get the button element
var btn_method = document.querySelector(".btn_one");
var btn_results = document.querySelector(".btn_two");
var btn_conc = document.querySelector(".btn_three");

// Get the displayText element
var methodologyText = document.getElementById("methodologyText");
var conclusionText = document.getElementById("conclusionText");

// Add click event listener to the button
btn_method.addEventListener("click", function() {
    // Show text with animation
    methodologyText.style.display = "block";
    conclusionText.style.display = "none";
    methodologyText.classList.add("fade-in");

    btn_method.style.background = "transparent";
    btn_method.style.color = "#fff";

    btn_conc.style.background = "#fff";
    btn_conc.style.color = "rgb(0, 189, 173)";

});

btn_conc.addEventListener("click", function() {
    // Show text with animation
    methodologyText.style.display = "none";
    conclusionText.style.display = "block";
    conclusionText.classList.add("fade-in");

    btn_method.style.background = "#fff";
    btn_method.style.color = "rgb(0, 189, 173)";


    btn_conc.style.background = "transparent";
    btn_conc.style.color = "#fff";
});