var button = document.getElementById("#portfolio");
button.onclick = function(t) {
    alert("clicked!")
}, $("body").animate({
    scrollLeft: "+=50"
}, 1e3, "easeOutQuad");
