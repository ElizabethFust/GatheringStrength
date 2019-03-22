
let submitbutton = document.getElementById('submitbutton');
let firstname = document.getElementById('cntfirstname');
let lastname = document.getElementById('cntlastname');
let email = document.getElementById('cntemail');


submitbutton.addEventListener('click', function (event) {
    event.preventDefault();
      if (firstname.value === ""){
            alert("Please enter your first name");
      }
      else if (lastname.value ==="") {
            alert("Please enter your last name");
      }
      else if (email.value ==="") {
            alert("Please enter your email address");
      }
      else    
        alert('Thank you for contacting us ' + firstname.value + ".");
    });
    


$('#alertbutton').click(function(event) {
    event.preventDefault();
    $('.alertform').toggle(800);
   });

 

// let input = getElementByTagName('cntinputfield[i]');
// let submitbutton = document.getElementById('submitbutton');
// let firstname = document.getElementById('cntfirstname');


// submitbutton.addEventListener('click', function (event) {
//   event.preventDefault();
//     for (let i=0; i <= input.length; i += 1) {
//     if (input.value === "") {
//         alert('Please provide required information');
//       } else {   
//         alert("Thank you for submitting your information, " + firstname.value);
//       }
//     }
//     }); 