function Hidden() {
  document.getElementById("hidden").style.display = "inline";
  document.getElementById("hidden").style.transitionDuration = ".8s";
  document.getElementById("display").style.opacity = "0.8";
}
document.getElementById("para").style.display = "none";
document.getElementById("hidden").style.display = "none";
function Close() {
  let a = document.getElementById("para").style.display;
  document.getElementById("hidden").style.display = "none";
  document.getElementById("hidden").style.transitionDuration = ".8s";
  if (a == "none") {
    document.getElementById("display").style.opacity = "1";
  }
}
function Close_p() {
  let a = document.getElementById("hidden").style.display;
  if (a == "none") {
    document.getElementById("display").style.opacity = "1";
  }
  document.getElementById("para").style.display = "none";
}
const Output = (val2) => {
  document.getElementById("para").style.display = "flex";
  document.getElementById("hidden").style.transitionDuration = "1s";
  document.getElementById("display").style.opacity = "0.8";
  let val = document.getElementById("search").value;
  val = Number(val);
  if (val2 == "Mercury") {
    let val1 = val * 0.38;
    val1 = val1.toFixed(2);
    document.getElementById("output").innerHTML =
      "Your weight on Mercury is: " + val1 + "Kg";
  } else if (val2 == "Earth") {
    document.getElementById("output").innerHTML =
      "Your weight on Earth is: " + val + "Kg";
  } else if (val2 == "Mars") {
    let val1 = val * 0.38;
    val1 = val1.toFixed(2);
    document.getElementById("output").innerHTML =
      "Your weight on Mars is: " + val1 + "Kg";
  } else if (val2 == "Venus") {
    let val1 = val * 0.9;
    val1 = val1.toFixed(2);
    document.getElementById("output").innerHTML =
      "Your weight on Venus is: " + val1 + "Kg";
  } else if (val2 == "Sun") {
    let val1 = val * 28;
    val1 = val1.toFixed(2);
    document.getElementById("output").innerHTML =
      "Your weight on Sun is: " + val1 + "Kg";
  } else if (val2 == "Jupiter") {
    let val1 = val * 2.54;
    val1 = val1.toFixed(2);
    document.getElementById("output").innerHTML =
      "Your Weight on Jupiter is: " + val1 + "Kg";
  } else if (val2 == "Uranus") {
    let val1 = val * 0.89;
    val1 = val1.toFixed(2);
    document.getElementById("output").innerHTML =
      "Your Weight on Uranus is: " + val1 + "Kg";
  } else if (val2 == "Saturn") {
    let val1 = val * 1.07;
    val1 = val1.toFixed(2);
    document.getElementById("output").innerHTML =
      "Your Weight on Saturn is: " + val1 + "Kg";
  } else if (val2 == "Neptune") {
    let val1 = val * 1.14;
    val1 = val1.toFixed(2);
    document.getElementById("output").innerHTML =
      "Your Weight on Neptune is: " + val1 + "Kg";
  }
};
