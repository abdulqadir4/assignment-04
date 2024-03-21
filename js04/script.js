// Task 1
var number = prompt("Enter a number:");
document.getElementById('output').innerHTML = "Result: " + (number + 5);

// Task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("Task 2: a = " + a + ", b = " + b + ", result = " + result + "<br>");
document.write("--a: " + --a + "<br>");
document.write("--a - --b: " + (--a - --b) + "<br>");
document.write("--a - --b + ++b: " + (--a - --b + ++b) + "<br>");
document.write("--a - --b + ++b + b--: " + (--a - --b + ++b + b--) + "<br>");

// Task 3
var name = prompt("Enter your name:");
alert("Hello, " + name + "!");

// Task 4
var number = prompt("Enter a number:");
if (number === null || number === "") {
    number = 5;
}
var multiplicationTable = "";
for (var i = 1; i <= 10; i++) {
    multiplicationTable += number + " x " + i + " = " + (number * i) + "<br>";
}
document.getElementById('output').innerHTML = multiplicationTable;

// Task 5
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");
var totalMarks = 100;
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
document.getElementById('output').innerHTML = "<table>\
                                                    <tr>\
                                                        <th>Subject</th>\
                                                        <th>Total Marks</th>\
                                                        <th>Obtained Marks</th>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>" + subject1 + "</td>\
                                                        <td>" + totalMarks + "</td>\
                                                        <td>" + obtainedMarks1 + "</td>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>" + subject2 + "</td>\
                                                        <td>" + totalMarks + "</td>\
                                                        <td>" + obtainedMarks2 + "</td>\
                                                    </tr>\
                                                    <tr>\
                                                        <td>" + subject3 + "</td>\
                                                        <td>" + totalMarks + "</td>\
                                                        <td>" + obtainedMarks3 + "</td>\
                                                    </tr>\
                                                </table>\
                                                <p>Total Obtained Marks: " + totalObtainedMarks + "</p>\
                                                <p>Percentage: " + percentage.toFixed(2) + "%</p>";
