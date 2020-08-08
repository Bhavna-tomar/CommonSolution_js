
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
    let IntervelArr = [];
    IntervelArr.push(n[0]);
    
    for (let i = 1; i < n.length; i++) {
    let top = IntervelArr[IntervelArr.length - 1];
    if (top.endTime < n[i].startTime) {
        IntervelArr.push(n[i]);
    } else if (top.endTime < n[i].endTime) {
    top.endTime = n[i].endTime;
    }
    }
    
    return IntervelArr;
    }
    
    console.log(mergeOverlapIntervals(meetings));