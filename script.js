var input = document.getElementById("input");
var age = document.getElementById("age");
var email = document.getElementById("email");
var password = document.getElementById("possword");
var course = document.getElementById("course");
var btn = document.getElementById("btn");
var container = document.getElementById("container");
btn.addEventListener("click", function () {
  var selectedGender = document.querySelector('input[name="Gender"]:checked');
  if (
    input.value === "" ||
    age.value === "" ||
    email.value === "" ||
    password.value === "" ||
    !selectedGender ||
    course.value === "" ||
    course.value === "Select a course"
  ) {
    alert("Please fill in all fields before submitting!");
    return;
  }
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }
  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long!");
    return;
  }
  var tr = document.createElement("tr");
  tr.innerHTML =
    "<td class='border border-gray-400 p-2'>" + input.value + "</td>" +
    "<td class='border border-gray-400 p-2'>" + age.value + "</td>" +
    "<td class='border border-gray-400 p-2'>" + email.value + "</td>" +
    "<td class='border border-gray-400 p-2'>" + password.value + "</td>" +
    "<td class='border border-gray-400 p-2'>" + selectedGender.value + "</td>" +
    "<td class='border border-gray-400 p-2'>" + course.value + "</td>" +
    "<td class='border border-gray-400 p-2'>" +
    "<button class='bg-red-500 py-1 px-3 rounded text-white' onclick='deleteItem(event)'>Delete</button>" +
    "</td>";

  container.appendChild(tr);
  input.value = "";
  age.value = "";
  email.value = "";
  password.value = "";
  course.value = "Select a course";
  selectedGender.checked = false;

  alert("Student added successfully!");
});
function deleteItem(event) {
  var button = event.target;
  var row = button.closest("tr");
  row.remove();
  alert("row deleted successfully!");
}
