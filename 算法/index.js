//给定两个数组，编写一个函数来计算它们的交集。
// 示例 1:
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 示例 2:
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]
function setMap(nums) {
  const map = new Map();
  nums.forEach((item) => {
    const count = map.get(item);
    if (count) {
      map.set(item, count + 1);
    } else {
      map.set(item, 1);
    }
  });
  return map;
}
function intersect(num1, num2) {
  const map1 = setMap(num1);
  const map2 = setMap(num2);
  const arr = [];
  for (let item of map1.keys()) {
    const count1 = map1.get(item);
    const count2 = map2.get(item);
    if (count2) {
      const min = Math.min(count2, count1);
      for (let i = 0; i < min; i++) {
        arr.push(item);
      }
    }
  }
  console.log(arr);
  return arr;
}

intersect(
  [1, 12, 223, 1, 2, 3, 12, 3, 2, 1, 2, 2],
  [1, 3, 2, 4, 23, 4, 4, 4, 4, 2, 3, 23, 1]
);
