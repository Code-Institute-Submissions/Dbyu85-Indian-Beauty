function sendMailContact(contacForm){
        emailjs.send("gmail", "Indian Beauty", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "help_request": contactForm.projectsummary.value
    })
    
}