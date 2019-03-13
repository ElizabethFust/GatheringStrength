// Want to create a function that will cause the circle to increase in opacity, as though it is gathering strength.  And do it over and over for a period of time.  Try setInterval() method??

// $('#circle').hide().fadeIn(3000);

// $('#circle').hide().fadeIn()
//     .animate({height: '150px', opacity: '1'}, "slow")
//     .animate({width: '150px',
// opacity: '1'}, "slow");


// $('#content').hide().fadeIn(function(){ 
//     $('#content').animate({
//         left: "80px"
//     }, 500); 
// },1500).css('left' ,'0');



// $('.crescentSmall').hide()
//     .animate({opacity: ".8"}, "slow")
//     .animate({opacity: ".1"}, "slow");

// $('#circle').animate({
//     opacity: 1,
// }, 5000,);


// $('.crescentSmall').hide().fadeIn(800).delay(1000).fadeOut(500);

// $('.crescentMed').hide().delay(1000).fadeIn(800).delay(1000).fadeOut(500);

// $('.crescentLarge').hide().delay(1500).fadeIn(800).delay(1000).fadeOut(500);

// $('#circle').hide().fadeIn(4000).fadeOut(2000).fadeIn(2000).fadeOut(2000).fadeIn(2000);

let submitbutton = document.getElementById('submitbutton');
let input = document.getElementsByTagName('cntinputfield');


submitbutton.addEventListener('click', function () {
    alert('Thank you for contacting us');
});
    
    
    // for (let i=0; i < input.length; i += 1) {
    // if (input === "") {
    //     alert('Please provide email address');
    // }
    // } else {   
    //     alert("Thank you firstname for submitting your information");
    // }
    // }); 