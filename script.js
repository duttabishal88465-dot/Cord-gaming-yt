const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
});

mobileNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = encodeURIComponent(data.get("name"));
  const email = encodeURIComponent(data.get("email"));
  const type = encodeURIComponent(data.get("type"));
  const message = encodeURIComponent(data.get("message"));

  // ✅ Replace with your real email:
  const to = "cordgaming744@gmail.com";

  const subject = `Cord Gaming: ${decodeURIComponent(type)} request`;
  const body =
`Name: ${decodeURIComponent(name)}
Email: ${decodeURIComponent(email)}
Type: ${decodeURIComponent(type)}

Message:
${decodeURIComponent(message)}`;

  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
