let  yourDate = "2019-08-26";

let currentDate = moment();
let destinationDate = moment(yourDate,'YYYY-MM-DD');
let timeDifference = moment.duration(destinationDate.diff(currentDate,"seconds"));

let clock = $('.your-clock').FlipClock(timeDifference.asSeconds(), {
	clockFace: 'DailyCounter',
	countdown: true,
	language: 'german'
});
