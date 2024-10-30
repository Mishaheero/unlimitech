// validator.js

export function validateForm() {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".subscription__form");
    const emailInput = document.getElementById("email");
    const checkboxInput = document.getElementById("agree");
    const errorMessageDiv = document.querySelector(".error-message");
    const successMessageDiv = document.querySelector(".success-message");

    form.addEventListener("submit", function (event) {
      // Regex to validate email
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const emailValue = emailInput.value.trim();

      let valid = true;

      // Check if the email address is valid
      if (!emailRegex.test(emailValue)) {
        event.preventDefault();
        emailInput.style.border = "1px solid red";
        emailInput.setAttribute("aria-invalid", "true");
        errorMessageDiv.textContent =
          "Proszę wprowadzić poprawny adres e-mail.";
        errorMessageDiv.style.display = "block";
        valid = false;
      } else {
        emailInput.style.border = "";
        emailInput.removeAttribute("aria-invalid");
      }

      // Check if the checkbox is checked
      if (!checkboxInput.checked) {
        event.preventDefault();
        errorMessageDiv.textContent =
          "Proszę zaakceptować regulamin i politykę prywatności.";
        checkboxInput.style.border = "1px solid red";
        valid = false;
      } else {
        checkboxInput.style.border = "";
      }

      if (valid) {
        errorMessageDiv.style.display = "none";
        successMessageDiv.textContent = "Formularz został przesłany pomyślnie!";
        successMessageDiv.style.display = "block";
        console.log("Formularz przesłany pomyślnie!");
      }
    });

    // Add an event listener to the email input that triggers on user input.
    // This allows for real-time validation of the email address as the user types.
    emailInput.addEventListener("input", function () {
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex to validate email

      // Check if the email is valid
      if (emailRegex.test(emailValue)) {
        emailInput.style.border = "";
        errorMessageDiv.style.display = "none";
      } else {
        emailInput.style.border = "1px solid red";
      }
    });

    // Add an event listener to the checkbox that triggers on change.
    // If the checkbox is checked, reset the border style and hide the error message.
    checkboxInput.addEventListener("change", function () {
      if (checkboxInput.checked) {
        checkboxInput.style.border = "";
        errorMessageDiv.style.display = "none";
      }
    });
  });
}
