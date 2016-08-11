var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        const roughly = target - nums[i];
        
        let j = i + 1;
        let k = nums.length - 1;
        
        while (j < k) {
            const sum = nums[j] + nums[k];
            
            if (sum === roughly) return sum + nums[i];
            
            if (Math.abs(sum - roughly) < Math.abs(closest - target)) {
                console.log(nums[i], nums[j], nums[k]);
                closest = sum + nums[i];
            }
            
            if (sum > roughly) {
                k--;
            } else {
                j++;
            }
            
        }
    }
    
    return closest;
};

console.log(threeSumClosest([0,2,1,-3], 1))