var textValue;

window.onload = function() {
    generateChat();
    checkFormState();
    var form = document.getElementById("openChat");
    form.onsubmit = submitForm.bind(form);
}

function checkFormState() {
    var input = document.getElementById("chatTextInput");
    var button = document.getElementById("chatSendButton");

    input.addEventListener('keyup', function() {
        if (input.value.charAt(0) === ' ') input.value = null;

        textValue = input.value;
        if (input.value.length > 0) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
}

function submitForm(event) {
    event.preventDefault();

    gtag('event', 'click', {
        'event_category': 'contacts',
        'event_label': 'open_whatsapp_chat',
        'value': 1
    });

    var text = "Hi Arwani, I'm very interest with your work, do you available right now?";
    if (textValue.length > 0) text = textValue;
    window.open('https://wa.me/6281252733330?text=' + encodeURIComponent(text), '_blank');
}

function generateChat() {
    var item = document.getElementById("chat").children;
    var i = 0;
    var interval = 1500;

    var timer = setInterval(function() {
        i++;
        var j = i - 1;

        item[j].className = 'loading';
        
        setTimeout(function(){
            item[j].className = 'sent';
            item[j].children[0].className = 'animated flipInX faster';
        }, interval - 300);

        if (i === item.length) clearInterval(timer);
    }, interval);
}