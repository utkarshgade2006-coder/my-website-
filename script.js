
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Automatically display current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// WhatsApp enquiry function
function sendWhatsApp() {
  const name = document.getElementById("customerName").value.trim();
  const customerPhone = document.getElementById("customerPhone").value.trim();
  const message = document.getElementById("customerMessage").value.trim();

  if (!name || !customerPhone || !message) {
    alert("Please fill in all details.");
    return;
  }

  // Replace with your actual business WhatsApp number.
  const businessNumber = "91XXXXXXXXXX";

  if (businessNumber.includes("X")) {
    alert("Please add your business WhatsApp number in script.js.");
    return;
  }

  const text = `AAS Facility Services Enquiry
Name: ${name}
Customer Phone: ${customerPhone}
Requirement: ${message}`;

  const url = "https://wa.me/" + businessNumber +
    "?text=" + encodeURIComponent(text);

  window.open(url, "_blank");
}
