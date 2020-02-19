const logUser = e => {
  alert("submit called");
  e.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let sponsor = document.getElementById("sponsor").value;
  let meeting = document.getElementById("meeting").value;
  let member = { name, phone, sponsor, meeting };
  console.log(member);
  alert(member);
};
