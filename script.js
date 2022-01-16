var queryS = '[src="https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1"]'

modChats = document.querySelectorAll(queryS)

for(let i = 0; i < modChats.length; i++) {
    modChat = modChats.item(i).parentElement.parentElement.parentElement.parentElement.innerHTML
    alert(modChat)
}