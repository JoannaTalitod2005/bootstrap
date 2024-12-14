(function () {
  emailjs.init("5OAIPyAkkCFbj8W6k");  
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_fce1boh", "template_6qjtyp8", this).then(
    function () {
      document.querySelector(".response").style.display = "block";
      document.querySelector(".response").textContent = "Thank you for your message!";
      setTimeout(() => {
        document.querySelector(".response").style.display = "none";
      }, 3000);
    },
    function (error) {
      alert("Failed to send the message: " + JSON.stringify(error));
    }
  );
});