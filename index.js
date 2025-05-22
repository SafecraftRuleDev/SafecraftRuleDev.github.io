const opendialogbtn = document.getElementById("connectbtn");
opendialogbtn.addEventListener("click", function () {
  document.getElementById("connectdialog").showModal();
});

const closedialogbtn = document.getElementById("closebtn");
closedialogbtn.addEventListener("click", function () {
  document.getElementById("connectdialog").close();
});
