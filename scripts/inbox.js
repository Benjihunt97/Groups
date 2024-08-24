// INBOX SCRIPT FILE
const defaultInboxChats = [
    {
        img: 'https://randomuser.me/api/portraits/men/46.jpg',
        name: 'John Doe',
        msg: 'Hey there! How are you doing today?',
        newChat: true
    },
    {
        img: 'https://randomuser.me/api/portraits/women/68.jpg',
        name: 'Jane Smith',
        msg: 'Did you get the documents I sent over?',
        newChat: false
    },
    {
        img: 'https://randomuser.me/api/portraits/men/14.jpg',
        name: 'Michael Johnson',
        msg: 'Looking forward to our meeting next week!',
        newChat: true
    },
    {
        img: 'https://randomuser.me/api/portraits/women/22.jpg',
        name: 'Emily Davis',
        msg: 'Can we reschedule our call to tomorrow?',
        newChat: false
    },
    {
        img: 'https://randomuser.me/api/portraits/men/85.jpg',
        name: 'David Brown',
        msg: 'Just wanted to check in on the project status.',
        newChat: false
    },
    {
        img: 'https://randomuser.me/api/portraits/women/33.jpg',
        name: 'Olivia Wilson',
        msg: 'I’m excited about the new opportunities we discussed!',
        newChat: true
    }
];

const inbox = document.getElementById("inbox-chats");

const inboxChatItem = (img, name, msg, newChat) => {
    return `
    <div class="inbox-chat-item">
        <div class="new-chat-indicator ${newChat ? '' : 'hidden'}"></div>
        <img src="${img}" alt="">
        <div>
            <h3>${name}</h3>
            <p>${msg}</p>
        </div>

        <div class="edit-options">
            <button class="delete-chat">
                <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" stroke-width="0" fill="#ef4444" />
                    <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" stroke-width="0" fill="#ef4444" />
                </svg>
            </button>
            <button class="close-chat-options">
                <svg  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
        </div>
        <button class="edit-inbox-chat-item">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF78" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
        </button>
    </div>
    `;
}

defaultInboxChats.sort((a, b) => b.newChat - a.newChat);

let inboxHTML = '';
defaultInboxChats.forEach(chat => {
    inboxHTML += inboxChatItem(chat.img, chat.name, chat.msg, chat.newChat);
});
inbox.innerHTML = inboxHTML;

const editInboxChats = document.querySelectorAll(".edit-inbox-chat-item");
editInboxChats.forEach(edit => {
    edit.addEventListener("click", () => {
        const options = edit.parentElement.querySelector(".edit-options");
        options.classList.add("show-options");
    });
});

const deleteChat = document.querySelectorAll(".delete-chat");
const closeChatOptions = document.querySelectorAll(".close-chat-options");


closeChatOptions.forEach(close => {
    close.addEventListener("click", () => {
        close.parentElement.classList.remove("show-options");
    });
})

deleteChat.forEach(del => {
    del.addEventListener("click", () => {
        del.parentElement.parentElement.remove();
    });
});
