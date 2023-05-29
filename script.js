const TOKEN =  "YOUR BOT-TOKEN";
const CHAT_ID = "YOUR CHAT-ID";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
document.getElementById('tg').addEventListener('submit',function(e){
    e.preventDefault();
    document.getElementById("warning").style.display = "none";
    if(this.name.value != ''&& this.email.value !='' && this.message.value!= '')
    {
        let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Отправитель: </b> ${this.name.value}\n`;
        message += `<b>Почта отправителя: </b> ${this.email.value}\n`;
        message += `<b>Сообщение отправителя: </b> ${this.message.value}`;
        axios.post(URI_API,{
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text:message
        })
        .then((res)=>{
            this.name.value='';
            this.email.value = '';
            this.message.value = '';
            document.getElementById("success").innerHTML = "Сообщение отправлено!";
            document.getElementById("success").style.display = "block";
        })
    }
    else
    {  
        document.getElementById("warning").innerHTML = "Все поля должны быть заполнены!";
        document.getElementById("warning").style.display = "block";
    }
    
})