function showResult() {
  var a = document.getElementById("input").value;

  if (a >= 80 && a <= 100) {
    document.getElementById("display").innerHTML = "You Have Got : A+";
  }

  else if (a >= 70 && a <= 79) {
    document.getElementById("display").innerHTML = "You Have Got : A";
  }

  else if (a >= 60 && a <= 69) {
    document.getElementById("display").innerHTML = "You Have Got : A-";
  }

  else if (a >= 50 && a <= 59) {
    document.getElementById("display").innerHTML = "You Have Got : B";
  }

  else if (a >= 40 && a <= 49) {
    document.getElementById("display").innerHTML = "You Have Got : C";
  }

  else if (a >= 33 && a <= 39) {
    document.getElementById("display").innerHTML = "You Have Got : D";
  }

  else if (a > 0 && a < 33) {
    document.getElementById("display").innerHTML = "You Have Got : F";
  }

  else {
    document.getElementById("display").innerHTML = "Invaild Marks";
  }






  // document.getElementById("display").innerHTML = a;
}
