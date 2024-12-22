const subBtn = document.querySelector(".searchbar");
const inputBox= document.querySelector(".username-inputbox")

let username = '';
let url = "https://api.github.com/users/" + username;

function displayResult(result) {
    document.querySelector(".resultbox").style.display = "flex";
    document.querySelector(".avatarimg").setAttribute("src", result.avatar_url);
    document.querySelector(".name").innerHTML = "Name : " + result.name;
    document.querySelector(".bio").innerHTML = "Bio : " + result.bio;
}

inputBox.addEventListener("input", function(e) {
    console.log(e.target.value);
    username = e.target.value;
    url = "https://api.github.com/users/" + username ;
})

subBtn.addEventListener("submit", async function(e){
    e.preventDefault();

    if(username = ''){
        window.alert("Please Enter a user name in the input box");
        return;
    }    


    console.log(url);

    try {
        const response = await fetch(url);
        if (!response.ok) {
          console.log("error");
        }
    
        const result = await response.json();

        console.log(result);
        displayResult(result);
    }
    catch (error) {
        console.error(error.message);
    }


});