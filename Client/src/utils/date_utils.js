var dateFormat = require('dateformat');

function timeStampToDate (timeStamp) {
	let date = new Date (timeStamp);
	let formatedDate = dateFormat (date, "mmm dd @ HH:MM");
	return formatedDate;
}

module.exports.timeStampToDate = timeStampToDate;

