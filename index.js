const allPath = (root) => {
  const ans = [];

  const queue = [[root, []]];

  while (queue.length > 0) {
    const [node, curr] = queue.shift();

    
    
    if (node) {
      if (!node.left && !node.right) {
        ans.push(curr.concat([node.val]));
      } else {
        
        if (node.left) {
          queue.push([node.left, curr.concat([node.val])]);
        }

        if (node.right) {
          queue.push([node.right, curr.concat([node.val])]);
        }
      }
    }
  }

  return ans;
}

console.log(allPath({
  val: 1,
  left: {
    val: 2,
  },
  right: {
    val: 3,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    }
  }
}))