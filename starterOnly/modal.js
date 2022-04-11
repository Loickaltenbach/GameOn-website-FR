function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Function to validate Form before submitting
function validate() {
  if( document.myForm.Surname.value == "" ) {
     alert( "Please provide your surname!" );
     document.myForm.Surname.focus() ;
     return false;
  }
  if( document.myForm.Name.value == "" ) {
    alert( "Please provide your name!" );
    document.myForm.Name.focus() ;
    return false;
  }
  if( document.myForm.Email.value == "" ) {
     alert( "Please provide your Email!" );
     document.myForm.Email.focus() ;
     return false;
  }
  if( document.myForm.Date.value == "" ) {
    alert( "Please provide your birthday!" );
    document.myForm.Date.focus() ;
    return false;
  }
  if( document.myForm.Number.value == "" ) {
    alert( "Please provide number of tournaments you already participated at!" );
    document.myForm.Number.focus() ;
    return false;
  }
  if( document.myForm.Radio.value == "" ) {
    alert( "Please provide tournament you want to particpate!" );
    document.myForm.Radio.focus() ;
    return false;
  }
  if( document.myForm.Check.value == "" ) {
    alert( "Please accept our terms of use!" );
    document.myForm.Check.focus() ;
    return false;
  }
  return( true );
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCross = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCross.forEach((close) => close.addEventListener("click,", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


