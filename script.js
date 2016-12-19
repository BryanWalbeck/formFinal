/*exported validate*/
/*exported currentField*/
var errorMessage='';
var success='';
var errorText='Please Enter A Valid ';

function validate() {
	"use strict";
	//Check "@" and "." Values for Email Found at:
	//"http://www.w3schools.com/js/tryit.asp?filename=tryjs_form_validate_email"
	//indexOf("@"); 
	//lastIndexOf(".")
	
	//Values for if conditions
	var emailValue=document.contact.email.value;
	var atpos=emailValue.indexOf("@"); //everything prior
	var dotpos=emailValue.lastIndexOf("."); //everything following
	var psValue=document.contact.psword.value;
	var firstValue=document.contact.firstName.value;
	var lastValue=document.contact.lastName.value;
	var streetValue=document.contact.addressStreet.value;
	var cityValue=document.contact.addressCity.value;
	var stateValue=document.contact.state.value;
	var zipValue=document.contact.addressZip.value;
	var productValue=document.contact.productType.value;
	var agreeTermsCheck=document.getElementById('agreeToTerms').checked;

	if (emailValue.length<2){
		errorMessage=errorText + 'Email'; 
		errorMessage+='\n\nEmail Should Be More Than Two Characters';
		document.contact.email.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	//must have 1 character before "@"
	//@ + 1 character must come before "." 
	//must have 2 characters following "."
	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailValue.length){
		errorMessage=errorText + 'Email';
		errorMessage+='\n\nEmail Should Include "@" and "." Characters';
		document.contact.email.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else if (psValue.length<8){
		errorMessage=errorText + 'Password'; 
		errorMessage+='\n\nPassword Should Be More Than 8 Characters';
		document.contact.psword.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else if (firstValue.length<2){
		errorMessage=errorText + 'First Name'; 
		errorMessage+='\n\nFirst Name Should Be More Than Two Letters';
		document.contact.firstName.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else if (lastValue.length<2){
		errorMessage=errorText + 'Last Name'; 
		errorMessage+='\n\nLast Name Should Be More Than Two Letters';
		document.contact.lastName.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else if (streetValue.length<2){
		errorMessage=errorText + 'Address'; 
		errorMessage+='\n\nAddress Should Be More Than Two Characters';
		document.contact.addressStreet.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else if (cityValue.length<2){
		errorMessage=errorText + 'City';
		errorMessage+='\n\nCity Should Be More Than Two Letters';
		document.contact.addressCity.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else if (stateValue===''){
		errorMessage='Please Select A State';
		document.contact.addressState.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else if (isNaN(zipValue)){
		errorMessage=errorText + 'Zip Code';
		errorMessage+='\n\nZip Code Should Be A Number';
		document.contact.addressZip.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else if (zipValue.length!==5){
		errorMessage=errorText + 'Zip Code'; 
		errorMessage+='\n\nZip Code Should Be Five Numbers';
		document.contact.addressZip.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else if (productValue===''){
		errorMessage='Please Select A Product';
		alert(errorMessage);
	}
	else if (agreeTermsCheck===false){
		errorMessage='Please Select Agree To Terms To Submit Return Claim';
		document.contact.agreeToTerms.style.background='rgba(255, 0, 0, .3)';
		alert(errorMessage);
	}
	else{
		success='Your Return Claim Has Been Submitted';
		alert(success);
	}
}

/*http://stackoverflow.com/questions/497094/how-do-i-find-out-which-dom-element-has-the-focus*/
//Used this link to find out about document.activeElement vs typing out document.getElementByID...
function currentField(){
	"use strict";
	if(document.activeElement.placeholder==='Email'|| 
	document.activeElement.placeholder==='First Name'|| 
	document.activeElement.placeholder==='Last Name'||
	document.activeElement.placeholder==='Address'||
	document.activeElement.placeholder==='City' ||
	document.activeElement.placeholder==='12345'){
		document.activeElement.placeholder='';
	}
}