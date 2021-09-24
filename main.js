$(document).ready(() => {
    $("#subb").click(() => {
      validation($("#username").val(), $("#password").val(), home);
    });
  });
  function validation(username, password, callback) {
    if (username === "admin" && password === "12345") {
      callback();
    } else {
      if (username === "" && password === "") {
        var displayMsg = "Username/Password required";
        $(".errorMessage").text(displayMsg);
      } else {
        $(".form-control").css("border", "2px solid red");
        var displaytext = "Username/Password doesnot match";
        $(".errorMessage").text(displaytext);
      }
    }
  }
  
  function home() {
    window.location.href = "home.html";
  }