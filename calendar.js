
let now = new Date();
now.setMinutes(now.getMinutes() + 30); // timestamp
now = new Date(now); // Date object
console.log(now);

let minutesToAdd=30;
let currentDate = new Date();
let futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);

console.log(futureDate);

function submitRowAsForm(idRow) {
    form = document.createElement("form"); // CREATE A NEW FORM TO DUMP ELEMENTS INTO FOR SUBMISSION
    form.method = "get"; 
    form.action = "https://raw.githubusercontent.com/suyogshiftcare/jsontest/main/available.json"; // TELL THE FORM WHAT PAGE TO SUBMIT TO
    $("#"+idRow+" td").children().each(function() { // GRAB ALL CHILD ELEMENTS OF <TD>'S IN THE ROW IDENTIFIED BY idRow, CLONE THEM, AND DUMP THEM IN OUR FORM
          if(this.type.substring(0,6) == "select") { 
              input = document.createElement("input"); 
              input.type = "hidden";
              input.name = this.name; // GIVE ELEMENT SAME NAME AS THE <SELECT>
              input.value = this.value; // ASSIGN THE VALUE FROM THE <SELECT>
              form.appendChild(input);
          } else { // IF IT'S NOT A SELECT ELEMENT, JUST CLONE IT.
              $(this).clone().appendTo(form);
          }
  
      });
    form.submit(); 
  }