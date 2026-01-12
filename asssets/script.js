// SCROLL ANIMATION
const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// NAV ACTIVE ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// OFFCANVAS MOBILE NAV
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

menuToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
  navOverlay.classList.add("show");
});

navOverlay.addEventListener("click", closeMenu);

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  navMenu.classList.remove("show");
  navOverlay.classList.remove("show");
}

// WHATSAPP FORM
document.getElementById("waForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const message = document.getElementById("message").value;

  const phone = "6281234567890"; // ganti nomor resmi PT
  const text =
    `Halo PT Teknira Sukses Bersama,%0A` +
    `Nama: ${name}%0A` +
    `Perusahaan: ${company}%0A` +
    `Pesan: ${message}`;

  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});
