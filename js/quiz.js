
function myFunction() {
    var quiz = document.forms[0];
    var i;
    var true_answers = ["faux", "vrai", "faux", "vrai", "faux", "faux", "vrai"];
    var counter = 0;

    for (i = 0; i < quiz.length; i++) {
        if (quiz[i].checked && quiz[i].value == true_answers[Math.floor(i/2)]) {
          counter ++;
        }
      }

    var mistakes = true_answers.length - counter;

    if (mistakes==0) {
      alert("Congratulations! You have successfully answered all question correclty!");
    }
    else {
      alert("You have answered " + mistakes + " questions incorreclty. " + "Try again!");
    }

}
