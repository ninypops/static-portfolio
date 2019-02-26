var button = document.getElementById('#portfolio');
button.onclick = function(e) {
    alert("clicked!");
}

$('body').animate( { scrollLeft: '+=50' }, 1000, 'easeOutQuad' );