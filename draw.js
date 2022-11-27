const body = document.getElementsByTagName("body");
const canvas = document.createElement("canvas");
const input = document.createElement("textarea");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
input.style.color = "black";
chrome.storage.sync.get("activateDraw", (data) => {
  input.innerHTML = "Your notes";
  input.style.width = "100%";
  input.style.height = "150px";
  input.style.padding = "12px 20px";
  input.style.boxSizing = "border-box";
  input.style.border = "2px solid #ccc";
  input.style.borderRadius = "4px";
  input.style.resize = "none";
  input.style.backgroundColor = "#f8f8f8";

  const ctx = canvas.getContext("2d");
  console.log("Mouuuuuuuuuuuuuuuuuuuuuse ");
  console.log(body[0]);
  console.log(canvas);

  body[0].appendChild(canvas);
  body[0].appendChild(input);
  if (data.activateDraw) {
    document.body.style.cursor = "crosshair";
    let prevX = null;
    let prevY = null;

    ctx.lineWidth = 5;

    let draw = false;

    window.addEventListener("mousedown", (e) => (draw = true));

    window.addEventListener("mouseup", (e) => (draw = false));

    window.addEventListener("mousemove", (e) => {
      if (prevX == null || prevY == null || !draw) {
        prevX = e.clientX;
        prevY = e.clientY;
        return;
      }

      let currentX = e.clientX;
      let currentY = e.clientY;

      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();

      prevX = currentX;
      prevY = currentY;
    });
  }
});
