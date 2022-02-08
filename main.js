

function calculate() {
    // If submit button clicked
    $("#calculator-button").click(function () {
      let input1 = document.getElementById("var-input-1").value
      let v1 = parseInt(input1)
      let input2 = document.getElementById("var-input-2").value
      let v2 = parseInt(input2)
      let input3 = document.getElementById("var-input-3").value
      let v3 = parseInt(input3)
      let input4 = document.getElementById("var-input-4").value
      let v4 = parseInt(input4)
      answer =  v1 + v2 + v3 + v4
      $("#soln").html(answer);
  });
  // If they hit the enter key
  $("#var-input-4").keypress(function (e) {
      if (e.which == 13) {
        let input1 = document.getElementById("var-input-1").value
        let v1 = parseInt(input1)
        let input2 = document.getElementById("var-input-2").value
        let v2 = parseInt(input2)
        let input3 = document.getElementById("var-input-3").value
        let v3 = parseInt(input3)
        let input4 = document.getElementById("var-input-4").value
        let v4 = parseInt(input4)
        answer =  v1 + v2 + v3 + v4
        $("#soln").html(answer);
        e.preventDefault();
      }
  }); 
}

$(document).ready(function () {
    calculate();
    
  });