function mySort(heights) {
    const heightsArr = heights.split(' ');
    const sorter = function(arr) {
        console.log("call sorter")
        for(let i=0; i<arr.length-1; i++){
            console.log(i+'times',arr[i+1],arr[i]>arr[i+1],parseInt(arr[i])>parseInt(arr[i+1]))
            if(arr[i+1] !== undefined && parseInt(arr[i])>parseInt(arr[i+1])){
                arr.splice([i],2,arr[i+1],arr[i])
                sorter(heightsArr);
            }
        }
    }
    sorter(heightsArr)
    console.log(heightsArr);
}

// Test case
// mySort('5 1 4 2 2 10 12 100 78 99 6')
// -> (11) ['1', '2', '2', '4', '5', '6', '10', '12', '78', '99', '100']