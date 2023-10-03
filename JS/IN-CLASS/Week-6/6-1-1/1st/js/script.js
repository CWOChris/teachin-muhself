var today = dayjs();

$("#1a").text(today.format("MM/DD/YYYY HH:mm:ss"));

var dayWeek = today.day();
$("#1b").text("this is the day of the week " + dayWeek);

$("#4a").text(today.diff(beginningOfyear), 'week');