inputs = []; 
function getPara1() {  
 for (var i = 1; i <= 6; i++) 
 {  inputs.push(document.getElementById("para1_input_box_"+i).value);
  console.log(inputs); 
  inputs.join(". "); }
 document.getElementById("show_paragraph_1").innerHTML = inputs.join(". ");
}

function getPara2() { 
    for (var i = 1; i <= 6; i++)
 {  inputs.push(document.getElementById("para2_input_box_"+i).value);
  console.log(inputs);
  inputs.join(". "); }
 document.getElementById("show_paragraph_2").innerHTML = inputs.join(". ");
}

 