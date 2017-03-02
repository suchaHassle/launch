// source script by /u/Will_Eccles
// released under Apache-2.0 license
// significant changes have been made from source
// see README for more details

var box = document.getElementById("search");

// catch URLs
var urlPattern = /^(https?:\/\/)?[^ ]+[.][^ ]+([.][^ ]+)*(\/[^ ]+)?$/i;

// convenient links
var handy = /^(google|gmail|dropbox|github)$/i;


// if not search text, navigate to URL
function nav(address) {
  // if the address starts with "https?|ftp ://"
  if (/^(?:(?:https?|ftp):\/\/).*/i.test(address)) {
    document.location.href = address;
  } else {
    document.location.href = "http://" + address;
  }
}

// handle enter key press in text box
// if text is a command, handle command parsing
function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    parseCom(box.value);
  }
}

// parse command
function parseCom(com) {
  console.log(urlPattern.test(com));
  // handle convenient links
  if (urlPattern.test(com)){
    nav(com);
  }

  // handle "youtube" commands
  else if (com.startsWith("youtube")==true) {
    // if "youtube" command is matched, open youtube
    if (/^youtube$/i.test(com)) {
      nav("https://www.youtube.com/feed/subscriptions");
    }
    // if search command is matched
    else if (/^youtube -s .{1,140}$/i.test(com)) {
      var query = com.replace(/^youtube -s /i, "");
      nav("https://www.youtube.com/results?search_query=" + encodeURIComponent(query));
    }
    // if anything else, search for it
    else if (urlPattern.test(com)){
      nav(com);
    }
  }

  else {
    nav("https://www.google.ca/search?q=" + com);
  }
}
