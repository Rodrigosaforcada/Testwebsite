function myFunction() {
    alert("You clicked the scenary!");
  }

function displayResult() {
    document.getElementById("gratitude").innerHTML = "Thanks a lot!";
    document.getElementById("gratitude").style.fontSize = "180%";
    document.getElementById("gratitude").style.color = "red";
    document.getElementById("gratitude").style.backgroundColor = "rgba(255, 255, 77,0.65)";
  }

function expand1() {
    document.getElementById("img1").style.height= "70%";
    document.getElementById("img1").style.width= "70%";
}

function expand2() {
    document.getElementById("img2").style.height= "70%";
    document.getElementById("img2").style.width= "70%";
}

function expand3() {
    document.getElementById("img3").style.height= "70%";
    document.getElementById("img3").style.width= "70%";
}

function contract1() {
    document.getElementById("img1").style.height= "50%";
    document.getElementById("img1").style.width= "50%";
}

function contract2() {
    document.getElementById("img2").style.height= "50%";
    document.getElementById("img2").style.width= "50%";
}

function contract3() {
    document.getElementById("img3").style.height= "50%";
    document.getElementById("img3").style.width= "50%";
}