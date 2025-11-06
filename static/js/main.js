document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Frontend FreelanceHub listo");

  // Mostrar notificación de bienvenida
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "Bienvenido a tu panel Freelance";
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
});
