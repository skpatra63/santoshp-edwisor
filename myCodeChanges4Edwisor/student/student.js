/**
 * student example
 */

var isTopper =false;

var marksObtained = window.prompt('Please enter the marks obtained')

if(marksObtained == undefined || marksObtained == null || marksObtained == '' )
	alert('Invalid Input')
else if(marksObtained < 0 || marksObtained > 100)
	alert('Input a number between 0 and 100')
else{
	//calculating the percent
	marksObtained = Number(marksObtained)
	var totalMarks =100
	var percentageofMarksObtained = (marksObtained/totalMarks)*100
	
	isTopper = (percentageofMarksObtained > 90)?true:false
		
	alert(isTopper)
}
