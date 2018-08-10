const c1prof = "Visan M.";
const c1loc = "MS 5138";
const c2prof = "Eggert, P.R.";
const c2loc = "Boelter 3760";
const c3prof = "Ercegovac, M.D";
const c3loc = "Bunche 2209A";
const c4prof = "Sarrafzadeh, M.";
const c4loc = "Engineering VI Mong Learning Center";
const c5prof = "Hamilton, P.";
const c5loc = "Knudsen 1238";
const ScheduleData = [
  {
    id:1,
    name: "MATH 131AH",
    slots: [{
      start:11,
      end:12,
      day: 1,
      professor: c1prof,
      location: c1loc,
      type: "lecture"
    },{
      start:11,
      end:12,
      day: 3,
      professor: c1prof,
      location: c1loc,
      type: "lecture"
    },{
      start:11,
      end:12,
      day: 5,
      professor: c1prof,
      location: c1loc,
      type: "lecture"
    }]
  },{
    id:2,
    name:"CS 35L",
    slots:[{
        start:12,
        end:14,
        day:1,
        professor : c2prof,
        location: c2loc,
        type:"lecture",
    },{
        start:12,
        end:14,
        day:3,
        professor : c2prof,
        location: c2loc,
        type:"lecture",
    }
   ]
},{
    id:3,
    name:"CS M51A",
    slots: [{
        start:8,
        end:10,
        day:2,
        professor :c3prof,
        location: c3loc,
        type:"lecture",
    },{
        start:8,
        end:10,
        day:4,
        professor :c3prof,
        location: c3loc,
        type:"lecture",
    }
]
},{
    id:4,
    name: "CS 180",
    slots:[{
        start:10,
        end:12,
        day:2,
        professor: c4prof,
        location: c4loc,
        type:"lecture",
    },{
        start:10,
        end:12,
        day:4,
        professor: c4prof,
        location: c4loc,
        type:"lecture",
    }
]
},{
    id:5,
    name: "PHYSICS 4AL",
    slots:[{
        start:12,
        end:15,
        day:2,
        professor: c5prof,
        location: c5loc,
        type:"lecture",
    }]
}
];
const detailsData = [
{
    id:1,
    name: "MATH 131AH",
    fullName: "Real Analysis Honors ",
    lecture: 1,
    section: 'a',
    Description: "131A. Analysis. (4) Lecture, three hours; discussion, one hour. Requisites: courses 32B, 33B. Recommended: course 115A. Rigorous introduction to foundations of real analysis; real numbers, point set topology in Euclidean space, functions, continuity.",
    Textbook: ["Copson, Metric Spaces", "Rudin, Principles Mathematical Analysis, 3rd Edition"],
    Professor: [{name: c1prof, email:"mailto:visan@math.ucla.edu"}],
    TA: [],
    ClassWebsite: "https://ccle.ucla.edu/course/view/18F-MATH131AH-1",
},{
    id: 2,
    name:"CS 35L",
    fullName:"Software Construction Laboratory",
    lab: 2,
    Description: "Laboratory, four hours; outside study, five hours. Requisite: course 31. Fundamentals of commonly used software tools and environments, particularly open-source tools to be used in upper-division computer science courses. Letter grading.",
    Textbook: [],
    Professor: [{name: c2prof, email:"mailto:eggert@cs.ucla.edu"}],
    TA: [{name: "Dhavalikar, Rahul", email: "mailto:rddhavalikar@gmail.com"}],
    ClassWebsite: "https://ccle.ucla.edu/course/view/18F-COMSCI35L-1",
},{
    id: 3,
    name:"CS M51A",
    fullName:"Logic Design of Digital Systems",
    lecture: 2,
    Description: "Lecture, four hours; discussion, two hours; outside study, six hours. Introduction to digital systems. Specification and implementation of combinational and sequential systems. Standard logic modules and programmable logic arrays. Specification and implementation of algorithmic systems: data and control sections. Number systems and arithmetic algorithms. Error control codes for digital information. Letter grading.",
    Textbook: ["Ercegovac, CRS Introduction to Digital Systems"],
    Professor: [{name: c3prof, email:"mailto:milos@cs.ucla.edu"}],
    TA: [],
    ClassWebsite: "https://ccle.ucla.edu/course/view/18F-COMSCIM51A-2",

},{
    id:4,
    name:"CS 180",
    fullName:"Introduction to Algorithms and Complexity",
    lecture: 1,
    Description: "Lecture, four hours; discussion, two hours; outside study, six hours. Enforced requisites: course 32, Mathematics 61. Designed for junior/senior Computer Science majors. Introduction to design and analysis of algorithms. Design techniques: divide-and-conquer, greedy method, dynamic programming; selection of prototypical algorithms; choice of data structures and representations; complexity measures: time, space, upper, lower bounds, asymptotic complexity; NP-completeness. Letter grading.",
    Textbook: ["Kleinberg, Algorithm Design, 1st Edition"],
    Professor: [{name: c4prof, email:"mailto:majid@cs.ucla.edu"}, {name: c3prof, email:"mailto:milos@cs.ucla.edu"}],
    TA: [],
    ClassWebsite: "https://ccle.ucla.edu/course/view/18F-COMSCI180-1",

},{
    id:5,
    name:"PHYSICS 4AL",
    fullName: "Physics Laboratory for Scientists and Engineers: Mechanics",
    lab: 6,
    Description: "Laboratory, three hours. Enforced requisite: course 1A or 1AH. Enforced corequisite: course 1B or 1BH. Experiments on measuring gravity, accelerated motion, kinetic and potential energy, impulse and momentum, damped and driven oscillators, resonance and vibrating strings. Computer data acquisition and analysis. Introduction to error analysis, including distributions and least-squares fitting procedures. Letter grading.",
    Textbook: [],
    Professor: [{name: c5prof, email:"mailto:ph@physics.ucla.edu"}],
    TA: [],
    ClassWebsite: "https://ccle.ucla.edu/course/view/18F-PHYSICS4AL-6",

}

]
export {ScheduleData, detailsData};
