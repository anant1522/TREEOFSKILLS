let selectedAge = null;
let selectedSubject = null;
let selectedStage = null;

const recommendedSubjectsByAge = {
    "3-4": ["Kathak", "Chess", "Fine Arts", "Western Dance and Fitness", "Hindustani Classical Singing"],
    "5-6": ["Kathak", "Western Dance and Fitness", "Fine Arts", "Hindustani Classical Singing", "Table Tennis", "Chess", "Piano"],
    "7-10": ["Kathak", "Western Dance and Fitness", "Fine Arts", "Table Tennis", "Guitar", "Chess", "Piano", "Hindustani Classical Singing"],
    "11+": ["Western Dance and Fitness", "Piano", "Table Tennis", "Chess", "Guitar", "Kathak", "Fine Arts", "Hindustani Classical Singing"]
};

const coursesBySubject = {
    "Kathak": {
        "3-4": ["Kathak Course 1", "Kathak Course 2"],
        "5-6": ["Prebasic Kathak", "Preintermediate Kathak", "Preadvance Kathak"],
        "7-10": ["Basic Kathak", "Intermediate Kathak"]
    },
    "Chess": {
        "3-4": ["Chess Course 1", "Chess Course 2", "Chess Course 3", "Chess Course 4"],
        "7-10": ["Beginners Chess", "Preintermediate Chess", "Preadvance Chess"]
    },
    "Western Dance and Fitness": ["Dance Basics", "Fitness Dance Fusion"],
    "Piano": ["Piano Level 1", "Piano Level 2", "Piano Masterclass"],
    "Table Tennis": ["TT Course 1", "TT Course 2", "TT Course 3", "TT Course 4"],
    "Guitar": ["Basics Guitar", "Preintermediate Guitar", "Preadvance Guitar"],
};

const stagesByCourse = {
    "Chess Course 1": ["Stage 1", "Stage 2"],
    "Chess Course 2": ["Stage 3", "Stage 4"],
    "Chess Course 3": ["Stage 5", "Stage 6", "Stage 7"],
    "Chess Course 4": ["Stage 8", "Stage 9"],

    "TT Course 1": ["Stage 1", "Stage 2"],
    "TT Course 2": ["Stage 3", "Stage 4"],
    "TT Course 3": ["Stage 5", "Stage 6"],
    "TT Course 4": ["Stage 7", "Stage 8"],

    "Beginners Chess": ["Stage 1", "Stage 2", "Stage 3"],
    "Preintermediate Chess": ["Stage 4", "Stage 5", "Stage 6"],
    "Preadvance Chess": ["Stage 7", "Stage 8", "Stage 9"],

    "Basics Guitar": ["Stage 1", "Stage 2"],
    "Preintermediate Guitar": ["Stage 3", "Stage 4"],
    "Preadvance Guitar": ["Stage 5"],

    "Kathak Course 1": ["Stage 1", "Stage 2", "Stage 3"],
    "Kathak Course 2": ["Stage 4", "Stage 5", "Stage 6"],

    "Prebasic Kathak": ["Stage 1", "Stage 2"],
    "Preintermediate Kathak": ["Stage 3", "Stage 4", "Stage 5"],
    "Preadvance Kathak": ["Stage 6", "Stage 7", "Stage 8"],

    "Basic Kathak": ["Stage 1", "Stage 2"],
    "Intermediate Kathak": ["Stage 3", "Stage 4", "Stage 5"],
};

const sessionAvailability = {
    "Basics Guitar": {
        session: "Total Session: 54-60",
        stages: {
            "Stage 1": "Session Available: 24-30",
            "Stage 2": "Session Available: 24"
        }
    },
    "Preintermediate Guitar": {
        session: "Total Session: 60",
        stages: {
            "Stage 3": "Session Available: 30",
            "Stage 4": "Session Available: 30"
        }
    },
    "Preadvance Guitar": {
        session: "Total Session: 30",
        stages: {
            "Stage 5": "Session Available: 30"
        }
    },
    "Basic Kathak": {
        session: "Total Session: 75",
        stages: {
            "Stage 1": "Session Available: 25",
            "Stage 2": "Session Available: 50"
        }
    },
    "Intermediate Kathak": {
        session: "Total Session: 200",
        stages: {
            "Stage 3": "Session Available: 75",
            "Stage 4": "Session Available: 100",
            "Stage 5": "Session Available: 125"
        }
    },
    "Prebasic Kathak": {
        session: "Total Session: 75",
        stages: {
            "Stage 1": "Session Available: 25",
            "Stage 2": "Session Available: 50"
        }
    },
    "Preintermediate Kathak": {
        session: "Total Session: 375",
        stages: {
            "Stage 3": "Session Available: 100",
            "Stage 4": "Session Available: 125",
            "Stage 5": "Session Available: 150"
        }
    },
    "Preadvance Kathak": {
        session: "Total Session: 600",
        stages: {
            "Stage 6": "Session Available: 175",
            "Stage 7": "Session Available: 175 + 25",
            "Stage 8": "Session Available: 200 + 25"
        }
    },
    "Kathak Course 1": {
        session: "Total Session: 150",
        stages: {
            "Stage 1": "Session Available: 25",
            "Stage 2": "Session Available: 50",
            "Stage 3": "Session Available: 75"
        }
    },
    "Kathak Course 2": {
        session: "Total Session: 150",
        stages: {
            "Stage 4": "Session Available: 100",
            "Stage 5": "Session Available: 125",
            "Stage 6": "Session Available: 150"
        }
    },

    "TT Course 1": {
        session: "Total Session: 70",
        stages: {
            "Stage 1": "Session Available: 40",
            "Stage 2": "Session Available: 30"
        }
    },
    "TT Course 2": {
        session: "Total Session: 60",
        stages: {
            "Stage 3": "Session Available: 20",
            "Stage 4": "Session Available: 40"
        }
    },
    "TT Course 3": {
        session: "Total Session: 70",
        stages: {
            "Stage 5": "Session Available: 40",
            "Stage 6": "Session Available: 30"
        }
    },
    "TT Course 4": {
        session: "Total Session: 100",
        stages: {
            "Stage 7": "Session Available: 30 + 20",
            "Stage 8": "Session Available: 50"
        }
    },
    "Beginners Chess": {
        session: "Total Session: 30",
        stages: {
            "Stage 1": "Session Available: 0-10",
            "Stage 2": "Session Available: 10-20",
            "Stage 3": "Session Available: 20-30"
        }
    },
    "Preintermediate Chess": {
        session: "Total Session: 45",
        stages: {
            "Stage 4": "Session Available: 30-45",
            "Stage 5": "Session Available: 45-70",
            "Stage 6": "Session Available: 70-75"
        }
    },
    "Preadvance Chess": {
        session: "Total Session: 45",
        stages: {
            "Stage 7": "Session Available: 75-100",
            "Stage 8": "Session Available: 100-110",
            "Stage 9": "Session Available: 110-120"
        }
    },

    "Chess Course 1": {
        session: "Total Session: 40",
        stages: {
            "Stage 1": "Session Available: 1-20",
            "Stage 2": "Session Available: 20-40"
        }
    },
    "Chess Course 2": {
        session: "Total Session: 40",
        stages: {
            "Stage 3": "Session Available: 40-60",
            "Stage 4": "Session Available: 60-80"
        }
    },
    "Chess Course 3": {
        session: "Total Session: 85",
        stages: {
            "Stage 5": "Session Available: 80-110",
            "Stage 6": "Session Available: 110-120",
            "Stage 7": "Session Available: 120-165"
        }
    },
    "Chess Course 4": {
        session: "Total Session: 65",
        stages: {
            "Stage 8": "Session Available: 165-200",
            "Stage 9": "Session Available: 200-230"
        }
    },
     
};


function selectAgeGroup(button, age) {
    const groupElement = button.parentElement;
    const buttons = groupElement.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedAge = age;
    updateRecommendedSubjects();
}

function updateRecommendedSubjects() {
    const recommendedSubjects = recommendedSubjectsByAge[selectedAge] || [];
    const container = document.getElementById("recommended-subjects");
    container.innerHTML = recommendedSubjects.map(subject => `
        <button onclick="selectButton(this, 'subject', '${subject}')">${subject}</button>
    `).join('');
}

function selectButton(button, group, value) {
    const groupElement = button.parentElement;
    const buttons = groupElement.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    if (group === 'subject') {
        selectedSubject = value;
        highlightSubjectInBothSections(value);
        displayCourses(value);
    } else if (group === 'course') {
        selectedCourse = value; // Ensure selectedCourse is set here
        displayStages(value);
    } else if (group === 'stage') {
        selectedStage = value; // Ensure selectedStage is set here
        displayStageDetails(value);
    }
}


function highlightSubjectInBothSections(subject) {
    const allButtons = document.querySelectorAll("#all-subjects button, #recommended-subjects button");
    allButtons.forEach(button => {
        if (button.textContent === subject) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

function displayCourses(subject) {
    let courses = [];

    if (["Kathak", "Chess"].includes(subject)) {
        // Dynamically load courses for Kathak or Chess based on age group
        const subjectCourses = coursesBySubject[subject] || {};
        courses = subjectCourses[selectedAge] || [];
    } else {
        // Other subjects like Table Tennis or Guitar
        courses = coursesBySubject[subject] || [];
    }

    const container = document.getElementById("course-group");
    container.innerHTML = courses.map(course => {
        const sessionInfo = sessionAvailability[course]?.session || "Session Available: N/A";
        return `
            <button onclick="selectButton(this, 'course', '${course}')">
                ${course} <br><small>${sessionInfo}</small>
            </button>
        `;
    }).join('');
    container.style.display = "flex";
}

function displayStages(course) {
    const stages = stagesByCourse[course] || [];
    const container = document.getElementById("stage-group");
    container.innerHTML = stages.map(stage => {
        const sessionInfo = sessionAvailability[course]?.stages[stage] || "Session Available: N/A";
        return `
            <button onclick="selectButton(this, 'stage', '${stage}')">
                ${stage} <br><small>${sessionInfo}</small>
            </button>
        `;
    }).join('');
    container.style.display = "flex";
}

function displayStageDetails(stage) {
    selectedStage = stage; // Save the selected stage for button actions
    document.getElementById("details").style.display = "block";
    document.getElementById("content").innerHTML = getStageDetails(selectedSubject, stage);
}

// Function to handle Test button (opens the test PDF from an external URL)
function handleTest() {
    if (selectedSubject && selectedCourse && selectedStage) {
        // Define the mapping of test PDFs for each course and stage
        const testPdfUrls = {
            "Kathak Course 1": {
                "Stage 1": "https://example.com/tests/KathakCourse1-Stage1.pdf",
                "Stage 2": "https://example.com/tests/KathakCourse1-Stage2.pdf",
                "Stage 3": "https://example.com/tests/KathakCourse1-Stage3.pdf"
            },
            "Kathak Course 2": {
                "Stage 4": "https://example.com/tests/KathakCourse2-Stage4.pdf",
                "Stage 5": "https://example.com/tests/KathakCourse2-Stage5.pdf",
                "Stage 6": "https://example.com/tests/KathakCourse2-Stage6.pdf"
            },
            "Beginners Chess": {
                "Stage 1": "https://example.com/tests/BeginnersChess-Stage1.pdf",
                "Stage 2": "https://example.com/tests/BeginnersChess-Stage2.pdf",
                "Stage 3": "https://example.com/tests/BeginnersChess-Stage3.pdf"
            },
            // Add mappings for all other courses and stages
        };

        // Retrieve the test URL based on the selected course and stage
        const courseStages = testPdfUrls[selectedCourse];
        if (courseStages) {
            const testPdfUrl = courseStages[selectedStage];
            if (testPdfUrl) {
                window.open(testPdfUrl, "_blank"); // Open the PDF in a new tab
            } else {
                alert(`No test available for ${selectedCourse} - ${selectedStage}`);
            }
        } else {
            alert(`No tests are defined for the course: ${selectedCourse}`);
        }
    } else {
        alert("Please select a subject, course, and stage.");
    }
}

// Function to handle Download Stage button (downloads the stage details as a text file)
function handleDownload() {
    if (selectedStage) {
        // Check if jsPDF is loaded
        if (!window.jspdf) {
            alert("Error: jsPDF library is not loaded.");
            return;
        }

        const { jsPDF } = window.jspdf; // Access jsPDF
        const pdf = new jsPDF();

        // Get the content to download
        const stageContent = document.getElementById("content").innerText; // Fetch text content

        // Add a title and content with proper formatting
        const title = `${selectedStage} Details`;
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        pdf.text(title, 10, 20); // Title at the top

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
        const margin = 10;
        const pageWidth = pdf.internal.pageSize.getWidth();
        const contentWidth = pageWidth - margin * 2;

        const splitText = pdf.splitTextToSize(stageContent, contentWidth);
        pdf.text(splitText, margin, 30); // Add content below the title

        // Save the PDF
        pdf.save(`${selectedStage}-details.pdf`);
    } else {
        alert("No stage selected.");
    }
}


function getStageDetails(subject, stage) {
    if (subject === "Kathak") {
        if (selectedAge === "3-4" && stage === "Stage 1") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Bhumi Pranam (Namaskar):</li>
                <ul>
                    <li>Utpatti</li>
                    <li>Samput</li>
                </ul>
                <li>Introduction to Kathak</li>
                <li>Basic Body Strengthening Exercises</li>
                <li>Tatkaar (Footwork):</li>
                <ul>
                    <li>8-count (Slow), Right & Left</li>
                </ul>
                <li>Choreography Concepts:</li>
                <ul>
                    <li>Introduction to simple rhythm patterns</li>
                </ul>
            </ul>
            
            <strong>Tests:</strong>
            <ul>
                <li>Class Test: After Stage 1 syllabus completion</li>
                <ul>
                    <li>Test Type: Prep Test 1 (10 marks)</li>
                </ul>
            </ul>
    
            <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
            <ul>
                <li>Kathak Notebook: Students maintain a notebook for assignments and notes.</li>
                <li>Performances: Mini-performances within class for practice.</li>
            </ul>
    
            <strong>Creative Sessions:</strong>
            <ul>
                <li>Encouraging students to express their own dance interpretations and simple choreography ideas.</li>
            </ul>
    
            <strong>Expected Results (Curated Videos, Taught in Class):</strong>
            <ul>
                <li>Body Strengthening Exercise Video</li>
                <li>Tatkaar Performance Video (Slow, Right & Left)</li>
            </ul>
    
            <strong>Not Curated (Student-Created Videos):</strong>
            <ul>
                <li>Students create and submit a video of a basic dance segment or a personal creation.</li>
                <p>For more details, check out the tutorial below:</p>
                <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/mS_PS_s3Va4" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </ul>
    
            

        `;
          }  else if (selectedAge === "3-4" && stage === "Stage 2") {
                return `
                <strong>Content to be Covered:</strong>
            <ul>
                <li>Tatkaar on Teentaal (Slow)</li>
                <li>Hastak (Hand Movements):</li>
                <ul>
                    <li>Learning 2 basic hand gestures</li>
                </ul>
                <li>Tatkaar on Kathak Bols (Slow)</li>
            </ul>
    
            <strong>Tests:</strong>
            <ul>
                <li>Class Test: After Stage 2 syllabus completion</li>
                <ul>
                    <li>Test Type: Prep Test 2 (10 marks)</li>
                </ul>
            </ul>
    
            <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
            <ul>
                <li>Regular Competitions: Small in-class performances for progress tracking.</li>
                <li>Kathak Notebook: Maintain for assignments and progress notes.</li>
            </ul>
    
            <strong>Creative Sessions:</strong>
            <ul>
                <li>Enhancing students’ ability to create short sequences using learned steps.</li>
            </ul>
    
            <strong>Expected Results (Curated Videos, Taught in Class):</strong>
            <ul>
                <li>Tatkaar Performance Video (Slow, Teentaal)</li>
                <li>Hastak Performance Video (2 Gestures)</li>
            </ul>
    
            <strong>Not Curated (Student-Created Videos):</strong>
            <ul>
                <li>Students create a short dance incorporating hand movements and footwork.</li>
            </ul>
        `;
            }  else if (selectedAge === "3-4" && stage === "Stage 3") {
                return `
                <strong>Content to be Covered:</strong>
                <ul>
                    <li>Tatkaar on Teentaal:</li>
                    <ul>
                        <li>Slow & Double Time</li>
                    </ul>
                    <li>Tatkaar on Kathak Bols:</li>
                    <ul>
                        <li>Slow & Double Time</li>
                    </ul>
                    <li>Chakkar (Spinning):</li>
                    <ul>
                        <li>5 Taps, Footwork Only, Slow</li>
                    </ul>
                </ul>
        
                <strong>Tests:</strong>
                <ul>
                    <li>Class Test: After Stage 3 syllabus completion</li>
                    <ul>
                        <li>Test Type: Prep Test 3 (10 marks)</li>
                    </ul>
                </ul>
        
                <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
                <ul>
                    <li>Internal Performances: Practice and showcase of learned steps.</li>
                    <li>Competitions: Peer assessments and performances.</li>
                </ul>
        
                <strong>Creative Sessions:</strong>
                <ul>
                    <li>Students create simple choreography using Tatkaar, Kathak Bols, and Chakkar.</li>
                </ul>
        
                <strong>Expected Results (Curated Videos, Taught in Class):</strong>
                <ul>
                    <li>Tatkaar Performance Video (Slow & Double Time)</li>
                    <li>Chakkar Performance Video (5 Taps, Slow)</li>
                </ul>
        
                <strong>Not Curated (Student-Created Videos):</strong>
                <ul>
                    <li>Students demonstrate Chakkar and Tatkaar in a video performance.</li>
                </ul>
            `;
            }  else if (selectedAge === "3-4" && stage === "Stage 4") {
                return `
                <strong>Content to be Covered:</strong>
                <ul>
                    <li>Chakkar (5 Taps with Hands, Slow & Double)</li>
                    <li>Mudra:</li>
                    <ul>
                        <li>Asanyukta Mudra (Pataka, Aaral)</li>
                        <li>Sanyukta Mudra (Anjali)</li>
                    </ul>
                    <li>Teentaal by Hand (Rhythmic hand gestures for Teentaal)</li>
                </ul>
        
                <strong>Tests:</strong>
                <ul>
                    <li>Class Test: After Stage 4 syllabus completion</li>
                    <ul>
                        <li>Test Type: Prep Test 4 (10 marks)</li>
                    </ul>
                </ul>
        
                <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
                <ul>
                    <li>In-house Competitions: Practice performances for in-class learning.</li>
                    <li>External Performances: Participate in local Kathak performances for exposure.</li>
                </ul>
        
                <strong>Creative Sessions:</strong>
                <ul>
                    <li>Exploration of different ways to use mudras in storytelling.</li>
                </ul>
        
                <strong>Expected Results (Curated Videos, Taught in Class):</strong>
                <ul>
                    <li>Chakkar Performance Video (5 Taps, Slow & Double)</li>
                    <li>Teentaal by Hand Performance Video</li>
                </ul>
        
                <strong>Not Curated (Student-Created Videos):</strong>
                <ul>
                    <li>Students create a video including Chakkar and Mudra.</li>
                </ul>
            `;
            }  else if (selectedAge === "3-4" && stage === "Stage 5") {
                return `
                <strong>Content to be Covered:</strong>
                <ul>
                    <li>Chakkar with Hands (5 Taps, Slow & Double)</li>
                    <li>Tukda 1:</li>
                    <ul>
                        <li>Only Hastak</li>
                        <li>Full Dance Piece</li>
                    </ul>
                </ul>
        
                <strong>Tests:</strong>
                <ul>
                    <li>Class Test: After Stage 5 syllabus completion</li>
                    <ul>
                        <li>Test Type: Prep Test 5 (10 marks)</li>
                    </ul>
                </ul>
        
                <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
                <ul>
                    <li>Attending Performances: Watch Kathak performances by established artists.</li>
                    <li>In-house Performances: Showcase choreography in class.</li>
                </ul>
        
                <strong>Creative Sessions:</strong>
                <ul>
                    <li>In-depth exploration of choreography and storytelling through dance.</li>
                </ul>
        
                <strong>Expected Results (Curated Videos, Taught in Class):</strong>
                <ul>
                    <li>Chakkar Performance Video (With Hands, Slow & Double)</li>
                    <li>Tukda 1 Full Performance Video</li>
                </ul>
        
                <strong>Not Curated (Student-Created Videos):</strong>
                <ul>
                    <li>Students create a choreography video with their own interpretation of Tukda 1.</li>
                </ul>
            `;
            }  else if (selectedAge === "3-4" && stage === "Stage 6") {
                return `
                <strong>Content to be Covered:</strong>
                <ul>
                    <li>Chakkar with Hands (5 Taps, Slow & Double)</li>
                    <li>Tukda 1:</li>
                    <ul>
                        <li>Only Hastak</li>
                        <li>Full Dance Piece</li>
                    </ul>
                </ul>
        
                <strong>Tests:</strong>
                <ul>
                    <li>Class Test: After Stage 6 syllabus completion</li>
                    <ul>
                        <li>Test Type: Prep Test 5 (10 marks)</li>
                    </ul>
                </ul>
        
                <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
                <ul>
                    <li>Kathak Artist Performances: Experience performances for knowledge and stage experience.</li>
                    <li>External Performances: Public performances for stage exposure.</li>
                </ul>
        
                <strong>Creative Sessions:</strong>
                <ul>
                    <li>Encourage students to compose original choreography and integrate learned techniques.</li>
                </ul>
        
                <strong>Expected Results (Curated Videos, Taught in Class):</strong>
                <ul>
                    <li>Chakkar Performance Video (With Hands, Slow & Double)</li>
                    <li>Tukda 1 Full Performance Video</li>
                </ul>
        
                <strong>Not Curated (Student-Created Videos):</strong>
                <ul>
                    <li>Students will create a final piece showcasing all learned techniques.</li>
                </ul>
                <strong>General Notes for All Stages:</strong>
                <ul>
                    <li><strong>Creative Sessions:</strong> Each stage will emphasize improvisation and choreography creation, fostering creative freedom.</li>
                    <li><strong>Excursions and Performances:</strong> Essential for real-world exposure and building confidence.</li>
                    <li><strong>Competitions:</strong> Stage-wise competitions will be organized to motivate and assess student progress.</li>
                    <li><strong>Performance Videos:</strong> Curated performance videos will track progress and build a dance portfolio.</li>
                </ul>
            `;
                
        } else if (selectedAge === "5-6" && stage === "Stage 1") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Bhumi Pranam/ Namaskar (Month 1, Term 1)</li>
                <li>Tatkaar (count 8-8, R-L, slow + double) (Month 1, Term 2)</li>
                <li>Tatkaar on Kathak Bols (slow + double) (Month 1, Term 3)</li>
                <li>Urdhava Hastak (Month 1, Term 4)</li>
                <li>5-Step Chakkar (slow + double) (Month 1, Term 5)</li>
                <li>Hasta Mudra: Definition & Introduction (Month 1, Term 6)</li>
            </ul>
    
            <strong>Tests:</strong>
            <ul>
                <li>Basic Test 1</li>
                <ul>
                    <li>1 class test (10 marks) after syllabus completion.</li>
                </ul>
            </ul>
    
            <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
            <ul>
                <li>Maintaining a Kathak notebook for all class assignments.</li>
            </ul>
    
            <strong>Expected Results:</strong>
            <ul>
                <li>Curated (Taught in Class):</li>
                <ul>
                    <li>Performance piece on Tatkaar (slow + medium, set in Teentaal Vilambit Laya).</li>
                    <li>Performance piece on 5-Step Chakkar & Urdhava Hastak.</li>
                </ul>
                <li>Not Curated (Created by Student):</li>
                <ul>
                    <li>Student-generated creative videos based on learned content.</li>
                    <p>For more details, check out the tutorial below:</p>
                    <div class="video-wrapper">
                        <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/sZXGcWJYpvs" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <br>
                    <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/yM3gWgHZ7sI" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                </ul>
            </ul>
        `;

        } else if (selectedAge === "5-6" && stage === "Stage 2") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Tatkaar (count 8-8, R-L, slow-double-fast) (Month 1, Term 2)</li>
                <li>Tatkaar on Kathak Bols (slow-double-fast) (Month 1, Term 3)</li>
                <li>4-Step Chakkar (slow + double) (Month 6, Term 2)</li>
                <li>5-Step Chakkar (slow-double-fast) (Month 1, Term 6)</li>
                <li>Tukda 1 (Month 2, Term 3)</li>
            </ul>
    
            <strong>Tests:</strong>
            <ul>
                <li>Basic Test 2</li>
                <ul>
                    <li>1 class test (10 marks) after syllabus completion.</li>
                </ul>
            </ul>
    
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>Internal performances for experience.</li>
                <li>Regular competitions among classmates.</li>
            </ul>
    
            <strong>Expected Results:</strong>
            <ul>
                <li>Curated:</li>
                <ul>
                    <li>Performance piece on Tatkaar (Teentaal Vilambit Laya).</li>
                    <li>Performance piece on 5-Step Chakkar (Teentaal Vilambit Laya).</li>
                </ul>
                <li>Not Curated:</li>
                <ul>
                    <li>Creative student compositions in video form.</li>
                    <p>For more details, check out the tutorial below:</p>
                    <div class="video-wrapper">
                        <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/yk_xojKX3vQ" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </ul>
            </ul>
        `;
        } else if (selectedAge === "5-6" && stage === "Stage 3") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>2 New Hand Movements (Month 4, Term 6)</li>
                <li>4-Step Chakkar (slow-double-fast) (Month 6, Term 2)</li>
                <li>Tukda 2 (set in Teentaal) (Month 3, Term 3)</li>
                <li>Asanyukta Hasta Mudras (Mayur & Ardha Chandra) (Month 4, Term 7)</li>
                <li>Salami (set in Teentaal) (Month 8, Term 3)</li>
            </ul>
    
            <strong>Tests:</strong>
            <ul>
                <li>Basic Test 3 & Basic Test 4</li>
                <ul>
                    <li>2 class tests (20 marks each).</li>
                </ul>
            </ul>
    
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>External performances at outside events.</li>
                <li>Attending Kathak artists’ performances for better understanding and stage exposure.</li>
            </ul>
    
            <strong>Expected Results:</strong>
            <ul>
                <li>Curated:</li>
                <ul>
                    <li>Performance piece on 2 New Hand Movements & 4-Step Chakkar.</li>
                    <li>Performance piece on Tukda 2, Asanyukta Hasta Mudras, & Salami (Teentaal).</li>
                    <p>For more details, check out the tutorial below:</p>
                    <div class="video-wrapper">
                        <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/YHtIqJRi21o" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </ul>
            </ul>
        `;
        } else if (selectedAge === "5-6" && stage === "Stage 4") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Tal Hasta Chakkar (Month 3, Term 2)</li>
                <li>2 New Hand Movements (Month 4, Term 6)</li>
                <li>Sanyukta Hasta Mudras (Dola & Pushput) (Month 5, Term 5)</li>
                <li>Teentaal That (Month 4, Term 5)</li>
                <li>Teentaal Aamad (Month 5, Term 5)</li>
            </ul>
    
            <strong>Tests:</strong>
            <ul>
                <li>Basic Test 5</li>
                <ul>
                    <li>1 class test (10 marks) after syllabus completion.</li>
                </ul>
            </ul>
    
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>Participation in external competitions for wider exposure.</li>
            </ul>
    
            <strong>Expected Results:</strong>
            <ul>
                <li>Curated:</li>
                <ul>
                    <li>Performance piece on Tal Hasta Chakkar & 2 New Hand Movements.</li>
                    <li>Performance piece on That, Aamad, & Sanyukta Hasta Mudras (Dola & Pushput).</li>
                </ul>
            </ul>
        `;
        } else if (selectedAge === "5-6" && stage === "Stage 5") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>3-Step Chakkar (slow-double) (Month 2, Term 2)</li>
                <li>Tukda 3 (Month 7, Term 2)</li>
                <li>Madhya Hastak (Month 2, Term 1)</li>
                <li>Teentaal by Hand (Month 3, Term 2)</li>
                <li>Guru Vandana (Month 4, Term 4)</li>
            </ul>
    
            <strong>Tests:</strong>
            <ul>
                <li>Basic Test 6</li>
                <ul>
                    <li>1 class test (10 marks) after syllabus completion.</li>
                </ul>
            </ul>
    
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>Participation in inter-school dance competitions.</li>
            </ul>
    
            <strong>Expected Results:</strong>
            <ul>
                <li>Curated:</li>
                <ul>
                    <li>Performance piece on 3-Step Chakkar & Madhya Hastak.</li>
                    <li>Performance piece on Guru Vandana, Teentaal by Hand, & Tukda (Teentaal).</li>
                </ul>
            </ul>
        `;   
             } else if (selectedAge === "5-6" && stage === "Stage 6") {
                return `
                <strong>Content to be Covered:</strong>
                <ul>
                    <li>3-Step Chakkar (slow-double-fast) (Month 2, Term 2)</li>
                    <li>Tukda 4 (Month 7, Term 3)</li>
                    <li>Chakkardaar Toda (Month 11, Term 2)</li>
                    <li>Hastak Ekgun & Dugun (Month 9, Term 2)</li>
                    <li>All Hastak with Layakari (Month 10, Term 1)</li>
                </ul>
        
                <strong>Tests:</strong>
                <ul>
                    <li>Basic Test 7</li>
                    <ul>
                        <li>1 class test (10 marks).</li>
                    </ul>
                </ul>
        
                <strong>Excursions/Competitions:</strong>
                <ul>
                    <li>Attendance in Kathak workshops to understand nuances.</li>
                </ul>
        
                <strong>Expected Results:</strong>
                <ul>
                    <li>Curated:</li>
                    <ul>
                        <li>Performance piece on 3-Step Chakkar, All Hastak with Layakari, & Hastak Ekgun/Dugun.</li>
                        <li>Performance piece on Tukda 4 & Chakkardaar Toda.</li>
                    </ul>
                </ul>
            `;
            } else if (selectedAge === "5-6" && stage === "Stage 7") {
                return `
                <strong>Content to be Covered:</strong>
                <ul>
                    <li>2-Step Chakkar: Mastery of technique with balance and rhythm (Month 5, Term 3)</li>
                    <li>Tukda 5: Complex footwork and rhythmic timing (Month 8, Term 4)</li>
                    <li>Tukda 6: Advanced sequences with speed and expression (Month 9, Term 4)</li>
                    <li>Tihai: Precision rhythmic pattern repeated thrice (Month 3, Term 3)</li>
                    <li>Asamyukta Hasta Mudras (Mayur & Ardha Chandra) (Month 4, Term 7)</li>
                </ul>
        
                <strong>Tests:</strong>
                <ul>
                    <li>Basic Test 8</li>
                    <ul>
                        <li>1 class test (10 marks) after completing Stage 7.</li>
                    </ul>
                </ul>
        
                <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
                <ul>
                    <li>Project Work: Research on Kathak history, creating presentations to understand its evolution.</li>
                    <li>Stage Performances: Showcase 2-Step Chakkar, Tukda 5 & 6.</li>
                </ul>
        
                <strong>Creative Sessions:</strong>
                <ul>
                    <li>Compose Tukdas, Tihais, and Mudra-based sequences.</li>
                    <li>Create unique Kathak dance pieces blending learned techniques.</li>
                </ul>
        
                <strong>Expected Results:</strong>
                <ul>
                    <li>Curated Performance Pieces:</li>
                    <ul>
                        <li>Performance on 2-Step Chakkar, Tukda 5 & 6.</li>
                        <li>Incorporation of Asamyukta and Sanyukta Hasta Mudras in storytelling.</li>
                    </ul>
                    <li>Not Curated (Student-Created):</li>
                    <ul>
                        <li>Original Tukdas & Tihais, personalized dance pieces.</li>
                        <li>Creative choreographies blending Mudras and rhythm.</li>
                    </ul>
                </ul>
            `;

            } else if (selectedAge === "5-6" && stage === "Stage 8") {
                return `
                <strong>Content to be Covered:</strong>
                <ul>
                    <li>2-Step Chakkar (Slow + Double Speed): Advanced practice of the 2-step Chakkar in both slow and double-speed variations. (Month 5, Term 3)</li>
                    <li>Ghunghat Ki Gat: A graceful portrayal of a woman adjusting her veil (Ghunghat), focusing on elegance and expression. (Month 10, Term 5)</li>
                    <li>Bansuri Ki Gat: Depicting the act of playing the flute (Bansuri), emphasizing hand movements, expressions, and rhythmic footwork. (Month 11, Term 5)</li>
                    <li>Kavit 1: Introduction to the first Kavit (poetry-based composition), performed in Teentaal (16 beats). (Month 9, Term 5)</li>
                    <li>Kavit 2: Another intricate Kavit composition in Teentaal, enhancing rhythmic understanding and storytelling. (Month 12, Term 5)</li>
                    <li>Sanyukta Hasta Mudra (Matsya & Kapot): Learning and using the Matsya (fish) and Kapot (pigeon) Mudras in storytelling sequences. (Month 7, Term 6)</li>
                    <li>1-Step Chakkar: Refinement of the 1-step Chakkar, emphasizing speed, balance, and fluidity. (Month 10, Term 2)</li>
                </ul>
        
                <strong>Tests:</strong>
                <ul>
                    <li>Basic Test 9</li>
                    <ul>
                        <li>Class Test: Conducted after completing Stage 8.</li>
                        <li>Syllabus: All topics covered in Stage 8, including Chakkars, Gats, Kavits, and Mudras.</li>
                        <li>Marks: 10 marks.</li>
                    </ul>
                </ul>
        
                <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
                <ul>
                    <li>Solo Performances: Students will perform solo pieces at internal TOS events and external competitions or cultural programs to gain stage experience and exposure. The focus is on confidence-building, presentation, and showcasing the knowledge gained in Stage 8.</li>
                </ul>
        
                <strong>Creative Sessions:</strong>
                <ul>
                    <li>Create their own compositions using the learned techniques and Mudras.</li>
                    <li>Experiment with blending different Gats, Kavits, and Chakkars.</li>
                    <li>Develop unique performance pieces, encouraging innovation and artistic growth.</li>
                </ul>
        
                <strong>Expected Results:</strong>
                <ul>
                    <li>Curated Performance Pieces:</li>
                    <ul>
                        <li>Performance Piece 1: 2-Step Chakkar (Slow + Double), Ghunghat Ki Gat, and Bansuri Ki Gat.</li>
                        <li>Performance Piece 2: Kavit 1, Kavit 2 (Teentaal), and 1-Step Chakkar.</li>
                    </ul>
                    <li>Not Curated (Created by Student):</li>
                    <ul>
                        <li>Original compositions combining learned Gats (e.g., Ghunghat Ki Gat with Bansuri Ki Gat).</li>
                        <li>Rhythmic sequences incorporating 1-step and 2-step Chakkars.</li>
                        <li>Personalized performance pieces that creatively blend Kavits, Mudras, and Gats.</li>
                    </ul>
                </ul>
            `;
        

        } else if (selectedAge === "7-10" && stage === "Stage 1") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Bhumi Pranam/Namaskar (Month 1, Term 1)</li>
                <li>Utpatti</li>
                <li>Samput</li>
                <li>Tatkaar (Month 1, Term 2)</li>
                <ul>
                    <li>Count 8-8 (Right - Left)</li>
                </ul>
                <li>Urdhav Hast Chakkar (Month 1, Term 5)</li>
                <ul>
                    <li>5 Taps Chakkar</li>
                </ul>
                <li>Hast Mudras (Month 1, Term 6)</li>
                <ul>
                    <li>Asanyukta (Pataka, Araal), Sanyukta (Anjali)</li>
                </ul>
            </ul>

            <strong>Tests:</strong>
            <ul>
                <li>Beginner Class Test 1 (10 marks) after completion of Stage 1 syllabus.</li>
            </ul>

            <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
            <ul>
                <li>Maintain a Kathak notebook for class assignments.</li>
            </ul>

            <strong>Creative Sessions:</strong>
            <ul>
                <li>Students will be taught how to think and create.</li>
            </ul>

            <strong>Expected Results:</strong>
            <ul>
                <li>Curated – Taught in the class (Videos):</li>
                <ul>
                    <li>Performance piece on Tatkaar (Footwork).</li>
                    <li>Performance piece on 5 steps in Chakkar (Spins).</li>
                </ul>
                <li>Not Curated – Created by student (Videos):</li>
                <ul>
                    <li>To be created by students as part of their individual work.</li>
                    <p>For more details, check out the tutorial below:</p>
                    <div class="video-wrapper">
                        <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/AzTnSP8fAN8" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <br>
                    <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/M9RtdKNsxu8" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <br>
                    <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/sZh2m2Gc6OM" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                
                <br>
                    <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/Zb8HqZSqKuU" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                </ul>
            </ul>
        `;
      
    } else if (selectedAge === "7-10" && stage === "Stage 2") {
        return `
        <strong>Content to be Covered:</strong>
        <ul>
            <li>Teentaal Introduction (Month 2, Term 1)</li>
            <li>Tatkaar (Month 2, Term 2)</li>
            <li>Madhaya Hastak (Month 2, Term 3)</li>
            <li>4 steps Chakkar (Month 6, Term 5)</li>
            <li>Thaat (Month 4, Term 5)</li>
            <li>Salami (Month 8, Term 3)</li>
            <li>Tukda 1 (Month 2, Term 5)</li>
        </ul>

        <strong>Tests:</strong>
        <ul>
            <li>Beginner Class Test 2 (10 marks)</li>
            <li>Beginner Class Test 3 (10 marks)</li>
        </ul>

        <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
        <ul>
            <li>Internal performances within the institute.</li>
            <li>Regular competitions among dance mates.</li>
        </ul>

        <strong>Creative Sessions:</strong>
        <ul>
            <li>Students will be taught how to think and create.</li>
        </ul>

        <strong>Expected Results:</strong>
        <ul>
            <li>Curated – Taught in the class (Videos):</li>
            <ul>
                <li>Performance piece on 4 Steps Chakkar (Spins).</li>
                <li>Performance piece on Teentaal Vilambit Laya compositions (Thaat, Salami & Tukda 1).</li>
            </ul>
            <li>Not Curated – Created by student (Videos):</li>
            <ul>
                <li>To be created by students as part of their individual work.</li>
                <p>For more details, check out the tutorial below:</p>
                <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/r8cP5sryq1c" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <br>
                
                <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/UZdnvVfj1j8" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </ul>
        </ul>
    `;
  
} else if (selectedAge === "7-10" && stage === "Stage 3") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>3 Steps Chakkar (spins) (Month 2, Term 9)</li>
        <li>2 New Hand Movements (Month 8, Term 1)</li>
        <li>Aamad (Month 5, Term 5)</li>
        <li>Ardha Pheri Hand Movements (Month 6, Term 4)</li>
        <li>Uthaan (Month 6, Term 1)</li>
        <li>2 New Hand Movements (Month 4, Term 6)</li>
        <li>Asanyukta Hasta Mudras (Mayur & Ardha Chandra) (Month 4, Term 7)</li>
    </ul>

    <strong>Tests:</strong>
    <ul>
        <li>Class Test 4 (10 marks)</li>
        <li>Class Test 5 (10 marks)</li>
    </ul>

    <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
    <ul>
        <li>External performances for outside events.</li>
        <li>Attending Kathak artists' performances for better knowledge and stage experience.</li>
    </ul>

    <strong>Creative Sessions:</strong>
    <ul>
        <li>Students will be taught how to think and create.</li>
    </ul>

    <strong>Expected Results:</strong>
    <ul>
        <li>Curated – Taught in the class (Videos):</li>
        <ul>
            <li>Performance piece on 3 Steps Chakkar and 2 + 2 Hand Movements.</li>
            <li>Performance piece on Teentaal Vilambit Laya (Ardha Pheri Chakkar, Uthaan & Aamad).</li>
        </ul>
        <li>Not Curated – Created by student (Videos):</li>
        <ul>
            <li>To be created by students as part of their individual work.</li>
            <p>For more details, check out the tutorial below:</p>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/lY94rAxmuus" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </ul>
    </ul>
`;


} else if (selectedAge === "7-10" && stage === "Stage 4") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>2 Steps Chakkar (spins) (Month 9, Term 3)</li>
        <li>Chakkardar Toda (Month 10, Term 3)</li>
        <li>Hastak Ekgun & Dugun (Month 9, Term 2)</li>
        <li>Tukda (Month 2, Term 6)</li>
        <li>Tihai (Month 7, Term 4)</li>
        <li>Sanyukta Hasta Mudra (Dola & Pushput) (Month 7, Term 6)</li>
    </ul>

    <strong>Tests:</strong>
    <ul>
        <li>Test 5 (10 marks)</li>
        <li>Test 6 (10 marks)</li>
    </ul>

    <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
    <ul>
        <li>Participating in external competitions for a broader approach.</li>
        <li>Attending Kathak workshops for understanding Kathak basics and nuances.</li>
    </ul>

    <strong>Creative Sessions:</strong>
    <ul>
        <li>Students will be taught how to think and create.</li>
    </ul>

    <strong>Expected Results:</strong>
    <ul>
        <li>Curated – Taught in the class (Videos):</li>
        <ul>
            <li>Performance piece on 2 Steps Chakkars and Hastaks (Hand Movements).</li>
            <li>Performance piece on Tukda, Chakkardar Toda, and Tihai.</li>
        </ul>
        <li>Not Curated – Created by student (Videos):</li>
        <ul>
            <li>To be created by students as part of their individual work.</li>
            <p>For more details, check out the tutorial below:</p>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/hFXlG5aujSk" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </ul>
    </ul>
`;

} else if (selectedAge === "7-10" && stage === "Stage 5") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>Tukda (Month 7, Term 3)</li>
        <li>Bansuri Ki Gat (Month 11, Term 5)</li>
        <li>Kavit (Month 3, Term 1)</li>
        <li>1 Leg/Step Chakkar (Month 10, Term 2)</li>
        <li>All Hastak with Layakari (Month 10, Term 1)</li>
        <li>Sanyukta Hasta Mudra (Matsya & Kapot) (Month 7, Term 6)</li>
    </ul>

    <strong>Tests:</strong>
    <ul>
        <li>Class Test 7 (10 marks)</li>
        <li>Class Test 8 (10 marks)</li>
    </ul>

    <strong>Excursions/Stage Performances/Projects/Competitions:</strong>
    <ul>
        <li>Solo performances (both internal and external).</li>
        <li>Participation in inter-school competitions.</li>
        <li>Projects related to the history and emergence of Kathak.</li>
    </ul>

    <strong>Creative Sessions:</strong>
    <ul>
        <li>Students will be taught how to think and create.</li>
    </ul>

    <strong>Expected Results:</strong>
    <ul>
        <li>Curated – Taught in the class (Videos):</li>
        <ul>
            <li>Performance piece on Bansuri Ki Gat, All Hastaks, and 1 Step Chakkar.</li>
            <li>Performance piece on Teentaal Kavit, Tukda, and Bansuri Ki Gat.</li>
        </ul>
        <li>Not Curated – Created by student (Videos):</li>
        <ul>
            <li>To be created by students as part of their individual work.</li>
            <p>For more details, check out the tutorial below:</p>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/AxqyaOOMB5E" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/AVeLxFET1yM" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/AqXOJmkRQZ8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </ul>
    </ul>
`;

}

    } else if (subject === "Chess") {
        if (selectedAge === "3-4" && stage === "Stage 1") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Introduction to Chess:</li>
                <ul>
                    <li>Basic rules and objectives.</li>
                    <li>Chapter 2: Movement of All the Pieces:</li>
                    <ul>
                        <li>Explanation of how each piece moves (King, Queen, Rook, Bishop, Knight, Pawn).</li>
                        <li>Chessboard setup and arrangement.</li>
                    </ul>
                </ul>
            </ul>
            <strong>Tests:</strong>
            <ul>
                <li>Test 1: Capturing pawns using different pieces.</li>
                <li>Test 2: Differentiating between legal and illegal movements of pieces.</li>
            </ul>
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>Excursion: Visit to a chess club or virtual interaction with an experienced chess player.</li>
                <li>TOS Competition 1 (Internal): Board setup competition—students set up the board correctly within a time limit.</li>
            </ul>
            <strong>Creative Sessions:</strong>
            <ul>
                <li>Creative problem-solving: Solve scenarios where specific pieces must capture or move strategically.</li>
                <li>Collaborative strategy-building: Work in teams to devise and demonstrate opening strategies.</li>
            </ul>
            <strong>Curated Expected Results:</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Demonstrations of correct piece movements.</li>
                    <li>Examples of pieces moving from one square to another.</li>
                    <li>Replayable tutorials covering board setup and basic rules.</li>
                </ul>
            </ul>
            <strong>Non-Curated Results (Created by Students):</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Student-led recordings of correct board setup.</li>

                    <li>Peer demonstrations of moving pieces based on scenarios given in class.</li>

                    <p>For more details, check out the tutorial below:</p>
                    <div class="video-wrapper">
                        <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/aqVtG60cVxY" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <br>
                    <div class="video-wrapper">
                        <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/39s7_fgpmwk" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        </div>
                        <br>
                    </div><div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/xpf_Mxm4_Tw" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <br>
                </div><div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/veJXnz95Whw" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
                   
                </ul>
            </ul>
        `;

        } else if (selectedAge === "3-4" && stage === "Stage 2") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Introduction to Chess:</li>
                <ul>
                    <li>The aim of the game: Checkmate the opponent's King.</li>
                    <li>Chapter 5: Getting Out of Check:</li>
                    <ul>
                        <li>Understanding checks, avoiding checks, and ways to counter checks.</li>
                    </ul>
                </ul>
            </ul>
            <strong>Tests:</strong>
            <ul>
                <li>Test 3: Giving and dodging checks.</li>
                <li>Test 4: Identifying checkmate situations on the board.</li>
            </ul>
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>Excursion: Visit to a chess exhibition or friendly match with local chess enthusiasts.</li>
                <li>TOS Competition 2 (Internal): Only legal moves competition against time.</li>
            </ul>
            <strong>Creative Sessions:</strong>
            <ul>
                <li>Creative problem-solving: Analyze unique chess positions to identify the best move.</li>
                <li>Collaborative strategy-building: Formulating team strategies to defend or attack in simulated endgames.</li>
            </ul>
            <strong>Curated Expected Results:</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Demonstrations of giving checks, dodging checks, and identifying checkmate patterns.</li>
                    <li>Step-by-step tutorials for solving check and checkmate scenarios.</li>
                </ul>
            </ul>
            <strong>Non-Curated Results (Created by Students):</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Students create tutorials for checkmate scenarios.</li>
                    <li>Peer explanation videos on dodging and countering checks.</li>
                  
                    <p>For more details, check out the tutorial below:</p>
                    <div class="video-wrapper">
                        <iframe width="560" height="315" 
                            src="https://www.youtube.com/embed/CkrpEpG8dls" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <br>
                    <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/WD2VnEJx8Is" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <br>
                <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/Vavw7g68bhk" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/Zre6Cuz2ugk" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <br>
        <div class="video-wrapper">
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/JfA245_yY0c" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
                </ul>
            </ul>
        `;
        } else if (selectedAge === "3-4" && stage === "Stage 3") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Introduction to Chess:</li>
                <ul>
                    <li>Basic Checkmates and Stalemates:</li>
                    <ul>
                        <li>Chapters 11, 12, and 13: Rook and Queen checkmates.</li>
                        <li>Identifying stalemates and their significance in endgames.</li>
                    </ul>
                </ul>
            </ul>
            <strong>Tests:</strong>
            <ul>
                <li>Test 5: Review of basic rules and piece movements.</li>
                <li>Test 6: Differentiating between stalemate and checkmate.</li>
            </ul>
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>Excursion: Visit to a local chess club or interactive session with an experienced player.</li>
                <li>TOS Competition 3 (Internal): Ladder mate and queen checkmate competition against time.</li>
            </ul>
            <strong>Additional Tasks Focused on Growth:</strong>
            <ul>
                <li>Introduction to chess.com:</li>
                <ul>
                    <li>Familiarization with the platform’s interface and time control games.</li>
                    <li>Practice rapid chess (15 minutes + 10 seconds increment).</li>
                    <li>Milestone: Play 5-6 matches to receive an initial online rating.</li>
                    <li>Analyze games to identify strengths and areas for improvement.</li>
                </ul>
            </ul>
            <strong>Creative Sessions:</strong>
            <ul>
                <li>Creative problem-solving: Tackle unique scenarios, like forced stalemates or hidden mate-in-one puzzles.</li>
                <li>Collaborative strategy-building: Students work in groups to master basic endgame strategies.</li>
            </ul>
            <strong>Curated Expected Results:</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Demonstrations of checkmates using double rooks, queen, and rook combinations.</li>
                    <li>Visual guides to differentiate between stalemate and checkmate situations.</li>
                </ul>
            </ul>
            <strong>Non-Curated Results (Created by Students):</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Peer-created tutorials demonstrating key endgame techniques.</li>
                    <li>Student-led explanations of analyzed games.</li>
                </ul>
            </ul>
        `;
        } else if (selectedAge === "3-4" && stage === "Stage 4") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Introduction to Chess:</li>
                <ul>
                    <li>Capture and Protection:</li>
                    <ul>
                        <li>Chapter 3: Strategies to capture undefended pieces.</li>
                        <li>Techniques for protecting valuable pieces effectively.</li>
                    </ul>
                </ul>
            </ul>
            <strong>Tests:</strong>
            <ul>
                <li>Test 7: Identifying and capturing undefended pieces during gameplay.</li>
            </ul>
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>Stage Performances: Students demonstrate endgame strategies and key moves like castling or en passant.</li>
                <li>TOS Competition 4 (External): Rapid chess tournament with participants from other groups or schools.</li>
            </ul>
            <strong>Additional Tasks Focused on Growth:</strong>
            <ul>
                <li>Continued analysis of games played during this stage.</li>
                <li>Expected rating range: 300-400.</li>
                <li>Weekly review sessions to evaluate and refine strategies.</li>
            </ul>
            <strong>Creative Sessions:</strong>
            <ul>
                <li>Creative problem-solving: Solve complex scenarios requiring multiple tactical steps.</li>
                <li>Collaborative strategy-building: Work in teams to plan and execute mid-game attacks and defenses.</li>
            </ul>
            <strong>Curated Expected Results:</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Tutorials for attacking and protecting pieces.</li>
                    <li>Demonstrations of special moves like castling and en passant.</li>
                </ul>
            </ul>
            <strong>Non-Curated Results (Created by Students):</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Student analyses of rapid games with move-by-move breakdowns.</li>
                    <li>Team-generated strategies for solving chess puzzles.</li>
                </ul>
            </ul>
        `;
        } else if (selectedAge === "3-4" && stage === "Stage 5") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Strategic Frameworks:</li>
                <ul>
                    <li>Understanding how to build plans based on material, position, and time.</li>
                    <li>Checks: Identifying when to give checks and how to use checks effectively for positional advantage.</li>
                    <li>Captures: Understanding when to capture and when to avoid it for strategic purposes.</li>
                    <li>Threats: Learning to recognize opponent threats and developing counter-threats.</li>
                    <li>Development: Focusing on efficient piece development and coordination to build a strong position.</li>
                </ul>
            </ul>
            <strong>Tests:</strong>
            <ul>
                <li>Test 8: Identifying all the checks, captures, threats, and developing moves in a given position.</li>
            </ul>
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>Excursion: Opportunity for interactive learning or exposure to grandmaster games.</li>
                <li>TOS Competition 5 (Internal): A competition focusing on strategic play, reviewing stage-wise performances.</li>
            </ul>
            <strong>Creative Sessions:</strong>
            <ul>
                <li>Creative problem-solving: Engage students in solving unique chess scenarios, encouraging out-of-the-box thinking.</li>
                <li>Collaborative strategy-building: Working together to develop strategic moves that align with the principles of checks, captures, threats, and development.</li>
            </ul>
            <strong>Curated Expected Results:</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Students will be able to use frameworks like checks, captures, threats, and development to find the best moves.</li>
                    <li>Assessing the opponent’s resources, planning counters, and making efficient moves will become a focus.</li>
                </ul>
            </ul>
            <strong>Not Curated (Created by Student):</strong>
            <ul>
                <li>Videos: Students create videos demonstrating their understanding of frameworks and strategic thinking.</li>

                <p>For more details, check out the tutorial below:</p>
                <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/wz92_gcc3xw" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <br>
                <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/aoA_0_QaKg8" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <br>
                <div class="video-wrapper">
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/5TEgPJQrrsg" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <br>
                <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/m-XxwNRZSUA" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
</ul>
            </ul>
        `;
        } else if (selectedAge === "3-4" && stage === "Stage 6") {
            return `
            <strong>Content to be Covered:</strong>
            <ul>
                <li>Intermediate Chess:</li>
                <ul>
                    <li>Basics of Development: Focusing on opening moves, controlling the center, and developing pieces efficiently.</li>
                    <li>Controlling the Centre (Chapter 17): Key opening principles for controlling the center and the role of piece development in achieving a strong opening.</li>
                </ul>
            </ul>
            <strong>Tests:</strong>
            <ul>
                <li>Test 9: Assessing knowledge of opening principles, identifying key opening moves, and applying them in practice.</li>
            </ul>
            <strong>Excursions/Competitions:</strong>
            <ul>
                <li>Excursion: Learning through observation of professional games.</li>
                <li>TOS Competition 6 (Internal): Opening Puzzle Solving Competition against the clock, focusing on applying opening principles quickly.</li>
            </ul>
            <strong>Additional Tasks Focused on Growth:</strong>
            <ul>
                <li>Chess.com: Students work individually to improve their ratings, utilizing opening knowledge and practice.</li>
            </ul>
            <strong>Creative Sessions:</strong>
            <ul>
                <li>Creative problem-solving: Exercises focused on unique openings and responding to unexpected situations.</li>
                <li>Collaborative strategy-building: Students collaborate to create effective opening strategies that align with development principles.</li>
            </ul>
            <strong>Curated Expected Results:</strong>
            <ul>
                <li>Videos:</li>
                <ul>
                    <li>Students will be able to demonstrate proper opening strategies, such as controlling the center and developing pieces.</li>
                    <li>Connecting rooks early and applying opening principles efficiently will be emphasized.</li>
                </ul>
            </ul>
            <strong>Not Curated (Created by Student):</strong>
            <ul>
                <li>Videos: Students create videos demonstrating the application of opening principles in practice games.</li>
            </ul>
        `;
    } else if (selectedAge === "3-4" && stage === "Stage 7") {
        return `
        <strong>Content to be Covered:</strong>
        <ul>
            <li>Advanced Tactics:</li>
            <ul>
                <li>Forks (Chapters 7-11, Book 2): Understanding how forks can lead to material advantage.</li>
                <li>Pins and Skewers: Mastering these tactical motifs to gain advantage over the opponent’s pieces.</li>
                <li>Discovered Attacks: Learning to execute and defend against discovered attacks.</li>
                <li>Deflection: Recognizing when and how to deflect an opponent's piece to make a tactical gain.</li>
                <li>Removing the Defenders: Using tactics to remove defending pieces and create opportunities.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 10: Puzzles focused on different tactical themes like forks, pins, skewers, discovered attacks, and removing defenders.</li>
        </ul>
        <strong>Excursions/Competitions:</strong>
        <ul>
            <li>Excursion: Observing real-time grandmaster games to understand advanced tactics.</li>
            <li>TOS Competition 7 (External): TOS Open Tournament with an emphasis on tactical mastery.</li>
        </ul>
        <strong>Additional Tasks Focused on Growth:</strong>
        <ul>
            <li>Chess.com Rating: By now, students are expected to have a rating between 600 - 800 on chess.com, indicating solid tactical knowledge.</li>
        </ul>
        <strong>Creative Sessions:</strong>
        <ul>
            <li>Creative problem-solving: Focus on solving complex tactical puzzles that require multiple tactical themes.</li>
            <li>Collaborative strategy-building: Working with peers to develop tactical combinations and responses to threats.</li>
        </ul>
        <strong>Curated Expected Results:</strong>
        <ul>
            <li>Videos:</li>
            <ul>
                <li>Students master tactical patterns like double attacks, forks, pins, skewers, discovered attacks, and double checks.</li>
                <li>They will demonstrate the ability to recognize and apply these patterns in games.</li>
            </ul>
        </ul>
        <strong>Not Curated (Created by Student):</strong>
        <ul>
            <li>Videos: Students create videos explaining tactical puzzles they solved and demonstrating how they applied the learned tactics.</li>
            <p>For more details, check out the tutorial below:</p>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/9xlU90OUBRU" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/fuReOl8oalE" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/C2opKD5oaHM" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/AweDrXEZkzo" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/QKhrArYvCz8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/V5g4qZ5srXs" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            </ul>
        </ul>
    `;
} else if (selectedAge === "3-4" && stage === "Stage 8") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li><strong>King and Pawn Endings (Chapter 20):</strong>
            <ul>
                <li>Learning how to handle king and pawn endgames, focusing on pawn promotion and opposition.</li>
                <li>Key concepts: the concept of opposition, triangulation, the square of the pawn, and how to calculate whether a pawn can promote or not.</li>
            </ul>
        </li>
        <li><strong>Queen vs. Advanced Pawns:</strong>
            <ul>
                <li>Understanding the nuances of queen versus advanced pawns.</li>
                <li>How to prevent a pawn from promoting while using the queen efficiently to control the board.</li>
                <li>Key principles: Queen’s mobility, cutting off the king, and preventing pawn advancement.</li>
            </ul>
        </li>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 11: King and Pawn Endgame Understanding.
            <ul>
                <li>Students will be tested on their ability to convert king and pawn endgames, calculate opposition, and promote pawns efficiently.</li>
            </ul>
        </li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Excursion: Exposure to high-level endgame-focused matches or analysis.</li>
        <li>TOS Competition 7 (Internal): TOS Advanced Super8 Knockout Tournament – A competitive environment to apply endgame strategies in a timed format.</li>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Focus on unique and difficult endgame scenarios, particularly King and Pawn and Queen vs. advanced pawns.</li>
        <li>Collaborative strategy-building: Students work in groups to tackle specific endgame scenarios, discussing and debating optimal strategies.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:
            <ul>
                <li>Students will demonstrate a methodical approach to King and Pawn and Queen vs. advanced pawns endgames, articulating their reasoning and moves.</li>
                <li>Videos will show the students transitioning from theoretical knowledge to practical application in these endgames.</li>
            </ul>
        </li>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:
            <ul>
                <li>Students record their own endgame strategies and solutions to challenges.</li>
            </ul>
        </li>
    </ul>
`;
} else if (selectedAge === "3-4" && stage === "Stage 9") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li><strong>Endgame Techniques:</strong>
            <ul>
                <li>Focus on advanced techniques such as opposition, the concept of the "rule of the square" for pawns, and more complex endgame scenarios like Rook and Pawn endgames.</li>
                <li>Emphasis on fine-tuning technique and transitioning smoothly between different types of endgames (King and Pawn, Rook and Pawn, Queen and Pawns, etc.).</li>
            </ul>
        </li>
        <li><strong>Magic Square Technique:</strong>
            <ul>
                <li>Introduce the Magic Square Technique (a concept for Rook and King endgames).</li>
                <li>Teach students how to gain control over key squares and force a checkmate or draw.</li>
            </ul>
        </li>
        <li><strong>King Activity:</strong>
            <ul>
                <li>Learning the concept of active king positioning in endgames.</li>
                <li>When to centralize the king and how to activate it for both offense and defense.</li>
            </ul>
        </li>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 12: Transitioning into winning, drawing, and losing endgames.
            <ul>
                <li>Students will be tested on their ability to transition between different types of endgames (winning, drawing, and losing positions).</li>
            </ul>
        </li>
        <li>Test 13: Converting said endgame.
            <ul>
                <li>Students will be tested on their ability to convert a winning endgame position into a checkmate or draw.</li>
                <li>Focus on understanding when and how to convert a theoretical advantage into a practical one.</li>
            </ul>
        </li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Excursion: Observing and learning from high-level grandmasters or endgame specialists.</li>
        <li>TOS Competition 9 (External): Local tournaments in Delhi, such as the Delhi Open, Matrix Open, and other prominent tournaments.</li>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Deep dives into complex endgame scenarios involving multiple pieces, such as Queen and Rook vs. Queen, or advanced King and Pawn endgames.</li>
        <li>Collaborative strategy-building: Students collaborate to design new strategies based on advanced techniques like the Magic Square and active king positioning.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:
            <ul>
                <li>Students will master advanced endgame techniques and demonstrate how they use the Magic Square Technique and active king positioning.</li>
                <li>Focus on executing high-level endgame strategies with precision and understanding.</li>
            </ul>
        </li>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:
            <ul>
                <li>Students record and explain their endgame decision-making process.</li>
                <li>Highlight advanced techniques and strategies used to convert positions.</li>
            </ul>
        </li>
    </ul>
    <strong>General Progression for Stages 8-9:</strong>
    <ul>
        <li>Stage 8 (Basic Endgames): Students apply core endgame strategies, focusing on King and Pawn endings and learning to defend and convert advanced pawn positions.</li>
        <li>Stage 9 (Advanced): Students develop a deeper understanding of various advanced endgame scenarios, including Magic Square Technique and active king positioning.</li>
    </ul>
    <strong>Expected Outcomes:</strong>
    <ul>
        <li>By the end of Stage 9, students should be able to handle complex endgame scenarios with ease.</li>
        <li>Students will transition smoothly between endgame types and apply advanced techniques to secure victories or draws.</li>
        <li>Students will be prepared for competitive play, handling high-level tournaments like the Delhi Open and other local competitions.</li>
    </ul>
`;


} else if (selectedAge === "7-10" && stage === "Stage 1") {
    return ` <strong>Content to be Covered:</strong>
    <ul>
        <li>Introduction to Chess:</li>
        <ul>
            <li>Basic Rules and Objectives:</li>
            <ul>
                <li>Chapters 2 – Movement of all the pieces.</li>
                <li>Chessboard setup and piece movement.</li>
            </ul>
        </ul>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 1: Capturing pawns using different pieces.</li>
        <li>Test 2: Differentiating between legal and illegal movements of pieces.</li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Excursion: Visit to a local chess tournament or an experienced chess player for interactive learning.</li>
        <li>TOS Competition 1 (Internal): Board setup competition.</li>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Tackle unique chess scenarios involving various piece movements.</li>
        <li>Collaborative strategy-building: Students collaborate to discuss basic opening strategies and piece coordination.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Students learn how to move each piece correctly on the board.</li>
            <li>Students practice moving pieces from one square to another.</li>
        </ul>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Space left for student-created videos showcasing their own chess tutorials or strategies.</li>
            <p>For more details, check out the tutorial below:</p>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/aqVtG60cVxY" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/39s7_fgpmwk" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                </div>
                <br>
            </div><div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/xpf_Mxm4_Tw" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <br>
        </div><div class="video-wrapper">
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/veJXnz95Whw" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
        </ul>
    </ul>
`;
} else if (selectedAge === "7-10" && stage === "Stage 2") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>Introduction to Chess:</li>
        <ul>
            <li>The Aim of the Game:</li>
            <ul>
                <li>Learning to give and dodge checks.</li>
                <li>Chapters 5 – Getting out of check.</li>
            </ul>
        </ul>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 3: Giving and dodging checks.</li>
        <li>Test 4: Identifying checkmate situations on the board.</li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Excursion: Visit to a competitive chess event or watch a live match to observe high-level strategies.</li>
        <li>TOS Competition 2 (Internal): Legal Moves Competition (against time).</li>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Work on special puzzles involving checks and checkmates.</li>
        <li>Collaborative strategy-building: Discuss the key differences between check and checkmate.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Students learn to give and dodge checks effectively.</li>
            <li>Students identify checkmate situations accurately on the board.</li>
        </ul>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Student-created videos explaining checkmate positions and giving tips for dodging checks.</li>
            <p>For more details, check out the tutorial below:</p>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/CkrpEpG8dls" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/WD2VnEJx8Is" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <br>
        <div class="video-wrapper">
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/Vavw7g68bhk" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <br>
    <div class="video-wrapper">
    <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/Zre6Cuz2ugk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
<br>
<div class="video-wrapper">
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/JfA245_yY0c" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
</div>
        </ul>
    </ul>
`;
} else if (selectedAge === "7-10" && stage === "Stage 3") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>Introduction to Chess:</li>
        <ul>
            <li>Basic Checkmates and Stalemates:</li>
            <ul>
                <li>Chapters 11, 12, and 13: Rook and Queen checkmates.</li>
                <li>Identifying stalemates and their significance in endgames.</li>
            </ul>
        </ul>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 5: Review of basic rules and piece movements.</li>
        <li>Test 6: Differentiating between stalemate and checkmate.</li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Excursion: Visit to a local chess club or interactive session with an experienced player.</li>
        <li>TOS Competition 3 (Internal): Ladder mate and queen checkmate competition against time.</li>
    </ul>
    <strong>Additional Tasks Focused on Growth:</strong>
    <ul>
        <li>Introduction to chess.com:</li>
        <ul>
            <li>Familiarization with the platform’s interface and time control games.</li>
            <li>Practice rapid chess (15 minutes + 10 seconds increment).</li>
            <li>Milestone: Play 5-6 matches to receive an initial online rating.</li>
            <li>Analyze games to identify strengths and areas for improvement.</li>
        </ul>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Tackle unique scenarios, like forced stalemates or hidden mate-in-one puzzles.</li>
        <li>Collaborative strategy-building: Students work in groups to master basic endgame strategies.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Demonstrations of checkmates using double rooks, queen, and rook combinations.</li>
            <li>Visual guides to differentiate between stalemate and checkmate situations.</li>
        </ul>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Peer-created tutorials demonstrating key endgame techniques.</li>
            <li>Student-led explanations of analyzed games.</li>
        </ul>
    </ul>
`;
} else if (selectedAge === "7-10" && stage === "Stage 4") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>Introduction to Chess:</li>
        <ul>
            <li>Learning Capture and Protection:</li>
            <ul>
                <li>Chapter 3 – Capture and Protection.</li>
            </ul>
        </ul>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 7: Capturing undefended pieces in a game.</li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Stage Performances: (Details to be added)</li>
        <li>TOS Competition 4 (External): Stage 4 Rapid Chess Tournament.</li>
    </ul>
    <strong>Additional Tasks Focused on Growth:</strong>
    <ul>
        <li>Analyzing games played during this time frame (expected rating: 300–400).</li>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Focus on unique chess scenarios involving capture and protection.</li>
        <li>Collaborative strategy-building: Students collaborate to develop strategies for protecting and capturing pieces.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Students learn to attack and protect their pieces effectively.</li>
            <li>Students master special moves like castling and en passant.</li>
        </ul>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Space left for student-created videos demonstrating their understanding of capture and protection techniques.</li>
        </ul>
    </ul>
`;
} else if (selectedAge === "7-10" && stage === "Stage 5") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>Intermediate Chess:</li>
        <ul>
            <li>Frameworks:</li>
        </ul>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 8: Identifying all checks, captures, threats, and developing moves.</li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Excursion: (Details to be added)</li>
        <li>TOS Competition 5 (Internal): Internal competition, stage-wise.</li>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Focus on identifying checks, captures, threats, and developing moves.</li>
        <li>Collaborative strategy-building: Work in groups to understand frameworks for developing moves.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Students use frameworks like checks, captures, threats, and development to find optimal moves.</li>
            <li>Students assess their opponent’s resources effectively.</li>
        </ul>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Space left for student-created videos explaining their approach to checks, captures, threats, and development.</li>
            <p>For more details, check out the tutorial below:</p>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/wz92_gcc3xw" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/aoA_0_QaKg8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/5TEgPJQrrsg" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/m-XxwNRZSUA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
                 </ul>
    </ul>
`;
} else if (selectedAge === "7-10" && stage === "Stage 6") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>Intermediate Chess:</li>
        <ul>
            <li>Basics of Development:</li>
            <ul>
                <li>Controlling the center (Chapter 17 – Basic Opening Principles and Implementations).</li>
            </ul>
        </ul>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 9: Opening knowledge with different starting moves.</li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Excursion: (Details to be added)</li>
        <li>Stage Performances: (Details to be added)</li>
        <li>TOS Competition 6 (Internal): Opening Puzzle-Solving Competition (against time).</li>
    </ul>
    <strong>Additional Tasks Focused on Growth:</strong>
    <ul>
        <li>Working individually to improve ratings on chess.com.</li>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Focus on opening principles and controlling the center.</li>
        <li>Collaborative strategy-building: Students work together to analyze and apply opening principles.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Students apply opening principles effectively.</li>
            <li>Students control the center, connect rooks, and play with purpose.</li>
        </ul>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Space left for student-created videos explaining their understanding of opening principles.</li>
        </ul>
    </ul>
`;
} else if (selectedAge === "7-10" && stage === "Stage 7") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>Tactics:</li>
        <ul>
            <li>Forks (Chapter 7–11, Book 2).</li>
            <li>Pins and skewers.</li>
            <li>Discovered attacks.</li>
            <li>Deflection.</li>
            <li>Removing the defenders.</li>
        </ul>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 10: Puzzles on different tactics.</li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Excursion: (Details to be added)</li>
        <li>Stage Performances: (Details to be added)</li>
        <li>TOS Competition 7 (External): TOS Open Tournament.</li>
    </ul>
    <strong>Additional Tasks Focused on Growth:</strong>
    <ul>
        <li>Expected rating on chess.com is 600–800.</li>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Focus on identifying and applying tactical patterns like forks, pins, skewers, and discovered attacks.</li>
        <li>Collaborative strategy-building: Students collaborate to solve tactical puzzles and improve their tactical vision.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Students master tactical patterns like double attacks, forks, pins, skewers, discovered attacks, and double checks.</li>
            <li>Students recognize and apply these patterns effectively.</li>
        </ul>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Space left for student-created videos demonstrating their mastery of tactical patterns.</li>
            <p>For more details, check out the tutorial below:</p>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/9xlU90OUBRU" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/fuReOl8oalE" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/C2opKD5oaHM" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/AweDrXEZkzo" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/QKhrArYvCz8" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <br>
            <div class="video-wrapper">
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/V5g4qZ5srXs" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </ul>
    </ul>
`;
} else if (selectedAge === "7-10" && stage === "Stage 8") {
    return `
    <strong>Content to be Covered:</strong>
        <ul>
            <li>Basic Endgames:</li>
            <ul>
                <li>King and pawn endings (Chapter 20 – King and Pawn Endgames).</li>
                <li>Queen vs. advanced pawns.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 11: King and pawn endgame understanding.</li>
        </ul>
        <strong>Excursions/Competitions:</strong>
        <ul>
            <li>Excursion: (Details to be added)</li>
            <li>Stage Performances: (Details to be added)</li>
            <li>TOS Competition 8 (Internal): TOS Advanced Super 8 Knockout Tournament.</li>
        </ul>
        <strong>Creative Sessions:</strong>
        <ul>
            <li>Creative problem-solving: Focus on King and Pawn endgames and Queen vs. advanced pawns.</li>
            <li>Collaborative strategy-building: Students work together to find the best strategies for endgames.</li>
        </ul>
        <strong>Curated Expected Results:</strong>
        <ul>
            <li>Videos:</li>
            <ul>
                <li>Students tackle more complex endgames, such as King and Pawn and Queen vs. advanced pawns.</li>
                <li>Students show a methodical approach to solving endgames.</li>
            </ul>
        </ul>
        <strong>Non-Curated Results (Created by Students):</strong>
        <ul>
            <li>Videos:</li>
            <ul>
                <li>Space left for student-created videos showing their understanding of endgame techniques.</li>
            </ul>
        </ul>
    `;
} else if (selectedAge === "7-10" && stage === "Stage 9") {
    return `
    <strong>Content to be Covered:</strong>
    <ul>
        <li>Advanced Endgame Techniques:</li>
        <ul>
            <li>Magic square technique.</li>
            <li>King activity in endgames.</li>
        </ul>
    </ul>
    <strong>Tests:</strong>
    <ul>
        <li>Test 12: Transitioning into winning, drawing, or losing endgames.</li>
        <li>Test 13: Converting specific endgames effectively.</li>
    </ul>
    <strong>Excursions/Competitions:</strong>
    <ul>
        <li>Excursion: (Details to be added)</li>
        <li>TOS Competition 9 (External): Participation in local tournaments in Delhi, e.g., Delhi Open, Matrix Open, and other open tournaments.</li>
    </ul>
    <strong>Creative Sessions:</strong>
    <ul>
        <li>Creative problem-solving: Focus on advanced endgame techniques, including the magic square technique.</li>
        <li>Collaborative strategy-building: Students work together to handle complex endgame scenarios with confidence.</li>
    </ul>
    <strong>Curated Expected Results:</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Students master advanced endgame techniques, including the magic square technique.</li>
            <li>Students demonstrate the ability to handle complex endgame scenarios with confidence.</li>
        </ul>
    </ul>
    <strong>Non-Curated Results (Created by Students):</strong>
    <ul>
        <li>Videos:</li>
        <ul>
            <li>Space left for student-created videos showing their endgame proficiency.</li>
        </ul>
    </ul>
`;
}
} else if (subject === "Table Tennis") {
    if (stage === "Stage 1") {
        return `
        <strong>Content:</strong>
        <ul>
            <li>Backhand Push:</li>
            <ul>
                <li>Basic: Return ball on table; rally length > 10.</li>
                <li>Footwork Oriented: Return ball from every part of the table to any part of the table; rally length > 15.</li>
                <li>Directional or Control Oriented: Backhand to Backhand, Backhand to Forehand, Backhand to middle of the table rallies; rally length > 20.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 1: 10 backhand push table returns.</li>
            <li>Test 2: 15 backhand pushes to opponents’ backhand.</li>
        </ul>
        <strong>Competitions:</strong>
        <ul>
            <li>TOS Peer Competition 1 (Internal): BB (Backhand to Backhand) – Rallies of 20.</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>15 backhand push table returns.</li>
            <li>20 BB (Backhand to Backhand) pushes.</li>
            <li>15 Backhand to Backhand, Forehand to Backhand, middle of the table to Backhand returns.</li>
        </ul>
        <p>For more details, check out the tutorial below:</p>
        <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/p2AB4LSrGn8" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <br>
        <div class="video-wrapper">
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/qQcImqqbSIU" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <br>
    <div class="video-wrapper">
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/YlRY961mjv4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <br>
    <div class="video-wrapper">
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/GO0dhkDQneQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    `;
} else if (stage === "Stage 2") {
    return `
        <strong>Content:</strong>
        <ul>
            <li>Forehand Push:</li>
            <ul>
                <li>Basic: Return ball on table; rally length > 10.</li>
                <li>Footwork Oriented: Return ball from every part of the table to a specific part of the table; rally length > 15.</li>
                <li>Directional or Control Oriented: Forehand to Forehand, Forehand to Backhand, Forehand to middle of the table rallies; rally length > 20.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 3: 10 forehand push table returns.</li>
            <li>Test 4: Forehand push to opponents’ forehand.</li>
        </ul>
        <strong>Competitions:</strong>
        <ul>
            <li>TOS Peer Competition 2 (Internal): FF (Forehand to Forehand) – Rallies of 20.</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>15 forehand push table returns.</li>
            <li>20 FF (Forehand to Forehand) pushes.</li>
            <li>15 Forehand to Forehand, Backhand to Forehand, middle of the table to Forehand returns.</li>
        </ul>
        <p>For more details, check out the tutorial below:</p>
        <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/A6gwNxRKwIk" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <br>
        <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/m3e96ArZymw" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
} else if (stage === "Stage 3") {
    return `
        <strong>Content:</strong>
        <ul>
            <li>Backhand & Forehand Push Concurrently:</li>
            <ul>
                <li>Directional or Control Oriented: Backhand to Backhand, Forehand to Backhand; rally length > 20.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 5: BB (Backhand to Backhand) → FB (Forehand to Backhand) rallies (20).</li>
        </ul>
        <strong>Competitions:</strong>
        <ul>
            <li>TOS Competition 3 (Internal): BB → BB → BF → FF → FF → FB (Rallies 20).</li>
            <li>TOS Competition 4: (Amateur Open Tournament) – External players allowed.</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>15 BB → FB → MB (Middle of Table to Backhand) rallies.</li>
        </ul>
        <p>For more details, check out the tutorial below:</p>
        <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/nw8GuoY_VPk" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
} else if (stage === "Stage 4") {
    return `
        <strong>Content:</strong>
        <ul>
            <li>Backhand Counter:</li>
            <ul>
                <li>Basic: Return ball on table with proper form; rally length > 10.</li>
                <li>Footwork Oriented: Return ball from every part of the table to specific parts; rally length > 15.</li>
                <li>Directional or Control Oriented: Backhand to Backhand, Backhand to Forehand, middle table rallies; rally length > 20.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 6: 15 Backhand Counter rallies.</li>
            <li>Test 7: 20 BB (Backhand to Backhand) counter rallies.</li>
        </ul>
        <strong>Competitions:</strong>
        <ul>
            <li>TOS Peer Competition 5 (Internal): BB Counter rallies (20).</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>15 Backhand counter table returns.</li>
            <li>20 BB (Backhand to Backhand) counters.</li>
            <li>15 Backhand to Backhand, middle table to Backhand, Forehand to Backhand returns.</li>
        </ul>
        <p>For more details, check out the tutorial below:</p>
        <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/rUIltD_iCpU" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <br>
        <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/BSIjTUopLP8" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
} else if (stage === "Stage 5") {
    return `
        <strong>Content:</strong>
        <ul>
            <li>Forehand Counter:</li>
            <ul>
                <li>Basic: Return ball on table; rally length > 10.</li>
                <li>Footwork Oriented: Return ball from all parts of the table; rally length > 15.</li>
                <li>Directional or Control Oriented: Forehand to Forehand, Forehand to Backhand, Forehand to middle table rallies; rally length > 20.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 8: 10 Forehand Counter table returns.</li>
            <li>Test 9: 15 FF (Forehand to Forehand) Counter table returns.</li>
        </ul>
        <strong>Competitions:</strong>
        <ul>
            <li>TOS Peer Competition 6 (Internal): FF (Forehand to Forehand) rallies (20).</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>15 Forehand counter table returns.</li>
            <li>20 FF Counter rallies.</li>
            <li>15 Forehand to Forehand, middle table to Forehand, Backhand to Forehand returns.</li>
        </ul>
        <p>For more details, check out the tutorial below:</p>
        <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/nlxKVCTPPoM" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
} else if (stage === "Stage 6") {
    return `
        <strong>Content:</strong>
        <ul>
            <li>Backhand & Forehand Counter Concurrently:</li>
            <ul>
                <li>Directional or Control Oriented: Backhand to Backhand, Forehand to Backhand; rally length > 20.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 10: 15 BB → FB rallies.</li>
        </ul>
        <strong>Competitions:</strong>
        <ul>
            <li>TOS Peer Competition 7 (Internal): BB → BB → BF → FF → FF → FB (Rallies 20).</li>
            <li>TOS Peer Competition 8 (External): Open Tournament.</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>15 BB → FB → MB (Middle of Table to Backhand) rallies.</li>
        </ul>
    `;
} else if (stage === "Stage 7") {
    return `
        <strong>Content:</strong>
        <ul>
            <li>Backhand Topspin:</li>
            <ul>
                <li>Basic: Backhand counter rally followed by topspin; rally length = 3.</li>
                <li>Directional: BB, BF, middle table rallies; rally length >= 6.</li>
            </ul>
            <li>Forehand Topspin:</li>
            <ul>
                <li>Basic: Forehand counter rally followed by topspin; rally length = 3.</li>
                <li>Footwork Oriented: Push/Counter → Topspin rally; length > 6.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 11: 5 FF Counter Topspin rallies.</li>
            <li>Test 12: 5 BB Counter Topspin rallies.</li>
        </ul>
        <strong>Competitions:</strong>
        <ul>
            <li>TOS Peer Competition 9 (Internal): PPTB (Push Topspin Block) rallies (6).</li>
            <li>TOS Peer Competition 10 (External): Open Zonal/Inter-District Tournament.</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>5 FF Counter Topspin rallies.</li>
            <li>5 BB Counter Topspin rallies.</li>
            <li>5 PPTB rallies.</li>
        </ul>
        <p>For more details, check out the tutorial below:</p>
        <div class="video-wrapper">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/ZIfS2Wx2ou8" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <br>
        <div class="video-wrapper">
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/qHeobWKT8EA" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    `;
} else if (stage === "Stage 8") {
    return `
        <strong>Content:</strong>
        <ul>
            <li>Short of the Table Defence:</li>
            <ul>
                <li>Attacking Forehand Push: Fast push to both corners; win fast points.</li>
                <li>Attacking Backhand Push: Fast push to both corners; win fast points.</li>
                <li>Pancake Flip: Near net high ball attack; deceptive shot.</li>
            </ul>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 13: 20 near-perfect wristy Forehand & Backhand attacking pushes.</li>
            <li>Test 14: 5 Pancake Flips.</li>
        </ul>
        <strong>Competitions:</strong>
        <ul>
            <li>TOS Peer Competition 11 (Internal): Flexible wrist Forehand/Backhand edge shots.</li>
            <li>Competition 12 (External): Inter-District/Zonal Tournament.</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>20 Attacking pushes on edge shots.</li>
            <li>5 Pancake Flips.</li>
        </ul>
    `;
}
} else if (subject === "Guitar") {
    if (stage === "Stage 1") {
        return `
        <strong>Content:</strong>
        <ul>
            <li>Get Familiar with Guitar:</li>
            <li>Parts of the Guitar: Learn the components like body, neck, strings, headstock.</li>
            <li>Proper Holding of Guitar and Plectrum: Practice posture and plectrum use.</li>
            <li>Tuning the Guitar: Using a tuner or by ear.</li>
            <li>Hand Positioning for accuracy.</li>
            <li>Open Chords and Scales:</li>
            <ul>
                <li>E minor, C major, D major, G major, A minor chords.</li>
                <li>Single, two-string, and three-string scales.</li>
            </ul>
            <li>Strumming Patterns:</li>
            <ul>
                <li>Basic techniques like Down (D), Down-Up (DU).</li>
            </ul>
            <li>First Songs: "Bella Ciao," "Joy to the World," "Stand by Me."</li>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 1: Picking each note of chords and allowing sustain.</li>
            <li>Test 2: Playing "Bella Ciao" with correct timing.</li>
        </ul>
        <strong>Stage Performances:</strong>
        <ul>
            <li>TOS Half-Yearly Performances.</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>Melody: "Bella Ciao" with rhythm.</li>
            <li>Scale: C major scale at 60 bpm.</li>
        </ul>
    `;
} else if (stage === "Stage 2") {
    return `
        <strong>Content:</strong>
        <ul>
            <li>Finger Exercises:</li>
            <ul>
                <li>Chromatic Exercise across the fretboard.</li>
                <li>Diagonal Movement on strings and frets.</li>
            </ul>
            <li>Chords and Progressions:</li>
            <ul>
                <li>F Major chord with barre.</li>
                <li>Progressions like C-Am-F-G, G-Em-C-D.</li>
            </ul>
            <li>Theory:</li>
            <ul>
                <li>Fretboard Memorization.</li>
                <li>Semitones and Tones, Circle of Semitones.</li>
            </ul>
            <li>Strumming Patterns:</li>
            <ul>
                <li>Advanced patterns like D DU UD U.</li>
            </ul>
            <li>Songs: "Paani Da Rang," "Main Rang Sharbaton Ka," "Closer."</li>
            <li>Leads: "Fur Elise" by Beethoven, "Tum Hi Ho."</li>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Test 1: Chromatic exercise at 100 BPM.</li>
            <li>Test 2: Play chord progressions with strumming.</li>
            <li>Test 3: Identify chord strings for G, C, D, Em, F, Am.</li>
            <li>Test 4: Play two songs with the original track.</li>
        </ul>
        <strong>Stage Performances:</strong>
        <ul>
            <li>Half-Yearly Performances.</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>Scale: G major scale at 90 bpm.</li>
            <li>Melody: "Night Changes" with the track.</li>
        </ul>
    `;
} else if (stage === "Stage 3") {
    return `
        <strong>Content:</strong>
        <ul>
            <li>Finger Exercises:</li>
            <ul>
                <li>Hammer-Ons for precision and control.</li>
                <li>Finger Independence exercises.</li>
            </ul>
            <li>Chords and Progressions:</li>
            <ul>
                <li>Minor/Major 7th, add9/add11, suspended chords.</li>
                <li>Progressions like E-C#m-A-B.</li>
            </ul>
            <li>Strumming Patterns:</li>
            <ul>
                <li>Advanced rhythms like D D D DU.</li>
            </ul>
            <li>Songs: "Yellow" by Coldplay, "Chand Baliyan," "Photograph."</li>
            <li>Leads: "Perfect" by Ed Sheeran, "Titanic Theme."</li>
            <li>Theory: Dynamics and accents in music.</li>
        </ul>
        <strong>Tests:</strong>
        <ul>
            <li>Song with Chords: "Yellow" by Coldplay with the track.</li>
            <li>Fingerstyle Lead: "Perfect" in 3/4 beats at 90 bpm.</li>
        </ul>
        <strong>Expected Results:</strong>
        <ul>
            <li>Mastery of advanced chords and strumming patterns.</li>
            <li>Proficiency in fingerstyle leads and dynamic accents.</li>
        </ul>
    `;
     } else if (stage === "Stage 4") {
return `
    <strong>Content:</strong>
    <ul>
        <li><strong>Finger Exercises Across the Fretboard:</strong>
            <ul>
                <li>Assign each finger to a string while playing ascending/descending patterns.</li>
                <li>After completing the descending run, move up one fret to continue the pattern.</li>
                <li>Once reaching the 12th fret with the pinky, reverse and descend back to the 1st fret.</li>
                <li>Emphasize alternate picking: downstroke on the first note, upstroke on the second, alternating consistently.</li>
            </ul>
        </li>
        <li><strong>Barre Chords and Diminished Chords with Scale Degrees:</strong>
            <ul>
                <li>I = E Major</li>
                <li>ii = F# minor</li>
                <li>iii = G# minor</li>
                <li>IV = A Major</li>
                <li>V = B Major</li>
                <li>VI = C# Minor</li>
                <li>vii° = D# diminished</li>
            </ul>
        </li>
        <li><strong>Fingerpicking Patterns:</strong>
            <ul>
                <li>PIMA Rule: Use the thumb (P), index (I), middle (M), and ring (A) fingers for designated strings.</li>
                <li>Alternate Picking: Develop fluidity and accuracy in transitions.</li>
            </ul>
        </li>
        <li><strong>Strumming Patterns:</strong>
            <ul>
                <li>Pattern 1: D D U D U (1 & 2 & 3 & 4 &)</li>
                <li>Pattern 2 (Swing Rhythm): D DU U DU</li>
            </ul>
        </li>
        <li><strong>Songs With New Chords:</strong>
            <ul>
                <li>Choo Lo – Local Train</li>
                <li>What Makes You Beautiful – One Direction</li>
                <li>Qaafirana</li>
                <li>Alag Aasman</li>
                <li>A Thousand Years – Christina Perri</li>
            </ul>
        </li>
        <li><strong>Fingerstyle Pieces:</strong>
            <ul>
                <li>Romanza – Spanish Ballad</li>
                <li>Stairway to Heaven – Led Zeppelin</li>
            </ul>
        </li>
        <li><strong>Theory:</strong>
            <ul>
                <li>Understanding triads.</li>
                <li>Learning scale degrees in context.</li>
            </ul>
        </li>
    </ul>
    <strong>Expected Results:</strong>
    <ul>
        <li>Song With Intro Riff, Solo, and Chords: Choo Lo by Local Train (play along with the original track or while singing).</li>
        <li>Fingerstyle Mastery: Romanza in 3/4 beats at 90 bpm.</li>
    </ul>
`;
} else if (stage === "Stage 5") {
return `
    <strong>Content:</strong>
    <ul>
        <li><strong>Finger Exercises Across the Fretboard:</strong>
            <ul>
                <li>Assign each finger to a string while playing ascending/descending patterns.</li>
                <li>After completing the descending run, move up one fret to continue the pattern.</li>
                <li>Once reaching the 12th fret with the pinky, reverse and descend back to the 1st fret.</li>
                <li>Emphasize alternate picking: downstroke on the first note, upstroke on the second, alternating consistently.</li>
            </ul>
        </li>
        <li><strong>Barre Chords and Diminished Chords with Scale Degrees:</strong>
            <ul>
                <li>I = E Major</li>
                <li>ii = F# minor</li>
                <li>iii = G# minor</li>
                <li>IV = A Major</li>
                <li>V = B Major</li>
                <li>VI = C# Minor</li>
                <li>vii° = D# diminished</li>
            </ul>
        </li>
        <li><strong>Fingerpicking Patterns:</strong>
            <ul>
                <li>PIMA Rule: Use the thumb (P), index (I), middle (M), and ring (A) fingers for designated strings.</li>
                <li>Alternate Picking: Develop fluidity and accuracy in transitions.</li>
            </ul>
        </li>
        <li><strong>Strumming Patterns:</strong>
            <ul>
                <li>Pattern 1: D D U D U (1 & 2 & 3 & 4 &)</li>
                <li>Pattern 2 (Swing Rhythm): D DU U DU</li>
            </ul>
        </li>
        <li><strong>Songs With New Chords:</strong>
            <ul>
                <li>Choo Lo – Local Train</li>
                <li>What Makes You Beautiful – One Direction</li>
                <li>Qaafirana</li>
                <li>Alag Aasman</li>
                <li>A Thousand Years – Christina Perri</li>
            </ul>
        </li>
        <li><strong>Fingerstyle Pieces:</strong>
            <ul>
                <li>Romanza – Spanish Ballad</li>
                <li>Stairway to Heaven – Led Zeppelin</li>
            </ul>
        </li>
        <li><strong>Theory:</strong>
            <ul>
                <li>Understanding triads.</li>
                <li>Learning scale degrees in context.</li>
            </ul>
        </li>
    </ul>
    <strong>Expected Results:</strong>
    <ul>
        <li>Song With Intro Riff, Solo, and Chords: Choo Lo by Local Train (play along with the original track or while singing).</li>
        <li>Fingerstyle Mastery: Romanza in 3/4 beats at 90 bpm.</li>
    </ul>
`;
     }
    }

    return `<p>No details available for this stage.</p>`;
}









