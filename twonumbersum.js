/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let i,j;
    let num = new Array(2);
    for(i=0;i<nums.length-1;i++)
    {
        for(j=i+1;j<nums.length;j++)
        {
            if(target==nums[i]+nums[j])
            {
                num[0]=i;
                num[1]=j;
                return num;
            }
        }
    }
    return 0;
}