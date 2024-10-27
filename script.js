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
  var nama = document.getElementById('btn-name').querySelector('input').value;
  var role = document.getElementById('btn-role').querySelector('input').value;
  var availability = document.getElementById('btn-availability').querySelector('input').value;
  var umur = document.getElementById('btn-umur').querySelector('input').value;
  var lokasi = document.getElementById('btn-lokasi').querySelector('input').value;
  var pengalaman = document.getElementById('btn-pengalaman').querySelector('input').value;
  var email = document.getElementById('btn-email').querySelector('input').value;

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

  document.getElementById('nama').textContent = nama || 'Your Name';
  document.getElementById('role').textContent = role || 'Your Role';
  document.getElementById('availability').innerHTML = `<strong>Availability</strong> ${availability || 'Empty'}`;
  document.getElementById('umur').innerHTML = `<strong>Umur</strong> ${umur || 'Empty'}`;
  document.getElementById('lokasi').innerHTML = `<strong>Lokasi</strong> ${lokasi || 'Empty'}`;
  document.getElementById('pengalaman').innerHTML = `<strong>Pengalaman</strong> ${pengalaman || 'Empty'}`;
  document.getElementById('email').innerHTML = `<strong>Email</strong> ${email || 'Empty'}`;

  console.log('User Data:', JSON.parse(localStorage.getItem('userData')));

  form.style.display = 'none';
};

window.onload = function () {
  document.getElementById('nama').textContent = localStorage.getItem('nama') || 'Your Name';
  document.getElementById('role').textContent = localStorage.getItem('role') || 'Your Role';
  document.getElementById('availability').innerHTML = `<strong>Availability</strong> ${localStorage.getItem('availability') || 'Empty'}`;
  document.getElementById('umur').innerHTML = `<strong>Umur</strong> ${localStorage.getItem('umur') || 'Empty'}`;
  document.getElementById('lokasi').innerHTML = `<strong>Lokasi</strong> ${localStorage.getItem('lokasi') || 'Empty'}`;
  document.getElementById('pengalaman').innerHTML = `<strong>Pengalaman</strong> ${localStorage.getItem('pengalaman') || 'Empty'}`;
  document.getElementById('email').innerHTML = `<strong>Email</strong> ${localStorage.getItem('email') || 'Empty'}`;
};
