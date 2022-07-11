const filterEmailFriend = (chats, email) => {
    return chats.filter(chat => chat.users.includes(email))
}

export default filterEmailFriend;