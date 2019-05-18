window.onload = function() {
    var form = document.getElementById("openChat");
    form.onsubmit = submitForm.bind(form);
}

function submitForm(event) {
    event.preventDefault();
    var text = "Hi Arwani, I'm very interest with your work, do you available right now?"; 
    window.open('https://wa.me/6281252733330?text=' + encodeURIComponent(text), '_blank');
}