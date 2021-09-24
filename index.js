function  findMatching(arr, name){
    
    const newArr = arr.filter(name => {
        name == arr.index
    })
    if (newArr){
        return newArr
    }
    return []
}
