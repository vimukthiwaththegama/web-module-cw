document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Show success message
    document.getElementById("feedback-modal-container").style.display = "block";

    // Collect form data
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let firstTime = document.querySelector("input[name='firstTime']:checked").value;
    let findMethod = document.getElementById("findMethod").value;
    let recommend = document.querySelector("input[name='recommend']:checked").value;
    
    // Get additional form data that might be available
    let drawbacks = document.getElementById("drawbacks").value || "Not provided";
    let navigate = document.querySelector("input[name='navigate']:checked")?.value || "Not selected";
    
    // Build email body
    let formData = `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nFirst Time: ${firstTime}\nFind Method: ${findMethod}\nRecommend: ${recommend}\nDrawbacks: ${drawbacks}\nEasy to Navigate: ${navigate}`;
    
    // Create mailto URL
    let mailtoUrl = `mailto:ashini.vidana@gmail.com?subject=Feedback Submission&body=${encodeURIComponent(formData)}`;


    // Delay the mailto redirect to allow modal to be seen
    setTimeout(function() {
        window.location.href = mailtoUrl;
    }, 2000); // 2 second delay before opening email client

    alert("Submission Successful!!  Thank You for Your Valuable Time.")
});

// Close modal
document.getElementById("feedback-close-icon").addEventListener("click", function() {
    document.getElementById("feedback-modal-container").style.display = "none";
});

function setRating(rating) {
    let emojis = document.querySelectorAll(".emoji");
    emojis.forEach((emoji, index) => {
        emoji.classList.remove("selected");
        if (index === rating - 1) {
            emoji.classList.add("selected");
        }
    });
}

function updateCharCount(textareaId, counterId, maxLength) {
      let textarea = document.getElementById(textareaId);
      let counter = document.getElementById(counterId);
      counter.textContent = maxLength - textarea.value.length;
}