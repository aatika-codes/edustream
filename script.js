
function validateLogin() {
    var reg = document.getElementById('regNo').value;
    if (reg === "") {
        alert("Please enter your Registration Number!");
    } else {
        alert("Login successful!");
        window.location.href = "index.html";
    }
}
function checkMyGrade() {
    const marksInput = document.getElementById("marksInput");
    const display = document.getElementById("resultDisplay");
    let marks = parseInt(marksInput.value);

    // Validation
    if (isNaN(marks) || marks < 0 || marks > 100) {
        display.innerHTML = "❌ Please enter a valid number between 0 and 100.";
        display.style.color = "#ff4d4d";
        return;
    }

    display.style.color = "white";
    let grade = "";
    let message = "";

    // NIELIT Logic
    if (marks >= 85) {
        grade = "<span style='color:gold; font-weight:bold;'>S (Superb)</span>";
        message = "🎉 Outstanding! You are in the top bracket.";
    } else if (marks >= 75) {
        grade = "<span style='color:#e50914;'>A</span>";
        message = "Great job! Excellent performance.";
    } else if (marks >= 65) {
        grade = "<span style='color:#e50914;'>B</span>";
        message = "Well done! A very good score.";
    } else if (marks >= 55) {
        grade = "<span style='color:#e50914;'>C</span>";
        message = "Good effort. You have cleared it fairly.";
    } else if (marks >= 50) {
        grade = "<span style='color:#e50914;'>D</span>";
        message = "Satisfactory. You have passed the module.";
    } else {
        grade = "<span style='color:gray;'>F (Fail)</span>";
        message = "Keep practicing! You need 50% to pass.";
    }

    display.innerHTML = `<strong>Result: ${grade}</strong><br><small>${message}</small>`;
}
// Social Media Redirection Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // Instagram Connection
    const instaBtn = document.getElementById('instaBtn');
    if(instaBtn) {
        instaBtn.onclick = function() {
            window.open('https://www.instagram.com/aatikahaslowbp', '_blank');
        };
    }

    // Facebook Connection
    const fbBtn = document.getElementById('fbBtn');
    if(fbBtn) {
        fbBtn.onclick = function() {
            // Replace with your actual FB link
            window.open('https://www.facebook.com/yourprofile', '_blank');
        };
    }
});
const allSyllabus = {
    'M1': [
        "Introduction to Computer & Operating Systems",
        "Word Processing (LibreOffice Writer)",
        "Spreadsheet (LibreOffice Calc)",
        "Presentation (LibreOffice Impress)",
        "Introduction to Internet and WWW",
        "E-mail, Social Networking & e-Governance",
        "Digital Financial Tools and Applications",
        "Overview of FutureSkills and Cyber Security"
    ],
    'M2': [
        "Introduction to Web Design & Editors",
        "HTML Basics (Structure, Tags, Tables, Forms)",
        "Cascading Style Sheets (CSS3 & Selectors)",
        "CSS Frameworks (W3.CSS & Bootstrap)",
        "JavaScript & HTML DOM Manipulation",
        "Photo Editor (GIMP/Photoshop Basics)",
        "Web Publishing & Browsing Protocols"
    ],
    'M3': [
        "Introduction to Programming & Algorithms",
        "Python Basics (Keywords, Variables, Data Types)",
        "Operators, Expressions & Python Statements",
        "Sequence Data Types (Strings, Lists, Tuples)",
        "Functions, Scopes and Modules",
        "File Handling in Python",
        "NumPy Basics"
    ],
    'M4': [
        "Introduction to IoT: Ecosystem and Components",
        "Sensors, Actuators, and Microcontrollers",
        "Building IoT Applications (Arduino/Raspberry Pi)",
        "IoT Protocols (MQTT, HTTP, CoAP)",
        "C Programming Basics for IoT",
        "Cloud Computing and Data Analytics",
        "IoT Security and Future Trends"
    ]
};

function openSyllabus(moduleCode) {
    const titleMap = {
        'M1': "M1-R5: IT Tools & Network Basics",
        'M2': "M2-R5: Web Designing & Publishing",
        'M3': "M3-R5: Python Programming",
        'M4': "M4-R5: Internet of Things (IoT)"
    };
    
    // Update Title
    document.getElementById("moduleTitle").innerText = titleMap[moduleCode];
    
    // Update List
    const list = document.getElementById("syllabusList");
    list.innerHTML = ""; // Clear old list
    
    allSyllabus[moduleCode].forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `<span style="color: #e50914; margin-right: 10px;">•</span> ${item}`;
        list.appendChild(li);
    });

    // Show the Pop-up
    document.getElementById("syllabusPopUp").style.display = "block";
}

function closePopUp() {
    document.getElementById("syllabusPopUp").style.display = "none";
}


