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
  var userData = JSON.parse(localStorage.getItem('userData'));

  if (userData) {
    document.getElementById('nama').textContent = userData.nama || 'Your Name';
    document.getElementById('role').textContent = userData.role || 'Your Role';
    document.getElementById('availability').innerHTML = `<strong>Availability</strong> ${userData.availability || 'Empty'}`;
    document.getElementById('umur').innerHTML = `<strong>Umur</strong> ${userData.umur || 'Empty'}`;
    document.getElementById('lokasi').innerHTML = `<strong>Lokasi</strong> ${userData.lokasi || 'Empty'}`;
    document.getElementById('pengalaman').innerHTML = `<strong>Pengalaman</strong> ${userData.pengalaman || 'Empty'}`;
    document.getElementById('email').innerHTML = `<strong>Email</strong> ${userData.email || 'Empty'}`;
  } else {
    document.getElementById('nama').textContent = 'Your Name';
    document.getElementById('role').textContent = 'Your Role';
    document.getElementById('availability').innerHTML = `<strong>Availability</strong> Empty`;
    document.getElementById('umur').innerHTML = `<strong>Umur</strong> Empty`;
    document.getElementById('lokasi').innerHTML = `<strong>Lokasi</strong> Empty`;
    document.getElementById('pengalaman').innerHTML = `<strong>Pengalaman</strong> Empty`;
    document.getElementById('email').innerHTML = `<strong>Email</strong> Empty`;
  }
};
