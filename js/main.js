let  yourDate = "2019-09-02";

let currentDate = moment();
let destinationDate = moment(yourDate,'YYYY-MM-DD');
let timeDifference = destinationDate.diff(currentDate,"seconds");

let clock = $('.your-clock').FlipClock(timeDifference,{
	clockFace: 'DailyCounter',
	countdown: true,
	language: 'german'
	
});
