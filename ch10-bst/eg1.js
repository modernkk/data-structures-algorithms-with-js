'use strict';

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('Inorder traversal: ');
nums.inOrder(nums.root);
console.log('Preorder traversal: ');
nums.preOrder(nums.root);
console.log('Postorder traversal: ');
nums.postOrder(nums.root);
var min = nums.getMin();
console.log('The minimum value of the BST is: ' + min);
var max = nums.getMax();
console.log('The maximum value of the BST is: ' + max);
var value = 45;
var findVal = nums.find(value);
if (findVal !== null) {
	console.log('Found ' + value + ' in the BST. left = ' + findVal.left.data + ',right = ' + findVal.right.data);
} else {
	console.log(value + ' was not found in the BST.');
}
value = 425;
findVal = nums.find(value);
if (findVal !== null) {
	console.log('Found ' + value + ' in the BST. left = ' + findVal.left + ',right = ' + findVal.right);
} else {
	console.log(value + ' was not found in the BST.');
}
nums.remove(23);
console.log('Inorder traversal: ');
nums.inOrder(nums.root);
