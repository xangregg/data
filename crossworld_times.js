// grab the chrome object
var chrome = Application('Google Chrome');

// didn't figure out the proper way to wait in JavaScript, so:
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e10; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var times = [];

var first = new Date(2018, 0, 20); // month is 0-based
var last = new Date();
for (var d = new Date(first); d <= last; d.setDate(d.getDate() + 1)) {

	// create URL
	iso = d.toISOString(); // 2011-10-05T14:48:00.000Z
	url = "https://www.nytimes.com/crosswords/game/daily/"
	 + iso.substring(0, 4) + "/" + iso.substring(5, 7) + "/" + iso.substring(8, 10);
	 

	// request the page
	var window = chrome.Window().make();
	window.tabs[0].url = url;

	// query for timer value, waiting for it to load
	var n = 0;
	var s = null;
	while (s == null && n++ < 5) {
		sleep(5000);
		s = window.tabs[0].execute({
			javascript: "document.getElementsByClassName('timer-count').item(0).textContent"
		});
	}


	// query for completion status (presence of Reveal button) 
	s2 = window.tabs[0].execute({
		javascript: "document.evaluate(\"count(//button[text()='reveal'])\", document, null, XPathResult.NUMBER_TYPE, null).numberValue"
	});
	times.push( {
		year: parseInt(iso.substring(0, 4)),
		month: parseInt(iso.substring(5, 7)),
		day: parseInt(iso.substring(8, 10)),
		tries: n,
		time: s,
		done: 1-s2
	});
	sleep(1000);
	window.close();
}
times;	// result of script for log