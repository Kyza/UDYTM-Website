$("html, body").animate({
  scrollTop: $("html").offset().top
}, 100);

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

window.mobile = function() {
  var check = false;
  (function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

window.mobileOrTablet = function() {
  var check = false;
  (function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

if (!mobileOrTablet()) {
  $(".previewImage").tilt({});
} else {
  $(".previewImage>img").css({
    "width": "80vw",
    "filter": "drop-shadow(0 0 1.75rem rgba(0, 0, 0, 0.4))"
  });
  $("#features, #info").css({
    "width": "80vw"
  });
}

$("#topIndicator").hide();
$("#topIndicator").css("opacity", "0");
$("#topIndicator").css("pointer-events", "none");
$("#topIndicator").show();

var startTime = performance.now();

var pageNum = 1;

var lastPage = 3;

$("body").bind("mousewheel", function(e) {
  var endTime = performance.now();

  if (endTime - startTime > 5e2) {
    startTime = performance.now();

    scroll(e.originalEvent.wheelDelta / 120 > 0);
  }
});

$("#topIndicator").click(() => {
  scroll(true);
});

$("#bottomIndicator").click(() => {
  scroll(false);
});

function scroll(up) {
  if (up) {
    if (pageNum - 1 <= 0) return;

    pageNum--;
  } else {
    if (pageNum >= lastPage) return;

    pageNum++;
  }

  $("#topIndicator").show();
  $("#bottomIndicator").show();
  if (pageNum == 1) {
    $("#topIndicator").css("opacity", "0");
    $("#topIndicator").css("pointer-events", "none");

    $("#bottomIndicator").css("opacity", "1");
    $("#bottomIndicator").css("pointer-events", "auto");
  } else if (pageNum == lastPage) {
    $("#topIndicator").css("opacity", "1");
    $("#topIndicator").css("pointer-events", "auto");

    $("#bottomIndicator").css("opacity", "0");
    $("#bottomIndicator").css("pointer-events", "none");
  } else {
    $("#topIndicator").css("opacity", "1");
    $("#topIndicator").css("pointer-events", "auto");

    $("#bottomIndicator").css("opacity", "1");
    $("#bottomIndicator").css("pointer-events", "auto");
  }

  $("html, body").animate({
    scrollTop: $("#page" + pageNum).offset().top
  }, 100);
}

tippy("#listen", {
  content: `<input type="button" id="windows" value="Windows" /><input type="button" id="linux" value="Linux" />`,
  interactive: true,
  placement: "bottom",
  theme: "translucent"
});

tippy("#discord", {
  content: `<input type="button" id="joinDiscord" value="Join Our Server" />`,
  interactive: true,
  placement: "bottom",
  theme: "translucent"
});

function download(fileName, fileURL) {
  var element = document.createElement('a');
  element.setAttribute('href', fileURL);
  element.setAttribute('download', fileName);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var version = "";
$.get("https://api.github.com/repos/KyzaGitHub/Unofficial-Desktop-YouTube-Music/releases", function(data) {
  version = data[0].tag_name.substr(1);
});


var didAdd = false;
setInterval(() => {
  if ($("#windows") && !didAdd) {
    didAdd = true;
    $("#windows").on("click", () => {
      download("DesktopYouTubeMusic.Setup." + version + ".exe", "https://github.com/KyzaGitHub/Unofficial-Desktop-YouTube-Music/releases/download/v" + version + "/DesktopYouTubeMusic.Setup." + version + ".exe");
    });

    $("#linux").on("click", () => {
      download("DesktopYouTubeMusic.Setup." + version + ".exe", "https://github.com/KyzaGitHub/Unofficial-Desktop-YouTube-Music/releases/download/v" + version + "/DesktopYouTubeMusic-" + version + ".AppImage");
    });

    if (getOS() == "Windows") $("#windows").addClass("highlightOS");
    if (getOS() == "Linux") $("#linux").addClass("highlightOS");

    $("#joinDiscord").on("click", () => {
      window.location = "https://discord.gg/Jj8tXZA";
    });
  } else {
    didAdd = false;
  }
}, 100);

function rand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var features = [
  "Super lightweight.",
  "Faster than Spotify.",
  "Discord Rich Presence enabled.",
  "Full YouTube Music functionality.",
  "Loop, like, dislike, and share songs.",
  "A persistent window that hides for invisible tunes.",
  "Media keys to play, pause, skip, and go back.",
  "Paste links anywhere in the app to jump to songs.",
  "Easy automatic update system.",
  "Windows progress bar support.",
  "Adjustable song playback speed.",
  "Advertisements will never bother you again.",
  "Ctrl+Shift+Y to show and hide the app."
];

var featuresLeft = features.slice();

function changeText() {
  if (featuresLeft.length == 0) featuresLeft = features.slice();

  var pick = rand(0, featuresLeft.length - 1);

  $("#featuresText").css("opacity", "0");
  setTimeout(() => {
    $("#featuresText").html(featuresLeft[pick]);
    $("#featuresText").css("opacity", "1");
    featuresLeft.splice(pick, 1);
  }, 4e2);
}
changeText();

$("#featuresText").css("transition-duration", "0.4s");
setInterval(changeText, 4e3);
