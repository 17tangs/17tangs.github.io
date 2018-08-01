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
export {ScheduleData};
