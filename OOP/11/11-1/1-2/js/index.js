const weatherCheck = function (temp) {
    if (typeof temp === 'number') {
        if (temp < 0) {
            return 'freezing';
        } else if (temp > 0 && temp < 15) {
            return 'cold';
        } else if (temp > 15 && temp < 25) {
            return 'warm';
        } else if (temp > 25) {
            return 'hot';
        }
    } else {
        if (temp == 'freezing') {
            return -10;
        } else if (temp == 'cold') {
            return 10;
        } else if (temp == 'warm') {
            return 20;
        } else if (temp == 'hot') {
            return 30;
        }
    }
};

const currentWeather = weatherCheck(44);
console.log(currentWeather);