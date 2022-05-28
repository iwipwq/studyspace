function isMultipleOf(num) {
    const checkType = typeof num === 'number'
    const isMultiple = num % 3 === 0
    if(!checkType) {
        return alert("Only number must be entered")
    }
    if(isMultiple) {
        return alert("Clap")
    }
    return alert(num);
}