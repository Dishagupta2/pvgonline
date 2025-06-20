function openModal() {
  document.getElementById('userModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('userModal').style.display = 'none';
}

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert("Form submitted successfully!");
  closeModal();
});