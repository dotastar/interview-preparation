const closest = (arr, x, left = 0, right = arr.length - 1) => {
    if (left > right) return -1;
    if (left === right) {
        const choices = [left];
        if (left - 1 >= 0) choices.push(left - 1);
        if (left + 1 < arr.length) choices.push(left + 1);

        console.log(choices)

        const abss = choices.map(e => Math.abs(arr[e] - x));
        let i = 0;
        let diff = Infinity;

        abss.forEach((e, j) => {
            if (e < diff) {
                diff = e;
                i = j;
            }
        });

        return choices[i];
    }
    const mid = left + ((right - left) >> 1);

    if (arr[mid] === x) return mid;
    if (arr[mid] > x) return closest(arr, x, left, mid - 1);
    return closest(arr, x, mid + 1, right);
}

console.log(closest([1,2,3,4,5,5.2,6,7,8], 7.6))