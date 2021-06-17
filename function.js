document.getElementById('form2').hidden = true;
function calmessage() {
    let selection1 = confirm('Are you sure to calculate?');
    if (selection1 == true) {

        document.getElementById('form1').hidden = true;
        document.getElementById('form2').hidden = false;
        //subject 1 find id and set value
        var subcode1 = document.getElementById("subcode").value;
        var subname1 = document.getElementById("subname").value;
        var credit1 = document.getElementById("credit").value;
        var marks1 = document.getElementById("submark").value;
        //subject 2 find id and set value
        var subcode2 = document.getElementById("subcode2").value;
        var subname2 = document.getElementById("subname2").value;
        var credit2 = document.getElementById("credit2").value;
        var marks2 = document.getElementById("submark2").value;
        //subject3 find id and set value
        var subcode3 = document.getElementById("subcode3").value;
        var subname3 = document.getElementById("subname3").value;
        var credit3 = document.getElementById("credit3").value;
        var marks3 = document.getElementById("submark3").value;

        //check input
        if (subcode1 && subcode2 && subcode3 != "") {
            if (subname1 && subname2 && subname3 != "") {
                if (credit1 && credit2 && credit3 != "") {
                    if (marks1 && marks2 && marks3 != "") {

                        //set value for subject 1 output
                        document.getElementById("discode").innerHTML = subcode1;
                        document.getElementById("disname").innerHTML = subname1;
                        document.getElementById("discredit").innerHTML = credit1;
                        document.getElementById("dismark1").innerHTML = marks1;

                        //set value for subject 2 output
                        document.getElementById("discode2").innerHTML = subcode2;
                        document.getElementById("disname2").innerHTML = subname2;
                        document.getElementById("discredit2").innerHTML = credit2;
                        document.getElementById("dismark2").innerHTML = marks2;

                        //set value for subject 3 output
                        document.getElementById("discode3").innerHTML = subcode3;
                        document.getElementById("disname3").innerHTML = subname3;
                        document.getElementById("discredit3").innerHTML = credit3;
                        document.getElementById("dismark3").innerHTML = marks3;

                        //set grade for subject 1
                        if (marks1 >= 80 && marks1 <= 100) {
                            document.getElementById("disgrade").innerHTML = "A";
                        }
                        else if (marks1 >= 75 && marks1 <= 79) {
                            document.getElementById("disgrade").innerHTML = "A-"
                        }
                        else if (marks1 >= 70 && marks1 <= 74) {
                            document.getElementById("disgrade").innerHTML = "B+"
                        }
                        else if (marks1 >= 65 && marks1 <= 69) {
                            document.getElementById("disgrade").innerHTML = "B"
                        }
                        else if (marks1 >= 60 && marks1 <= 64) {
                            document.getElementById("disgrade").innerHTML = "B-"
                        }
                        else if (marks1 >= 55 && marks1 <= 59) {
                            document.getElementById("disgrade").innerHTML = "C+"
                        }
                        else if (marks1 >= 50 && marks1 <= 54) {
                            document.getElementById("disgrade").innerHTML = "C"
                        }
                        else if (marks1 >= 40 && marks1 <= 49) {
                            document.getElementById("disgrade").innerHTML = "D"
                        }
                        else if (marks1 >= 0 && marks1 <= 39) {
                            document.getElementById("disgrade").innerHTML = "F"
                        }
                        else {
                            document.getElementById("disgrade").innerHTML = "-"
                        }

                        //set grade for subject 2
                        if (marks2 >= 80 && marks2 <= 100) {
                            document.getElementById("disgrade2").innerHTML = "A";
                        }
                        else if (marks2 >= 75 && marks2 <= 79) {
                            document.getElementById("disgrade2").innerHTML = "A-"
                        }
                        else if (marks2 >= 70 && marks2 <= 74) {
                            document.getElementById("disgrade2").innerHTML = "B+"
                        }
                        else if (marks2 >= 65 && marks2 <= 69) {
                            document.getElementById("disgrade2").innerHTML = "B"
                        }
                        else if (marks2 >= 60 && marks2 <= 64) {
                            document.getElementById("disgrade2").innerHTML = "B-"
                        }
                        else if (marks2 >= 55 && marks2 <= 59) {
                            document.getElementById("disgrade2").innerHTML = "C+"
                        }
                        else if (marks2 >= 50 && marks2 <= 54) {
                            document.getElementById("disgrade2").innerHTML = "C"
                        }
                        else if (marks2 >= 40 && marks2 <= 49) {
                            document.getElementById("disgrade2").innerHTML = "D"
                        }
                        else if (marks2 >= 0 && marks2 <= 39) {
                            document.getElementById("disgrade2").innerHTML = "F"
                        }
                        else {
                            document.getElementById("disgrade2").innerHTML = "-"
                        }

                        //set grade for subject 3
                        if (marks3 >= 80 && marks3 <= 100) {
                            document.getElementById("disgrade3").innerHTML = "A";
                        }
                        else if (marks3 >= 75 && marks3 <= 79) {
                            document.getElementById("disgrade3").innerHTML = "A-"
                        }
                        else if (marks3 >= 70 && marks3 <= 74) {
                            document.getElementById("disgrade3").innerHTML = "B+"
                        }
                        else if (marks3 >= 65 && marks3 <= 69) {
                            document.getElementById("disgrade3").innerHTML = "B"
                        }
                        else if (marks3 >= 60 && marks3 <= 64) {
                            document.getElementById("disgrade3").innerHTML = "B-"
                        }
                        else if (marks3 >= 55 && marks3 <= 59) {
                            document.getElementById("disgrade3").innerHTML = "C+"
                        }
                        else if (marks3 >= 50 && marks3 <= 54) {
                            document.getElementById("disgrade3").innerHTML = "C"
                        }
                        else if (marks3 >= 40 && marks3 <= 49) {
                            document.getElementById("disgrade3").innerHTML = "D"
                        }
                        else if (marks3 >= 0 && marks3 <= 39) {
                            document.getElementById("disgrade3").innerHTML = "F"
                        }
                        else {
                            document.getElementById("disgrade3").innerHTML = "-"
                        }

                        //calculate total
                        var totalmark;
                        totalmark = Number(marks1) + Number(marks2) + Number(marks3);
                        document.getElementById("distotal").innerHTML = totalmark;

                        //calculate average
                        var averagemark;
                        averagemark = (Number(marks1) + Number(marks2) + Number(marks3)) / 3;
                        document.getElementById("disaverage").innerHTML = averagemark;

                        // if mark less than 40 then the text color become red
                        if (averagemark < 40) {
                            document.getElementById("disaverage").style.color = "red";
                        }

                    } //end check marks input
                    else {
                        alert('Please enter your marks.');
                        document.getElementById('form2').hidden = true;
                        location.reload()
                    }
                } //end check credit hours input
                else {
                    alert('Please enter your credit hours.');
                    document.getElementById('form2').hidden = true;
                    location.reload()
                }
            } //end check subject name input
            else {
                alert('Please enter your subject name.');
                document.getElementById('form2').hidden = true;
                location.reload()
            }
        } //end check subject code input
        else {
            alert('Please enter subject code.');
            document.getElementById('form2').hidden = true;
            location.reload()
        }
    } // end check calculate
    else {
        alert('Sorry, Please try again.');
    }
}