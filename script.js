
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("Menuju lokasi: " + button.textContent.trim());
    // Di sini bisa diarahkan ke halaman lain atau buka menu aksi
  });
});
