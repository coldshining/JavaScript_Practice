let maximumProduct = function(nums) {
    if(nums.length<3)
    {
        alert("结果错误！");
        return 0 ;
    }

    let result =1;
    if(nums.length==3)
    {
        for(let i =0;i<nums.length;i++)
        {
            result*=nums[i];
        }
        return result;
    }
    if(nums.length>3)
    {
        for(let i = 0;i<nums.length-1;i++)
        {
            for(let j = i+1;j<nums.length;j++)
            {
                if(nums[i]<nums[j])
                {   let temp;
                    temp=nums[i];
                    nums[i]=nums[j];
                    nums[j]=temp;
                }
            }
        }
            let a = nums[0]*nums[1]*nums[2];
            let b = nums[0]*nums[length-1]*nums[length-2];
            let c = nums[0]*nums[1]*nums[length-1];
            let d = nums[length-1]*nums[length-2]*nums[length-3];
            if(a>b||a==b)
            {
                if(a>c||a==c)
                {
                    if(a>d||a==d)
                    {
                        return a;
                    }
                }
            }
        if(b>a||b==a)
        {
            if(b>c||b==c)
            {
                if(b>d||b==d)
                {
                    return b;
                }
            }
        }
        if(c>a||c==a)
        {
            if(c>b||c==b)
            {
                if(c>d||c==d)
                {
                    return c;
                }
            }
        }
        if(d>a||d==a)
        {
            if(d>b||d==b)
            {
                if(d>c||d==c)
                {
                    return d;
                }
            }
        }
    }


}
let arr = [1,2,3,4];
arr.length = 4
console.log(maximumProduct(arr));