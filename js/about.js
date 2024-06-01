function openPopup() {
  document.getElementById("popupForm").style.display = "flex";
}

// Form submission handling

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("workEmail").value;

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    document.getElementById("popupForm").style.display = "none";
  });

//pop up close
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

$("#contactForm").submit(function (e) {
  e.preventDefault();
  var action = $(this).attr("action");
  $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
      Accept: "application/json",
    },
  })
    .done(function () {
      alert("The form was submitted successfully.");
    })
    .fail(function () {
      alert("An error occurred! Please try again later.");
    });
});
