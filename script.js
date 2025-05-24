// Modal open/close logic
const profilePhoto = document.getElementById('profilePhoto');
const modal = document.getElementById('profileModal');
const closeModal = document.getElementById('closeProfileModal');
const contactModal = document.getElementById("successModal");
const contactBTn = document.getElementById("btn")

profilePhoto.onclick = () => {
  modal.style.display = 'flex';
};

closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Close modal when clicking outside content
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const confirmModal = document.getElementById("confirmModal");
  const successModal = document.getElementById("successModal");
  const confirmBtn = document.getElementById("confirmBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const closeSuccessModal = document.getElementById("closeSuccessModal");

  // Show confirmation modal when form is submitted
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent direct submission
    confirmModal.style.display = "flex";
  });

  // Handle form confirmation
  confirmBtn.addEventListener("click", () => {
    confirmModal.style.display = "none";
    successModal.style.display = "block";

    // Reset form after submission
    contactForm.reset();
  });

  // Handle cancellation of submission
  cancelBtn.addEventListener("click", () => {
    confirmModal.style.display = "none";
  });

  // Close success modal
  closeSuccessModal.addEventListener("click", () => {
    successModal.style.display = "none";
  });

  // Close modals when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === confirmModal) {
      confirmModal.style.display = "none";
    }
    if (event.target === successModal) {
      successModal.style.display = "none";
    }
  });
});
