var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} };

var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){function makemeSticky2(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking2 bounceInUp",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky2("bungkus");
};

function openSosprofil() {
  var e = document.getElementById("sos-profil");
  "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  var e = document.getElementById("search-box");
  "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
  var e = document.getElementById("search-icon");
  "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  var e = document.getElementById("ellipsis-icon");
  "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
};

function openMobilemenu(){var e=document.getElementById("mobile-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none"};

function openToolmenu() {
  document.getElementById("tool-menu").style.display = "block";
};
var boxArray = ["tool-menu"];
window.addEventListener("mouseup", function(e) {
  for (var r = 0; r < boxArray.length; r++) {
    var o = document.getElementById(boxArray[r]);
    e.target != o && e.target.parentNode != o && (o.style.display = "none")
  }
});

var HW_config = {
    selector: ".changelog-badge", // CSS selector where to inject the badge
    account: "JR8kbx", // your account ID
    translations: { title: "Hot News" }
  };
(function() { var ch = document.createElement('script'); ch.type = 'text/javascript'; ch.async = true; ch.src = '//cdn.headwayapp.co/widget.js'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ch, sc); })();