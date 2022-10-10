/**
 * Author:    Squantio
 * Created:   10.05.2022
 *
 * (c) Copyright by scrabungus Corp.
 **/

//pseudocode!

//event 1 ^
//hover mouse on itembox
//border edge gets bolder

//event 2 ^
//hover over an itembox
//click on itembox
//panel on right will show up with a basic description of the course and a picture

//event 3 ^
//hover over an itembox
//click on itembox
//panel on right will show up with a basic description of the course and a picture
//when you click the x button the panel will close

//event 4 ^
//when the page loads the panel on the right displaying the course info is hidden

document.addEventListener("DOMContentLoaded", () => {

//to hide the infobox

let infopanel = document.getElementById('infopanel');
window.onload = function() {
    document.getElementById("infopanel").style.display = "none";
  }

  //event that makes the border of an item box turn thick when hovered on

let itembox1 = document.getElementById('itembox1');
itembox1.onmouseout = function() {
    document.getElementById("itembox1").style.borderWidth = ("thin");
  }
  itembox1.onmouseover = function() {
      document.getElementById("itembox1").style.borderWidth = ("thick");
    }

    let itembox2 = document.getElementById('itembox2');
    itembox2.onmouseout = function() {
        document.getElementById("itembox2").style.borderWidth = ("thin");
      }
      itembox2.onmouseover = function() {
          document.getElementById("itembox2").style.borderWidth = ("thick");
        }
    //event that makes the infobox appear w/ different image depending on the button

        let showInfopanel1 = document.getElementById("itembox1").onclick = function() {
          console.log("test 1")
          document.getElementById("courseimage").src = "images/cst252.jpg";
          document.getElementById("infopanel").style.display = "block";
          document.getElementById("cst252coursename").textContent = ('CST252:');
          document.getElementById("cst252description").textContent = ('This class teaches you the basics of JavaScript!');
          document.getElementById("cst351coursename").style.display = "none";
          document.getElementById("cst351description").style.display = "none";
          document.getElementById("cst252coursename").style.display = "block";
          document.getElementById("cst252description").style.display = "block";

        };

        let showInfopanel2 = document.getElementById("itembox2").onclick = function() {
          console.log("test 2")
          document.getElementById("courseimage").src = "images/cst351.jpg";
          document.getElementById("infopanel").style.display = "block";
          document.getElementById("cst351coursename").textContent = ('CST351:');
          document.getElementById("cst351description").textContent = ('This class teaches you Web Design!');
          document.getElementById("cst252coursename").style.display = "none";
          document.getElementById("cst252description").style.display = "none";
          document.getElementById("cst351coursename").style.display = "block";
          document.getElementById("cst351description").style.display = "block";
        };

    //event that onclick closes info infopanel

    let infoClose = document.getElementById("exitcontainer").onclick = function() {
      document.getElementById("infopanel").style.display = "none";
    };
});
