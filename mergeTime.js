
var meetings =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

function mergeOverlapIntervals(arr) {


    function compareInterval(a,b){
        return a.startTime > b.startTime ;
      }

   
    let n = arr.sort(compareInterval);
    console.log("nLength",n.length);     //5
    let IntervelArr = [];
    IntervelArr.push(n[0]);
    console.log("arrLength",IntervelArr.length);
    console.log("IntervelArr",IntervelArr); // [ { startTime: 0, endTime: 1 } ]
                        //5
    for (let i = 1; i < n.length; i++) {
    let top = IntervelArr[IntervelArr.length - 1];
    // console.log("sdfdeergtfe",IntervelArr[IntervelArr.length - 1]);
    console.log("top",top);  //initially  strtTme:0, endtme:1
    if (top.endTime < n[i].startTime) {
        console.log("top.endTime",top.endTime);
        console.log("n[i].startTime",n[i].startTime);
        IntervelArr.push(n[i]);
        console.log("IntervelArr111",IntervelArr);

    } else if (top.endTime < n[i].endTime) {
    top.endTime = n[i].endTime;
    }
    }
    
    return IntervelArr;
    }
    
    console.log(mergeOverlapIntervals(meetings));