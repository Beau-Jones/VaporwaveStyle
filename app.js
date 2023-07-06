#!/usr/bin/node

let emailButton = document.getElementById("emailButton");

function sendEmail() {
  let emailAddress = prompt("What is your email address?");
  Email.send({
    Host : "smtp.mailtrap.io",
    Username : "beautyler96@gmail.com",
    Password : "03FB25E3927C26163B43C64319315C51C39F",
    To : `${emailAddress}`,
    From : "beautyler96@gmail.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>COOL</strong><br></br><em>Italic</em></html>",
    Attachments: [{
      name : "nintendo_vw.jpg",
      path : "/VaporwaveStyle/nintendo_vw.jpg"
    }]
  }).then(
    message => alert("Message sent.")
  );
}