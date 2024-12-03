var userClickCount = 0;
const notificationAlert = new Audio(
  "https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/Sound/message-notification.mp3"
);
window.chatbot.chatbotTitle = "AI Chatbot";
window.chatbot.LLM = "Gemini";
window.chatbot.initialMessage = "Hello! How can i assist you today ?";
window.chatbot.brandImage =
  "https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle-thumbnail.png";
window.chatbot.switchAPI = false;

const listenEventChanges = function () {
  // Trigger action when windows is load
  window.addEventListener("load", function () {
    loadChatBotUI();
    loadListOfSuggestions();

    const chatBotMainBtnElement =
      document.getElementsByClassName("chatbot-main-btn");

    if (chatBotMainBtnElement.length == 0) return;

    chatBotMainBtnElement[0].classList.remove("display-none");
    chatBotMainBtnElement[0].classList.remove("animate__infinite");
    chatBotMainBtnElement[0].classList.remove("animate__slower");

    chatBotMainBtnElement[0].classList.add("animate__faster");
    chatBotMainBtnElement[0].classList.add("animate__slideInUp");

    setTimeout(() => {
      chatBotMainBtnElement[0].classList.add("animate__infinite");
      chatBotMainBtnElement[0].classList.add("animate__slower");

      chatBotMainBtnElement[0].classList.remove("animate__faster");
      chatBotMainBtnElement[0].classList.remove("animate__slideInUp");
    }, 2000);

    chatMessageSendBtnEnableDisable();
  });

  // Trigger action when document is click
  document.addEventListener("click", function () {
    triggerAlert();
  });
};

// load dependencies that required for chatbot
(function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";

  const animationcss =
    "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
  link.href = animationcss;

  document.head.appendChild(link);
  listenEventChanges();
})();

// function listenEventChanges() {}

function loadChatBotUI() {
  const chatbotContainer = document.getElementById("chatbot");

  if (!chatbotContainer) return;

  chatbotContainer.innerHTML = `
  <div
      onclick="openChatBotPanel()"
      class="chatbot-main-btn chatbot-header--logo cursor-pointer animate__animated animate__infinite animate__pulse animate__slower display-none"
    >
      <img
        src="${chatbot.brandImage}"
        alt="ai-chat-logo"
        width="100%"
        height="100%"
      />
      <div class="chatbot-online-status"></div>
      <div id="notification-count"></div>
    </div>

    <div
      class="chatbot-container animate__animated animate__slideInUp display-none"
    >
      <div class="chatbot-header">
        <div class="chatbot-row chatbot-align-item-center">
          <div class="chatbot-row chatbot-align-item-center">
            <div class="chatbot-header--logo">
              <img
                src="${chatbot.brandImage}"
                alt="ai-chat-logo"
                width="100%"
                height="100%"
              />
              <div class="chatbot-online-status"></div>
            </div>
            <p class="chatbot-header--text">${chatbot.chatbotTitle}</p>
          </div>
          <div class="cursor-pointer" onclick="hideChatBotPanle()">
            <svg
              fill="#ffffff"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <polygon
                    points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
			512,452.922 315.076,256 		"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div id="chatbot-body-panel" class="chatbot-body-panel">
        <div class="chatbox-message--thread">
          <div
            id="chatbox-message-history"
            class="chatbot-column chatbot-align-item-start"
          >
            <!--Chat messages-->
            <div class="chatbot-margin-bottom">
              <div class="chatbot-row chatbot-align-item-center">
                <div
                  class="chatbot-header--logo-small chatbot-margin-right-small"
                >
                  <img
                    src="${chatbot.brandImage}"
                    alt="ai-chat-logo"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>${chatbot.chatbotTitle}</div>
              </div>
              <div class="chatbot-message-panel">
                <p class="chatbot-paragraph chatbot-margin-0">
                  ${chatbot.initialMessage}
                </p>
              </div>
            </div>

          </div>
        </div>
        <div id="chatbot-suggestions" class="chatbot-column chatbot-align-item-center">
          <p>Ask something. Here are some suggestions</p>
         
        </div>
      </div>
      <div class="chatbot-text-area">
        <input
          id="chatbot-input"
          type="text"
          placeholder="Type your message here"
          class="chatbot-input"
        />

        <div
          id="chatbot-send-btn"
          class="chatbot-text-send cursor-pointer"
          onclick="sendMessage()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            xml:space="preserve"
            height="30px"
            width="30px"
          >
            <path
              fill="#d7d7d7"
              d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    `;
}

function hideChatBotPanle() {
  const chatBotMainBtnElement =
    document.getElementsByClassName("chatbot-main-btn");
  const chatbotPanelElement =
    document.getElementsByClassName("chatbot-container");

  chatbotPanelElement[0].classList?.remove("animate__slideInUp");
  chatBotMainBtnElement[0].classList?.remove("display-none");
  chatBotMainBtnElement[0].classList?.remove("animate__infinite");
  chatBotMainBtnElement[0].classList?.remove("animate__slower");

  chatbotPanelElement[0].classList?.add("animate__slideOutDown");
  chatbotPanelElement[0].classList?.add("display-none");

  chatBotMainBtnElement[0].classList?.add("animate__slideInUp");
  chatBotMainBtnElement[0].classList.add("animate__faster");

  setTimeout(() => {
    chatBotMainBtnElement[0].classList.remove("animate__faster");
    chatBotMainBtnElement[0].classList?.remove("animate__slideInUp");

    chatBotMainBtnElement[0].classList?.add("animate__infinite");
    chatBotMainBtnElement[0].classList.add("animate__slower");
  }, 3000);
}

function openChatBotPanel() {
  const chatBotMainBtnElement =
    document.getElementsByClassName("chatbot-main-btn");
  const chatbotPanelElement =
    document.getElementsByClassName("chatbot-container");

  chatbotPanelElement[0]?.classList.remove("animate__slideOutDown");
  chatbotPanelElement[0]?.classList.remove("display-none");

  chatbotPanelElement[0]?.classList.add("animate__slideInUp");

  chatBotMainBtnElement[0]?.classList.add("display-none");

  showNotificationCount(false);
}

function showNotificationCount(show = false) {
  const notificationCount = document.getElementById("notification-count");

  if (!notificationCount) return;

  if (show) {
    notificationCount.classList.add("chatbot-notification-count");
  } else {
    notificationCount.classList.remove("chatbot-notification-count");
  }
}

function triggerAlert() {
  if (userClickCount == 0) {
    showNotificationCount(true);

    const notificationSound = new Audio(
      "https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/Sound/message-notification.mp3"
    );

    notificationSound.play();
  }
  userClickCount = 1;
}

function chatMessageSendBtnEnableDisable() {
  const chatBotInputText = document.getElementById("chatbot-input");

  chatBotInputText.addEventListener("keyup", function (e) {
    const chatTextInputValue = e.target.value;
    const charCode = e.code;

    if (chatTextInputValue) {
      updateSendBtnStatus(true);

      if (charCode == "Enter" || e.keyCode === 13) {
        appendUserMessages(chatTextInputValue);
        e.target.value = null;
        updateSendBtnStatus(false);
      }
    } else {
      updateSendBtnStatus(false);
    }
  });
}

function updateSendBtnStatus(status = false) {
  const chatMessageSendBtn = document.getElementById("chatbot-send-btn");
  if (!chatMessageSendBtn) return;

  if (status) {
    const svgIconPath = chatMessageSendBtn.getElementsByTagName("path");
    svgIconPath[0].setAttribute("fill", "#343434");
  } else {
    const svgIconPath = chatMessageSendBtn.getElementsByTagName("path");
    svgIconPath[0].setAttribute("fill", "#d7d7d7");
  }
}

function sendMessage() {
  const chatBotInputText = document.getElementById("chatbot-input");

  if (chatBotInputText.value) {
    appendUserMessages(chatBotInputText.value);
    chatBotInputText.value = "";
    updateSendBtnStatus(false);
  }
}

function appendUserMessages(value) {
  const messageListBody = document.getElementById("chatbox-message-history");
  const messageElement = document.createElement("div");
  messageElement.className = "chatbot-margin-bottom chatbot-margin-left-auto";

  const el = `
              <div
                class="chatbot-row chatbot-align-item-center chatbot-justify-content-end"
              >
                <div
                  class="chatbot-header--logo-small chatbot-margin-right-small"
                >
                  <!--<img
                    src="${chatbot.brandImage}"
                    alt="ai-chat-logo"
                    width="100%"
                    height="100%"
                  />-->
                </div>
                <div>You</div>
              </div>
              <div class="chatbot-message-panel">
                <p class="chatbot-paragraph chatbot-margin-0">
                  ${value}
                </p>
              </div>
            `;

  messageElement.innerHTML = el;

  messageListBody.appendChild(messageElement);

  showTypingIndicator(true);
  scrollToBottom();

  generateAnswares(value.toString());
}

function appendAssistantMessage(value) {
  var chatbotCSS = `
    .chatbot-margin-bottom { margin-bottom: 1rem; }
    .chatbot-row { display: flex; flex-direction: row; width: 100%; }
    .chatbot-align-item-center { align-items: center; }
    .chatbot-header--logo-small { width: 1.2rem; }
    .chatbot-margin-right-small { margin-right: 0.3rem; }
    .chatbot-message-panel { background: #dedede; padding: 0.9rem; border-radius: 0.4rem; }
    .chatbot-paragraph { line-height: 1.3rem; }
    .chatbot-margin-0 { margin: 0; }
`;

// Create a <style> tag and append the CSS string to it
var style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = chatbotCSS; // For IE
} else {
    style.appendChild(document.createTextNode(chatbotCSS)); // For other browsers
}

// Append the <style> tag to the <head>
document.getElementsByTagName('head')[0].appendChild(style);
  const messageListBody = document.getElementById("chatbox-message-history");
  const messageElement = document.createElement("div");

  const el = `<div class="chatbot-margin-bottom ">
              <div class="chatbot-row chatbot-align-item-center ">
                <div
                  class="chatbot-header--logo-small chatbot-margin-right-small"
                >
                  <img
                    src="${chatbot.brandImage}"
                    alt="ai-chat-logo"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>${chatbot.chatbotTitle}</div>
              </div>
              <div class="chatbot-message-panel">
                <p class="chatbot-paragraph chatbot-margin-0">
                  ${value}
                </p>
              </div>
            </div>`;

  messageElement.innerHTML = el;

  messageListBody.appendChild(messageElement);

  playNotificationSound();

  scrollToBottom();
}

function scrollToBottom() {
  const messageBodyPanel = document.getElementById("chatbot-body-panel");

  messageBodyPanel.scrollTop = messageBodyPanel.scrollHeight;
}

function showTypingIndicator(show = false) {
  const messageListBody = document.getElementById("chatbox-message-history");

  if (show && messageListBody) {
    const messageElement = document.createElement("div");
    messageElement.setAttribute("id", "typeIndicator");
    messageElement.classList.add("chatbot-margin-bottom");

    const el = `
              <div class="chatbot-row chatbot-align-item-center ">
                <div
                  class="chatbot-header--logo-small chatbot-margin-right-small"
                >
                  <img
                    src="${chatbot.brandImage}"
                    alt="ai-chat-logo"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>Chatbot</div>
              </div>
              <div class="ticontainer">
                    <div class="tiblock">
                      <div class="tidot"></div>
                      <div class="tidot"></div>
                      <div class="tidot"></div>
                    </div>
                  </div>
            `;

    messageElement.innerHTML = el;

    messageListBody.appendChild(messageElement);
  } else {
    const typeIndicator = document.getElementById("typeIndicator");
    typeIndicator.remove();
  }
}

function playNotificationSound() {
  notificationAlert.play();
}

async function generateAnswares(userQuestion) {
  try {
    let chatAPIUrl = `https://chit-chat.fun/api/v1/QnARetrieval?key=${chatbot.apiKey}`;

    // if you want to switch to different API url then use this
    if (chatbot.switchAPI) {
      chatAPIUrl = `https://your-hosted-domain/api/v1/organization/generateCompletion?key=${chatbot.apiKey}`;
    }

    const payloadBody = {
      prompt: userQuestion,
      llm: chatbot.LLM
    };

    const response = await fetch(chatAPIUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadBody),
    });

    const jsonData = await response.json();

    appendAssistantMessage(jsonData.message);
    showTypingIndicator(false);
  } catch (e) {
    console.error(e);

    appendAssistantMessage("OOPs! something went wrong");
    showTypingIndicator(false);
  }
}

function loadListOfSuggestions() {
  const chatbotSuggestionElement = document.getElementById(
    "chatbot-suggestions"
  );

  if (chatbotSuggestionElement && chatbot.suggestions) {
    const data = chatbot.suggestions;

    for (let i = 0; i < data.length; i++) {
      const chatbotSuggestionsLabelEl = document.createElement("div");
      chatbotSuggestionsLabelEl.classList.add("chatbot-suggestion-label");

      chatbotSuggestionsLabelEl.innerHTML += data[i];
      chatbotSuggestionsLabelEl.addEventListener("click", function () {
        console.log("Im Clickable " + data[i]);
        appendUserMessages(data[i]);
        chatbotSuggestionElement.style.display = "none";
      });

      chatbotSuggestionElement.appendChild(chatbotSuggestionsLabelEl);
    }
  } else {
    chatbotSuggestionElement.style.display = "none";
  }
}
function setChatBotConfiguration({
  apiKey,
  chatbotTitle,
  LLM,
  initialMessage,
  brandImage,
  suggestions,
  switchAPI,
}) {
  window.chatbot.apiKey = apiKey || chatbot.apiKey;
  window.chatbot.chatbotTitle = chatbotTitle || chatbot.chatbotTitle;
  window.chatbot.LLM = LLM || chatbot.LLM;
  window.chatbot.initialMessage = initialMessage || chatbot.initialMessage;
  window.chatbot.brandImage = brandImage || chatbot.brandImage;
  window.chatbot.suggestions = suggestions || null;
  window.chatbot.switchAPI = switchAPI || chatbot.switchAPI;
}
window.chatbot.setChatBotConfiguration = setChatBotConfiguration;
window.openChatBotPanel = openChatBotPanel;
window.hideChatBotPanle = hideChatBotPanle;
window.sendMessage = sendMessage;