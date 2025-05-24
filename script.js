// Modal open/close logic
const profilePhoto = document.getElementById('profilePhoto');
const modal = document.getElementById('profileModal');
const closeModal = document.getElementById('closeModal');

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