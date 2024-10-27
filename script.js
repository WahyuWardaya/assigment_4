var form = document.getElementById('editForm');
form.style.display = 'none';

var editButton = document.getElementById('editProfileBtn');

editButton.onclick = function () {
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
};
