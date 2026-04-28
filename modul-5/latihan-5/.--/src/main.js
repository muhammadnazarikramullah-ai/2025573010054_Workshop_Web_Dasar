import "./style.css";

// OPTIONAL: contoh interaksi kecil
document.addEventListener("DOMContentLoaded", () => {
  console.log("LuxScent siap 🚀");

  // contoh: klik tombol
  const btn = document.querySelector(".btn");

  if (btn) {
    btn.addEventListener("click", () => {
      alert("Menuju halaman produk!");
    });
  }
});
