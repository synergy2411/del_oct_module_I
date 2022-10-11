var username = document.querySelector("#username")
var password = document.getElementById("password")
var btnSubmit = document.querySelector("#btnSubmit")
var errorMessageParagraph = document.createElement("p");

var courses = document.getElementById("courses")
var emotions = document.getElementsByClassName("emotions")

// var buttons = document.getElementsByTagName("button")

// buttons[0].addEventListener

username.addEventListener("blur", function(){
    if(username.value.trim() === ""){
        username.classList.add("invalid")
        errorMessageParagraph.innerText = "Username is mandatory field";
    }else if(!username.value.includes("@")){
        username.classList.add("invalid")
        errorMessageParagraph.innerText = "Username must have @ sign";
    }else{
        username.classList.remove("invalid")
        username.classList.add("valid")
        errorMessageParagraph.innerText = "";
    }
    document.body.appendChild(errorMessageParagraph)
})

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    var resultArray = [];
    for(var i =0; i< emotions.length; i++){
        if(emotions[i].checked){
            resultArray.push(emotions[i].name)
        }
    }
    console.log(resultArray)
    var paragraphEl = document.createElement("p")
    paragraphEl.innerText = "Username : " + username.value + "\nPassword : " + password.value;
    document.body.appendChild(paragraphEl)
})