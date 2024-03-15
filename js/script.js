

function validateContactForm() {
    let fname = document.getElementById('fName').value;
    let lname = document.getElementById('lName').value;
    let email = document.getElementById('inputEmail').value;
    let phoneNum = document.getElementById('phoneNumber').value;


    // The required attribute in the input tags in the html file ensures that 
    // required fields are filled
    // I am adding additional js to give an alert when they are not filled
    
    if (fname == "" || lname == "") {
        window.alert("First Name and Last Name must be filled out!");
        return false;
    }

    else
    if (email == "" || !email.includes('@')) {
        window.alert("Please enter a valid e-mail address!");
        return false;
    }

    else
    if (phoneNum == "" || phoneNum <10) {
        window.alert("Please enter a valid Phone Number!");
        return false;
    }
    else {
        window.alert("We have got your Information and our agent will reach you in 3 - 5 days!");
    }
}