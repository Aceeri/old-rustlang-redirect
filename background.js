const oldRustlang = "https://prev.rust-lang.org";

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      redirectUrl: oldRustlang + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]
    };
  },
  {
    urls: [
      "*://rust-lang.org/*",
      "*://www.rust-lang.org/*",
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other"
    ]
  },
  ["blocking"]
);
