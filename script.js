
let mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  let emailButton = document.getElementById("emailButton");

  // Sends email from my email, preferably the prompted email.
  // Doesn't work because website is not a registered domain.
  // Verify domain and change SPF settings to be functional.

  // Clientside email using smtpjs.com

  function sendEmail() {
    let emailAddress = prompt("What is your email address?");
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "beautyler96@gmail.com",
      Password : "03FB25E3927C26163B43C64319315C51C39F",
      To : "beautyler96@gmail.com",
      From : "beautyler96@gmail.com",
      Subject : "Test email",
      Body : "<html><h2>Header</h2><strong>COOL</strong><br></br><em>Italic</em></html>",
      Attachments: [{
        name : "nintendo_vw.jpg",
        path : "https://www.pngitem.com/pimgs/m/21-214771_nintendo-64-vaporwave-hd-png-download.png"
      }]
    }).then(
      message => alert("Message sent.")
    );
  }

  