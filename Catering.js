

function success(){
    
    alert('Our Customer Service will call you under 24 hours.Thankyou for your patience!')
}


function success2(){
    prompt('Save Changes?')
    alert('Our Customer Service will call you under 24 hours.Thankyou for your patience!')
}


Signin= document.getElementById("Signin");
Signin.addEventListener("click",success);

contact= document.getElementById("contact");
contact.addEventListener("click",success2);