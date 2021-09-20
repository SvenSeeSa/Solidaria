var coll = document.querySelectorAll('.accordion_button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion_button--active');

        if(button.classList.contains('accordion_button--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else{
            accordionContent.style.maxHeight = 0;
        }
    });
});

//---------------------------------------------modal1-----------------------------------------------------------------//
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementById("close1");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

//---------------------------------------------modal2-----------------------------------------------------------------//
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementById("close2");

// When the user clicks on the button, open the modal2
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span2> (x), close the modal2
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal2, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//---------------------------------------------modal3-----------------------------------------------------------------//
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementById("close3");

// When the user clicks on the button, open the modal3
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span3> (x), close the modal3
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal3, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

//---------------------------------------------modal4-----------------------------------------------------------------//
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var span4 = document.getElementById("close4");

// When the user clicks on the button, open the modal4
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span4> (x), close the modal4
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal4, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

//---------------------------------------------modal5-----------------------------------------------------------------//
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
var span5 = document.getElementById("close5");

// When the user clicks on the button, open the modal5
btn5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span5> (x), close the modal5
span5.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal5, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

//---------------------------------------------modal6-----------------------------------------------------------------//
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
var span6 = document.getElementById("close6");

// When the user clicks on the button, open the modal6
btn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span6> (x), close the modal6
span6.onclick = function() {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal6, close it
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}