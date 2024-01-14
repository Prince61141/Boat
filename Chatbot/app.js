const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loading=document.querySelector(".loading");

send.addEventListener("click", () => renderUserMessage());

const dateEle = document.createElement("div");
  dateEle.classList.add("date");
  dateEle.textContent =  new Date().toLocaleDateString([],{weekday: "short", month: "short", day: "2-digit"});
  chatBody.append(dateEle);

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  toggleLoading(false);
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
    toggleLoading(true);
  }, 4300);
};

const renderChatbotResponse = (userInput) => {
  
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
  
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";

  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);

  messageEle.append(txtNode);

  if (type !== "user") {
    className = "chatbot-message";
    messageEle.classList.add(className);

    const botResponseContainer = document.createElement("div");
    botResponseContainer.classList.add("bot-response-container");

    const botResponse = document.createElement("div");
    botResponse.classList.add("bot-response");

    const botImg = document.createElement("img");
    botImg.setAttribute("src", "./boat-icon.png");

    botResponse.append(botImg);
    botResponse.append(messageEle);

    botResponseContainer.append(botResponse);
    chatBody.append(botResponseContainer);

    const timeEle = document.createElement("div");
  timeEle.classList.add("message-time");
  timeEle.textContent = new Date().toLocaleTimeString([],{ hour: "2-digit", minute: "2-digit"});
  botResponseContainer.append(timeEle);
  }

  else{
  messageEle.classList.add(className);
  chatBody.append(messageEle);

  const timeEle = document.createElement("div");
  timeEle.classList.add("message-time");
  timeEle.textContent = new Date().toLocaleTimeString([],{ hour: "2-digit", minute: "2-digit"});
  chatBody.append(timeEle);
  }
};

const getChatbotResponse = (userInput) => {
  const lowerCaseInput = userInput.toLowerCase();
  return responseObj[lowerCaseInput] == undefined
    ? "Please try something else"
    : responseObj[lowerCaseInput];
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

const toggleLoading=(show)=>loading.classList.toggle("hide",show)