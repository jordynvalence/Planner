var timedateValue = moment().format('MMM DD YYYY [at] hh:mm');
​
console.log(timedateValue);
​
var timedate = document.getElementById('timedate');
​
timedate.textContent = timedateValue;