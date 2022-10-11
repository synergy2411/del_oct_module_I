var username = document.querySelector("#username")
var password = document.getElementById("password")
var btnSubmit = document.querySelector("#btnSubmit")
var errorMessageParagraph = document.createElement("p");

username.addEventListener("blur", function(){
    if(username.value.trim() === ""){
        errorMessageParagraph.innerText = "Username is mandatory field";
    }else if(!username.value.includes("@")){
        errorMessageParagraph.innerText = "Username must have @ sign";
    }else{
        errorMessageParagraph.innerText = "";
    }
    document.body.appendChild(errorMessageParagraph)
})

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    var paragraphEl = document.createElement("p")
    paragraphEl.innerText = "Username : " + username.value + "\nPassword : " + password.value;
    document.body.appendChild(paragraphEl)
})