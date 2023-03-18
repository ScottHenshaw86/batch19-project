//TODO: Should make functions more flexible in order to be able to leave some of the elements out if we do not need them
//, partially implemented
const threadList = [];
class MessageThread {
  constructor(parent, child) {
    this.parent = parent;
    this.child = child;
  }
}

function chatBoxExpand(toExpand) {
  toExpand.classList.toggle("expand");
}

function loadMessages(thread) {
  let xhr = new XMLHttpRequest();
  var form = new FormData();
  form.append("conversationId", thread.parent.getAttribute("data-thread"));
  form.append("userId", userId);
  var data = {
    conversationId: thread.parent.getAttribute("data-thread"),
    userId: userId,
  };
  xhr.onload = () => {};
  xhr.open(
    "POST",
    "http://localhost/sites/batch19-project/index.php?action=getChatMessages",
    false
  );
  xhr.send(form);
  return xhr.response;
}
function createChatIcons(card) {
  let messagingProfileIco = document.createElement("div");
  messagingProfileIco.className = "messagingProfileIco";
  let messagingProfileImg = document.createElement("img");
  messagingProfileImg.className = "messagingProfileImg";
  let userImg = card.firstElementChild.firstElementChild.getAttribute("src");
  messagingProfileImg.setAttribute("src", userImg);
  messagingProfileIco.appendChild(messagingProfileImg);
  return messagingProfileIco;
}
function createChatboxHead(card, thread, messagingProfileIco) {
  let newChatboxHead = document.createElement("div");
  newChatboxHead.className = "chatboxHead";
  let newChatUserName = document.createElement("strong");
  let newChatUserNameContainer = document.createElement("p");
  newChatUserNameContainer.appendChild(newChatUserName);
  let userName =
    card.firstElementChild.nextElementSibling.firstElementChild.textContent;
  newChatUserName.textContent = userName;
  newChatboxHead.appendChild(messagingProfileIco);
  newChatboxHead.appendChild(newChatUserNameContainer);

  return newChatboxHead;
}
function createChatboxTitle() {
  let chatBoxTitle = document.createElement("div");
  chatBoxTitle.classList = "chatBoxTitle";
  return chatBoxTitle;
}
function createChatboxActions() {
  let chatBoxActions = document.createElement("div");
  chatBoxActions.className = "chatBoxActions";
  let icon1 = document.createElement("i");
  icon1.className = "fa-solid fa-xmark";
  icon1.addEventListener("click", () => {
    thread.child.remove();
    thread.child = null;
    console.log("testtt");
  });
  chatBoxActions.appendChild(icon1);

  return chatBoxActions;
}
function createChatboxInput(thread, messageContainer) {
  let inputmessage = document.createElement("input");
  inputmessage.className = "messageInput";
  inputmessage.name = "msg";
  let submitBox = document.createElement("i");
  submitBox.className = "fa-solid fa-paper-plane";
  submitBox.type = "submit";
  submitBox.value = "send";
  let messageForm = document.createElement("form");
  messageForm.appendChild(inputmessage);
  messageForm.appendChild(submitBox);
  // Submit message event
  submitBox.addEventListener("click", (e) => {
    let xhr = new XMLHttpRequest();
    var form = new FormData();
    form.append("message", inputmessage.value);
    form.append("conversationId", thread.parent.getAttribute("data-thread"));
    form.append("senderId", userId);

    var data = {
      conversationId: thread.parent.getAttribute("data-thread"),
      userId: userId,
    };
    xhr.onload = () => {
      response = loadMessages(thread);
      messageContainer.innerHTML = response;
    };
    xhr.open(
      "POST",
      "http://localhost/sites/batch19-project/index.php?action=submitMessage"
    );
    xhr.send(form);
    e.preventDefault();
  });

  return messageForm;
}
function createChatboxContainer(thread) {
  let messageContainer = document.createElement("div");
  messageContainer.className = "messageContainer";
  let response = loadMessages(thread);
  messageContainer.innerHTML = response;
  return messageContainer;
}
function createformMessageContainer(messageContainer, messageForm) {
  let chatboxElementWrapper = document.createElement("div");
  chatboxElementWrapper.classList = "expandableWrapper";
  chatboxElementWrapper.appendChild(messageContainer);
  chatboxElementWrapper.appendChild(messageForm);
  return chatboxElementWrapper;
}
function appendElements(child1, child2, child3, child4, newChat, parentElem) {
  console.log(typeof child3);
  child1 ? newChat.appendChild(child1) : "";
  child2 ? newChat.appendChild(child2) : "";
  child3 ? newChat.appendChild(child3) : "";
  child4 ? newChat.appendChild(child4) : "";
  console.log(parentElem);
  console.log(newChat);
  parentElem.prepend(newChat);
}
