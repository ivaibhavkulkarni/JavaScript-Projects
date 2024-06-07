let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

function getMsgFromChatBot(){
    let noOfMsg = chatbotMsgList.length
    let chatBotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfMsg)-1];

    let msgContainerE1= document.createElement("div");
    msgContainerE1.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgContainerE1);

    let msgE1 = document.createElement("span");
    msgE1.classList.add("msg-from-chatbot");
    msgE1.textContent = chatBotMsg;
    msgContainerE1.appendChild(msgE1);
}



function sendMsgToChatbot(){
    let humanMsg = userInput.value;

    let msgContainerE1 = document.createElement("div");
    msgContainerE1.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgContainerE1);

    let msgE1 = document.createElement("span");
    msgE1.classList.add("msg-to-chatbot");
    msgE1.textContent = humanMsg;
    msgContainerE1.appendChild(msgE1);

    userInput.value = "";
    getMsgFromChatBot();
}


sendMsgBtn.onclick= function(){
    sendMsgToChatbot();
}