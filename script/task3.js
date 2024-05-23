function hidePassword() {
  const inputField = document.getElementById("hiddenForm");
  const button = document.getElementById("conseal_button");

  if (button.textContent === "Приховати") {
    inputField.type = "password";
    button.textContent = "Розкрити";
  } else {
    inputField.type = "text";
    button.textContent = "Приховати";
  }
}