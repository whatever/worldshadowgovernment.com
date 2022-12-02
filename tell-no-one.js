var svgs = {
  neutral: document.createElement("IMG"),
  success: document.createElement("IMG"),
  failure: document.createElement("IMG"),
};

svgs.neutral.src = "/login_WSG-01.svg";
svgs.success.src = "/login_WSG-02.svg";
svgs.failure.src = "/login_WSG-03.svg";

var svg = document.getElementById("message");
var input = document.getElementById("secret");
var login = document.getElementById("login-box");

document.body.addEventListener("click", function (ev) {

  if (login.className != "hidden") {
    restore();
    return;
  }

  login.className = "showing";

  var x = ev.clientX;
  var y = ev.clientY;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  var box = login.getBoundingClientRect();

  var bottom = y + box.height;
  var right = x + box.width;

  if (right > vw) {
    x = ev.clientX - (right - vw);
    x = Math.max(0, x);
  }

  if (bottom > vh) {
    y = ev.clientY - (bottom - vh);
    y = Math.max(0, y);
  }

  login.style.position = "fixed";
  login.style.left = x + "px";
  login.style.top = y + "px";

  input.focus();
});

function restore() {
  clearTimeout(timeout);
  svg.src = svgs.neutral.src;
  input.disabled = "";
  input.value = "";
  input.blur();
  login.className = "hidden";
}
