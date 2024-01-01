function whatsapp() {
    // Retrieve user input
    var name = document.getElementById("contact-name").value;
    var email = document.getElementById("contact-email").value;
    var subject = document.getElementById("contact-subject").value;
    var message = document.getElementById("contact-message").value;

    // Validate email using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
        alert("Please enter your name.");
        document.getElementById("contact-name").focus();
        return;
    }
    if (!email) {
        alert("Please enter your email address.");
        document.getElementById("contact-email").focus();
        return;
    } else if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        document.getElementById("contact-email").focus();
        return;
    }
    if (!subject) {
        alert("Please enter the subject.");
        document.getElementById("contact-subject").focus();
        return;
    }
    if (!message) {
        alert("Please enter your message.");
        document.getElementById("contact-message").focus();
        return;
    }

    // Construct WhatsApp message URL
    var url =
        "https://wa.me/+917736820352?text=" +
        "name: " + name + "%0a" +
        "email: " + email + "%0a" +
        "subject: " + subject + "%0a" +
        "message: " + message;

    // Open WhatsApp URL in a new window or tab
    window.open(url, "_blank").focus();

    // Clear form fields
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-subject").value = "";
    document.getElementById("contact-message").value = "";
}
