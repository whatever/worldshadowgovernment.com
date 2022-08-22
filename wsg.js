var el = document.getElementById("wsg-tell-no-one");
var app = new svv.WorldShadowGovernmentApp({el: el});
app.tweak({
  exposure: 0.466546007566331,
  bloomThreshold: 0.8323698466028576,
  bloomStrength: 1.9118493983913445,
  bloomRadius: 0.51,
  outsiderView: false,
  bloom: true,
  hot: 0.47000000000000003,
  cold: 0.8200000000000001,
  distance: 0.34,
  spread: 3.0700000000000003,
});

(function loop() {
  requestAnimationFrame(loop);
  app.update(+new Date());
  app.draw();
}());

function fill() {
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
  app.setSize(w, h);
}

fill();

window.addEventListener("resize", fill);

fill();