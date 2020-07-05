
const sendBtn = document.querySelector(".send-button");
const contactBtn = document.querySelector(".contact-button");
sendBtn.addEventListener("click", sendForm);
contactBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 2300,
        behavior: "smooth"
    });
});

//Auto clicks a link when it reaches a certain pixel
function autoClick(){
    let phoneApp = document.querySelector(".phone-app");
    phoneApp.click();
};
//Media Queries
const media = matchMedia("(max-width: 375px)");
media.addEventListener("change", ()=>{
    autoClick();
});
const media1 = matchMedia("(max-width: 411px)");
media1.addEventListener("change", ()=>{
    autoClick();
});
const media2 = matchMedia("(max-width: 414px)");
media2.addEventListener("change", ()=>{
    autoClick();
});
const media3 = matchMedia("(max-width: 768px)");
media3.addEventListener("change", ()=>{
    autoClick();
});
const media4 = matchMedia("(max-width: 1024px)");
media4.addEventListener("change", ()=>{
    autoClick();
});


function sendForm() {
    console.log(sendBtn);

    let name = document.querySelector("#flex-item-name").value;
    let email = document.querySelector("#flex-item-email").value;
    let subject = document.querySelector("#subject-input-field").value;
    let message = document.querySelector("#message-contact").value;
    let errorMessage = document.querySelector("#error-message");
    let text;
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);

    if (name.trim() === "") {
        console.log("no data");
        text = "Please enter a name";
    }
    else if (email.trim() === "") {
        console.log("no data");
        text = "Please enter an email";
    }
    else if (subject.trim() === "") {
        console.log("no data");
        text = "Please enter a subject";
    }
    else if (message.trim() === "") {
        console.log("no data");
        text = "Please enter a message";
    }
    errorMessage.innerHTML = text;
    sendBackend(name,email,subject,message);
}

async function sendBackend(name, email, subject, message) {
    let response = await fetch('https://2p6cndq976.execute-api.us-west-1.amazonaws.com/dev/contact', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        }) // body data type must match "Content-Type" header
    })
    console.log(response);
}

