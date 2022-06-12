
(function(){

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();

//show alert
function showAlert() { 

    let FirstName = document.getElementById("fName");
    let LastName = document.getElementById("lName");
    let Email = document.getElementById("email");
    alert( FirstName.value + " " + LastName.value + " " + Email.value);

}
