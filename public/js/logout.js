const logout = async () => {
  const response = await fetch("/api/users/logout");

  if (response.ok) {
    window.location.replace("/");
    return;
  }
  alert(response.statusText);
};

document.querySelector("#logout").addEventListener("click", logout);
