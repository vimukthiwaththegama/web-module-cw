document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Collect form data
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let firstTime = document.querySelector("input[name='firstTime']:checked").value;
    let findMethod = document.getElementById("findMethod").value;
    let recommend = document.querySelector("input[name='recommend']:checked").value;

    let formData = `Full Name: ${fullName}\nEmail: ${email}\nFirst Time: ${firstTime}\nFind Method: ${findMethod}\nRecommend: ${recommend}`;

    // Send email using mailto
    window.location.href = `mailto:ashini.vidana@gmail.com?subject=Feedback Submission&body=${encodeURIComponent(formData)}`;

    // Show success message
    document.getElementById("feedback-modal-container").style.display = "block";
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
