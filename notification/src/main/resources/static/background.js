var options = {
    type: "basic",
    title: "title11",
    message: "message222",
    iconUrl: "icon.png"
};

chrome.notifications.create(options,callback);

console.log('popup App')

function callback() {
    console.log('push~!!');
}
