var divide = function(dividend, divisor) {
    let result = 0;
    
    while (dividend >= divisor) {
        let i = 0;
        
        while (dividend >= (divisor << (i + 1))) i++;
        result += 1 << i;
        dividend -= divisor << i;
    }
    
    return result;
};

console.log(divide(321, 1))