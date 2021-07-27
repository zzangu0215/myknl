const logout = async () => {
  const response = await fetch('/api/users/logout');

  if (response.ok) {
    window.location.replace('/login');
    return;
  }
  alert(response.statusText);
};

document.querySelector('.btn-logout').addEventListener('click', logout);
