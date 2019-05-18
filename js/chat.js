window.onload = function() {
    generateChat();
    var form = document.getElementById("openChat");
    form.onsubmit = submitForm.bind(form);
}

function submitForm(event) {
    event.preventDefault();
    var text = "Hi Arwani, I'm very interest with your work, do you available right now?"; 
    window.open('https://wa.me/6281252733330?text=' + encodeURIComponent(text), '_blank');
}

function generateChat() {
    var c = document.getElementById("chat").children;
    var i = 0;
    var interval = 1500;

    var timer = setInterval(function() {
        i++;
        var j = i - 1;

        c[j].className = 'loading';
        
        setTimeout(function(){
            c[j].className = 'sent';
        }, interval - 300);

        if (i === c.length) clearInterval(timer);
    }, interval);
}