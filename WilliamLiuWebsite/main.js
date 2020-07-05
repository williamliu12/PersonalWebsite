
const sendBtn = document.querySelector(".send-button");
const contactBtn = document.querySelector("#contact-button");
sendBtn.addEventListener("click", sendForm);
contactBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 2000,
        left: 1000,
        behavior: "smooth"
    });
});


function sendForm() {
    console.log(sendBtn);
    let name = document.querySelector("#name-input-field").value;
    let email = document.querySelector("#email-input-field").value;
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

