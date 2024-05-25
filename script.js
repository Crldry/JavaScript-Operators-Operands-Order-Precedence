function calculateAverage() {
    // Get the grades from the input fields
    var grade1 = parseFloat(document.getElementById('grade1').value);
    var grade2 = parseFloat(document.getElementById('grade2').value);
    var grade3 = parseFloat(document.getElementById('grade3').value);
    var grade4 = parseFloat(document.getElementById('grade4').value);
    var grade5 = parseFloat(document.getElementById('grade5').value);

    // Calculate the average
    var average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

    // Display the result
    document.getElementById('result').innerText = 'Your average grade is: ' + average.toFixed(2);
}