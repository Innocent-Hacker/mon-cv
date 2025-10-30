document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission par défaut
    // Vide les champs du formulaire
    document.getElementById("prenom").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    // Affiche un message de succès
    const messageDiv = document.getElementById("success-message");
    messageDiv.textContent = "Envoyé avec succès";
    messageDiv.style.color = "green";
    messageDiv.style.fontWeight = "bold";
  });
});
