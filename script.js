let buttons = document.querySelectorAll(".ratingButton")
let sendReviewButton = document.querySelector(".srv")
let outerContainerElement = document.querySelector(".outerContainer")
let selectedRating = '';
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        buttons.forEach((btn)=>{
            btn.classList.remove("active");
            btn.classList.add("ratingButton");
        })
        button.classList.add("active");
        button.classList.remove("ratingButton");
        selectedRating = button.innerText;
        sendReviewButton.disabled = false;
    })
})
sendReviewButton.addEventListener("click",()=>{
    outerContainerElement.innerHTML = `<div class="text-center d-flex flex-column gap-2">
      <h5 class="mainColor">Thank you!</h5>
      <h5>Feedback: ${selectedRating}</h5>
      <h5>We appreciate you taking the time to help us improve.</h5>
    </div>`
})
