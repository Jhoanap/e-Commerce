const submitButton = document.getElementById("button");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const form = document.getElementById("form");
const name_error = document.getElementById('name_erorr');


submitButton.addEventListener('click', function(){
    console.log(nameInput.value , emailInput.value, messageInput.value);
})
form.addEventListener('submit', (e) => {
   let messages = []
    if (nameInput.value =='' || nameInput.value == null){
        name_error.innerHTML ="Name is required";
    }
    if (emailInput.value =='' || emailInput.value == null){
        messageInput.push('Please enter your email address')
    }
    if (form.value =='' || form.value == null){
        messageInput.push('Please enter a message')
    }


})

