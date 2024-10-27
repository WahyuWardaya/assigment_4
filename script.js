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

var saveButton = document.querySelector('.btn-outline-success');

saveButton.onclick = function () {
  var nama = document.getElementById('form-name').querySelector('input').value;
  var role = document.getElementById('form-role').querySelector('input').value;
  var availability = document.getElementById('form-availability').querySelector('input').value;
  var umur = document.getElementById('form-umur').querySelector('input').value;
  var lokasi = document.getElementById('form-lokasi').querySelector('input').value;
  var pengalaman = document.getElementById('form-pengalaman').querySelector('input').value;
  var email = document.getElementById('form-email').querySelector('input').value;

  var userData = {
    nama: nama,
    role: role,
    availability: availability,
    umur: umur,
    lokasi: lokasi,
    pengalaman: pengalaman,
    email: email,
  };

  localStorage.setItem('userData', JSON.stringify(userData));

  document.getElementById('nama').innerHTML = nama;
  document.getElementById('role').innerHTML = role;
  document.getElementById('availability').innerHTML = availability;
  document.getElementById('umur').innerHTML = umur;
  document.getElementById('lokasi').innerHTML = lokasi;
  document.getElementById('pengalaman').innerHTML = pengalaman;
  document.getElementById('email').innerHTML = email;

  console.log('User Data:', JSON.parse(localStorage.getItem('userData')));

  form.style.display = 'none';
};

window.onload = function () {
  var userData = JSON.parse(localStorage.getItem('userData'));

  if (userData) {
    document.getElementById('nama').innerHTML = userData.nama;
    document.getElementById('role').innerHTML = userData.role;
    document.getElementById('availability').innerHTML = userData.availability;
    document.getElementById('umur').innerHTML = userData.umur;
    document.getElementById('lokasi').innerHTML = userData.lokasi;
    document.getElementById('pengalaman').innerHTML = userData.pengalaman;
    document.getElementById('email').innerHTML = userData.email;

    document.getElementById('form-name').querySelector('input').value = userData.nama;
    document.getElementById('form-role').querySelector('input').value = userData.role;
    document.getElementById('form-availability').querySelector('input').value = userData.availability;
    document.getElementById('form-umur').querySelector('input').value = userData.umur;
    document.getElementById('form-lokasi').querySelector('input').value = userData.lokasi;
    document.getElementById('form-pengalaman').querySelector('input').value = userData.pengalaman;
    document.getElementById('form-email').querySelector('input').value = userData.email;
  } else {
    document.getElementById('nama').innerHTML = 'Your Name';
    document.getElementById('role').innerHTML = 'Your Role';
  }
};
