let username = document.getElementById("username");
let userphone = document.getElementById("userphone");
let usermanzil = document.getElementById("usermanzil");
let useryosh = document.getElementById("useryosh");
let usermaktab = document.getElementById("usermaktab");
let send = document.getElementById("send");

send.addEventListener("click", () =>{
    let message = `Ismi: ${username.value}; Telefon raqami: ${userphone.value}; Manzili: ${usermanzil.value}; Yoshi: ${useryosh.value}; Maktabi: ${usermaktab.value};`
    sendtelegram(message);
});


    

function sendtelegram(message) { let telegram_bot_id = "6677367895:AAEPeJdbME7dQN4q36GbBz-SjfKTmAXsQH4"; let chat_id =5164875477; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };
