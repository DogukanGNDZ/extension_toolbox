let blocked_url =[]
chrome.storage.sync.get("blocked_url",(data) =>{
    blocked_url = data.blocked_url
    console.log(blocked_url)
})
chrome.storage.sync.get("THY_SHALL_NOT_WORK",(data) =>{
    if (data.THY_SHALL_NOT_WORK){
        for (let i=0 ; i<blocked_url.length; i++) {
            if (window.location.href.match(blocked_url[i]) != null) {
                alert("THY SHALL NOT WORK")
                window.location.href = "https://www.google.fr/"
            }
        }
    }
})