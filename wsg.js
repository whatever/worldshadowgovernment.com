var el = document.getElementById("wsg-tell-no-one");
var app = new svv.WorldShadowGovernmentApp({el: el});
app.tweak({
  exposure: 0.466546007566331,
  bloomThreshold: 0.16040516055796897,
  bloomStrength: 2.464597072032292,
  bloomRadius: 0.51,
  outsiderView: false,
  bloom: true,
  hot: 0.55,
  cold: 1.03,
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

console.log("(  (               (   (                                        \n\
 )\\))(   '     (    )\\  )\\ )                                     \n\
((_)()\\ )  (   )(  ((_)(()/( (                                   \n\
_(())\\_)() )\\ (()\\  _   ((_)))\\ )    )         (                 \n\
\\ \\((_)/ /((_) ((_)| |  _| |(()/( ( /(     )   )\\ )      (  (    \n\
 \\ \\/\\/ // _ \\| '_|| |/ _` | /(_)))\\()) ( /(  (()/(  (   )\\))(   \n\
  \\_/\\_/ \\___/|_|  |_|\\__,_|(_)) ((_)\\  )(_))  ((_)) )\\ ((_)()\\  \n\
                            / __|| |(_)((_)_   _| | ((_)_(()((_) \n\
                            \\__ \\| ' \\ / _` |/ _` |/ _ \\\\ V  V / \n\
 (                          |___/|_||_|\\__,_|\\__,_|\\___/ \\_/\\)/  \n\
 )\\ )          )      (   (              )      (         ( /(   \n\
(()/(     (   /((    ))\\  )(    (       (      ))\\  (     )\\())  \n\
 /(_))_   )\\ (_))\\  /((_)(()\\   )\\ )    )\\  ' /((_) )\\ ) (_))/   \n\
(_)) __| ((_)_)((_)(_))   ((_) _(_/(  _((_)) (_))  _(_/( | |_    \n\
  | (_ |/ _ \\\\ V / / -_) | '_|| ' \\))| '  \\()/ -_)| ' \\))|  _|   \n\
   \\___|\\___/ \\_/  \\___| |_|  |_||_| |_|_|_| \\___||_||_|  \\__|   \n\
                                                                 ");
