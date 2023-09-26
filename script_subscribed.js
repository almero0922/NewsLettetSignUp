const email_text = document.getElementById("email_sub");
const ca_dismiss = document.getElementById("ca-dismiss");
email_text.innerText = localStorage.getItem("email");

function redirectPage(url) {
  location.href = url;
}

ca_dismiss.addEventListener("click", (e) => {
  redirectPage("./index.html");
});
