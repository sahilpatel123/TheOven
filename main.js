//add unlisted coin button
function calculate() {
    // If submit button clicked
    $("#calculator-button").click(function () {
      let input1 = document.getElementById("var-input-1").value
      let input2 = document.getElementById("var-input-2").value
      let input3 = document.getElementById("var-input-3").value
      let input4 = document.getElementById("var-input-4").value
      console.log(input1, input2, input3, input4)
      console.log("here")
      answer = input1 + input2 + input3 + input4
      console.log(answer)
      $("#soln").html(answer);
  });
  // If they hit the enter key
  $("#var-input-4").keypress(function (e) {
      if (e.which == 13) {
        let input1 = document.getElementById("var-input-1").value
        let input2 = document.getElementById("var-input-2").value
        let input3 = document.getElementById("var-input-3").value
        let input4 = document.getElementById("var-input-4").value
        console.log(input1, input2, input3, input4)
        console.log("here")
        e.preventDefault();
        answer = input1 + input2 + input3 + input4
        $("#soln").html(answer);
      }
  }); 
}

$(document).ready(function () {
    calculate();
    
  });