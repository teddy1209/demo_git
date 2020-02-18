function SumOfkNumber(arr, n, m) {
    for (i in arr) {
        let item = arr[i]
        if (n == 1) {
            if (arr.indexOf(m) !== -1) {
                return [m]
            } else {
                return null
            }
        }
        let arr1 = [...arr]
        arr1.splice(i, 1)
        let SumOfkNumber1 = SumOfkNumber(arr1, n - 1, m - item);
        if (SumOfkNumber1) {
            SumOfkNumber1.push(item)
            return SumOfkNumber1
        }
    }
    return null
}
let arr = [1, 2, 3, 4]
console.log(SumOfkNumber(arr, 2, 6))