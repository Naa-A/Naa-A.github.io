let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
    
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You've taken the first steps to becoming a Hot Sauce Master!</p>

        <p class="fine-print">Finalise and reserve your spot with the link sent to ${userEmailAddress}</p>
        <p class="fine-print">We'll never share your information without your permission, pinky promise </p>
    `
    let ourMainContent = document.getElementById("Main-Content")
    ourMainContent.innerHTML = updatedHtmlContent
})


  