# interview preparation

## checklist
- [ ] HTTP
- [ ] WebSockets
- [ ] cookies
- [ ] asset loading/caching
- [ ] A/B testing
- [ ] REST API
- [ ] understand the intricacies of how JS and CSS impact rendering
- [ ] SEO
- [ ] client-side performance and optimization experience
- [x] mutex
- [x] semaphores
- [x] deadlock
- [x] shuffling

## notes

### deck shuffle
Go through the elements in order, swapping each element with a  random element in the array that does not appear earlier than the element. O(n)

### mutex
a mutex is an integer that  starts at 1.  Whenever a thread needs to alter the array, it "locks" the mutex.  This  causes the thread to wait until the number is positive and then decreases it by one. When the thread is done modifying the array, it "unlocks" the mutex, causing the  number to increase by 1.

### semaphore
a semaphore's  integer may start at a number greater than 1.  The number at which a semaphore  starts is the number of threads that may access the resource at once.  Semaphores  support "wait" and "signal" operations, which are analogous to the "lock" and  "unlock" operations of mutexes.
deadlock prevention
assign an order  to our locks and require that locks always be acquired in order
​
### rendering performance
* 60FPS (16.66 ms/frame), and browser has housekeeping work, so all of your work needs to be completed inside 10ms. When you fail to meet this budget the frame rate drops, and the content judders on screen, referred to as **jank**

* pixel pipeline: JavaScript -> style calculations -> layout -> paint -> composing
* use requestAnimationFrame for visual changes instead of setInterval
* move pure computational work to Web Workers
* [rendering performance](https://developers.google.com/web/fundamentals/performance/rendering/?hl=en)
* [optimize javascript execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution?hl=en)

​
## leetcode

### todo
4, 10, 15, 16, 18, 29, 44, 31, 32, 45, 55, 68, 72, 73, 74, 75, 76, 79, 84, 85 87 88, 92, 95, 97, 99, 105, 106, 111, 112, 113, 115, 116, 117, 120, 123, 124

### String to Integer (atoi)
consider the following cases:

* leading whitespaces
* sign
* overflow
* invalid input

### Regular Expression Matching
* [link 1](https://discuss.leetcode.com/topic/6183/my-concise-recursive-and-dp-solutions-with-full-explanation-in-c)
* [link 2](http://articles.leetcode.com/regular-expression-matching)

### Letter Combinations of a Phone Number
check empty string case

### Binary Tree Longest Consecutive Sequence
`help(node, parent, len)`

### Longest Increasing Subsequence
dp[i]: max ending here

### Paint Fence* 2 dp: dp1[i]=dp2[i-1]; dp2[i]=(k-1)(dp1[i-1]+dp2[i-1])
* recursion* queue of size 3?

### LRU Cache* O(n): Queue as List + HashTable ( Look up O(1) )* O(1): Queue as Double Linked List + Hashtable + dummy    * head & tail to avoid check null [Link](https://leetcode.com/discuss/20139/java-hashtable-double-linked-list-with-touch-of-pseudo-nodes)

### Merge Intervals* merge two* insert into a list

### 3Sum Smaller
`for (var k = 2; k < nums.length; k++) { count += twoSumSmaller(nums, target - nums[k], k - 1); }`

### N-Queens, N-Queens II* 1D array store Q pos info, validity check ALL 4* return when n === row

### Perfect Squares Solutions* dp: For each i, it must be the sum of some number (i - j*j) and a perfect square number (j*j)* BFS* Mathematics: Lagrange's four-square theorem

### Sort List* Extract value, sort* 2 Ptr to Mid Point, Merge Sort
    * two ptr init pos diff

### Missing Ranges* push start - 1 and end - 1, check diff between nums[i + 1] and nums[i] ?= 1 ?= 2 ?> 2

### Longest Substring with At Most Two Distinct Characters * hash table: record occurrence* 2 ptr: start of the substring; current pos

### Coins in a Line* dp(i, j) = sum{Ai ... Aj} - min { dp(i+1, j), dp(i, j-1) }    * Ai..Aj left and your turn to pick
* dp(i,j)=max{Ai+min{P(i+2,j), P(i+1,j-1)},Aj+min { P(i+1, j-1), P(i, j-2) } }* base cases: dp(1,1), dp(2,2), ... dp(n, n)

### Height/Level of a Binary Tree* [recursion](http://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)○ [iteration](http://www.geeksforgeeks.org/iterative-method-to-find-height-of-binary-tree/) BFS, level-wise traversal, dequeue all level atonce

### 78. Subsets
* method 1: iterative, time O(2^n)
* method 2: recursive
* method 3: bit manipulation

### 90. Subsets II
think duplicate number as a special number, ans can be put in set 0 times, 1 times, .... k times where k equal the number of duplication

### 111. Minimum Depth of Binary Tree
check leaf node: iff 2 children

### 150. Evaluate Reverse Polish Notation
stack

### 151. Reverse Words in a String
edge cases

### 102. Binary Tree Level Order Traversal
pay attention to push order for left/right child when doing iterative dfs

### 360. Sort Transformed Array
`a > 0, a === 0, a < 0`

### 28. Implement strStr()
* `O(mn)`
* KMP algorithm `O(n)`

### 67. Add Binary
*follow up*: 8 bit, 16 bit

### 89. Gray Code
based on previous one, first half and second half, mid differ at highest bit

### 169. Majority Element
https://discuss.leetcode.com/topic/17446/6-suggested-solutions-in-c-with-explanations
http://www.geeksforgeeks.org/majority-element/

### 214. Shortest Palindrome
https://discuss.leetcode.com/topic/21068/my-7-lines-recursive-java-solution

### 253. Meeting Rooms II
https://discuss.leetcode.com/topic/35253/explanation-of-super-easy-java-solution-beats-98-8-from-pinkfloyda

### 255. Verify Preorder Sequence in Binary Search Tree
https://discuss.leetcode.com/topic/21217/java-o-n-and-o-1-extra-space

### 325. Maximum Size Subarray Sum Equals k
`(sum - k)` instead of `(k - sum)`
*follow up*: 2d matrix

## note
* does array contain duplicates?
* empty array case
* replace function callback

```javascript
function replacer(match, p1, p2, p3, offset, string) {
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
```

* rotate binary search: find the rotate pivot and take rotation into account and do ordinary binary search
* longest, 2d grid, number: **dp**
* minimum: **greedy**
* instead of mimic problem, use data structure to store key data, like in n-queen
* linked list proper termination: .next = null
* maximum subarray: divide and conquer, dp with dp[i + 1] is the max subarray sum ending in A[i]
    1. check if there is a subarray sum equals x
    2. follow-up: check if there is a sub-rectangle sum equals x in matrix
    3. http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=164888&fromuid=109727
* spanning tree T of an undirected graph G is a subgraph that is a tree which includes all of the vertices of G
* Kruskal's algorithm to find Minimal Spanning Tree

```
sort the edges of G in increasing order by length
keep a subgraph S of G, initially empty
for each edge e in sorted order
  if the endpoints of e are disconnected in S
    add e to S
return S
```

* write steps down in order not to miss any step
* when use reduce, always provide an initial value, for empty array case
* when cloning graph, use a map
* when using regex, don’t miss ^ and $
* integer division, think about negative numbers, truncation
* clockwise matrix rotate: first reverse up to down, then swap the symmetry

```java
void rotate(vector<vector<int> > &matrix) {
  reverse(matrix.begin(), matrix.end());
  for (int i = 0; i < matrix.size(); ++i) {
    for (int j = i + 1; j < matrix[i].size(); ++j)
      swap(matrix[i][j], matrix[j][i]);
  }
}
```
* regex: //g matches as much as possible
* when do binary things and slice array, consider cases for 1 element, 2 element, then properly +/- 1 for Math.floor
* array: check boundary index valid or not when accessing
* when deal with numbers, consider neg, 0, pos
* Fisher–Yates shuffle
* sort: return -1/1, +true = 1, +false = 0, e.g. return +(a.value > b.value) || +(a.value === b.value) - 1;
* when deal with sentence, consider multiple spaces? punctuations?
* when deal with pointers in linked list, double check position when calling .next
* get set bit: diff &= -diff;
* [task schedule](http://www.geeksforgeeks.org/rearrange-a-string-so-that-all-same-characters-become-at-least-d-distance-away/)
* [Morris inorder tree traversal](http://stackoverflow.com/questions/5502916/explain-morris-inorder-tree-traversal-without-using-stacks-or-recursion)
* `strcspn`

```javscriptvar strcspn = function (str1, str2) {  var hash = {};  for (var i = 0; i < str1.length; i++) {    if (!hash[str1[i]]) { hash[str1[i]] = i; }  }
  var min = str1.length - 1;
  for (var i = 0; i < str2.length; i++) {    if (hash[str2[i]] < min) {
      min = hash[str2[i]]    }  }  return min;
};
```

* [Segregate Even and Odd numbers](http://www.geeksforgeeks.org/segregate-even-and-odd-numbers/)



## code challenge
- [ ] [bianry tree and](http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=140358&page=1#pid1971401)
- [ ] deep copy tree
- [ ] serialize an N-ary Tree
- [ ] 给定一个 array,只包含 0,1, 找到一个分割位置,使左侧 0 出现的个数和右侧 1 出现的个数之和最大化
    * brute force, time: O(n^2), space: O(1)
    * follow up, can we solve in O(n): DP, two temp array-google 1point3acres
    * follow up, can we use O(1) space: count all 1, and all 0, traverse array, if encounter 0, add 1, else , minus 1
- [ ] Give you an integer matrix, find the longest increasing continuous subsequence in this matrix
- [ ] 实现任意大整数的加减乘除
- [ ] 给 string, 只包含{0,1,?}, ?可以代表 0 或者 1, 输出所有的组合. 例如"10?", 输出"100", "101"
- [ ] 求 array 里 unordered pair 的数量(前一个数比后一个数大)比如{1, 3, 2}里面有一个(3, 2), {1, 2, 3}里面没有, {3, 2, 1}里面有三个(3, 2) (3, 1) (2, 1)
- [ ] 给一个 int[] array, e.g {1,5,0,6}和一个 int target,e.g. target = 21; 问是否存在某种分法把 array 分成几部分,每部分看成一个 int,这几部分加起来等于 target。 e.g. {1,5}{0}{6},三部分加起来是 21。{1,5}{0,6}也是 21
- [ ] 社交网络中,如何实现好友推荐。抽象成图,然后找出共同好友最多的那个人
- [ ] Given a sorted array of floats, find the index of the number closest to x
- [ ] 一段代码,用 string 表示的,写一个函数,返回所有的注释里面的内容,返回//和/* */里 的内容
- [ ] 写一个 meeting schedule, 求最少的房间
- [ ] 假设有一个 dictionary 和一个字符的 set,找到从该字符集中能组成的- [ ] 存在于 dictionary 中的 最长的 word
- [ ] 问一个 word grid.给一个词,返回有多少个 path 可以组成所给定的词
- [ ] sparse matrix
- [ ] right rotate k 次。要求 O(N),in-place
- [ ] 一群人排队,每个人有(height, Tvalue), height 表示身高,Tvalue 表示 前面有几个比当前人身 高高的人。。然后顺序打乱,重新排队,还得复原以前的队列
- [ ] 给以下矩阵序列 level 0: 0, level 1: 1,2; 3,4 level 2: 5,6,7,8; 9,10,11,12; 13,14,15,16; 17,18,19,20, 写个转换方程 int get(int level, int i, int j)
- [ ] 找一个先单增后单减 array 的最大值
- [ ] 求最长等差数列.给定一个未排序数组,找出其中最长的等差数列.(PS O(n^2)的时间复杂度)
- [ ] 給你一個 integer array, 假設每個 element 值代表建物高度, 如何算出這堆建物可存多少水? 比左右相鄰 element 低的 element 就可以存水
- [ ] 一个文件里是一条条短信<time_stamp,senderID, receiverID>记录,按 time_stamp 排好序了。 a) 给一个 senderID 找出所有他发的短信 b) 如果A给B发了短信(A->B)那么B是A的1 degree friend,如果B->C,那么C是A的 2 degree,给一个 N 返回所有小于等于 degree 的 friend c) 给上面那个写 testcase
- [ ] remove duplicate lines of a file(what if the file is very large which could not be held in the main memory)
- [ ] check if a point is within a polygon
- [ ] 插入整数,然后计算最近五个数的平均数。然后问了一下如果是 web application 这个需要注 意什么?想想办法提高 performance,还有提高存储效率,还扯了一些其他网络的知识。
- [ ] n 台机器做 web crawler,如何保证每个网页只被 download 一次,就是 n 台机器里面只 能有一个机器访问某网页一次。要求系统效率高,communication 负荷小。
- [ ] http://stackoverflow.com/questions/17928158/find-top-10-most-frequent-visited-url-data-is- stored-accross-network
- [ ] Given an input array of integers of size n, and a query array of integers of size k, find the smallest window of input array that contains all the elements of query array and also in the same order.
- [ ] find an only number which occurs once while others occurs three times
- [ ] find reverse pair in two arrays
- [ ] fill tank with min steps, Tank Size: 80 litre, Containers: 1,3,5,6,25 litre, Solution: 4: 5, 25, 25, 25
- [ ] You need to organize a football tournament. There are n teams given.
- [ ] You need to prepare a schedule for the matches so that each team plays with every other team and on the same day no team plays twice. You want to finish the tournament as early as possible.
- [ ] A circus is designing a tower routine consisting of people standing atop one another’s shoulders. For practical and aesthetic reasons, each person must be both shorter and lighter than the person below him or her. Given the heights and weights of each person in the circus, write a method to compute the largest possible number of people
longest repeating substring, e.g. "abab" for "ababab"
generate randum number within a circle
reverse 32 bit number 1101001 ==> 1001011
- [ ] Print a spiral array
e.g. given 5:
25 24 23 22 21
10 09 08 07 20
11 02 01 06 19
12 03 04 05 18
13 14 15 16 17
- [ ] You are given a String number containing the digits of a phone number (the number of digits, n, can be any positive integer) . To help you memorize the number, you want to divide it into groups of contiguous digits. Each group must contain exactly 2 or 3 digits. There are three kinds of groups: • Excellent: A group that contains only the same digits. For example, 000 or 77. Good: A group of 3 digits, 2 of which are the same. For example, 030, 229 or 166. Usual: A group in which all the digits are distinct. For example, 123 or 90. The quality of a group assignment is defined as 2 × (number of excellent groups) + (number of good groups) Divide the number into groups such that the quality is maximized. Design an efficient algorithm to return the solution that maximizes the quality.
- [ ] implement function strstrp(String a, String b) returns index where any permutation of b is a substring of a. e.g. strstrp("hello", "lle") returns 1, O(n)
- [ ] 给你一个字符串,统计字符出现次数。输入"AABBBCCC",输出"2A3B3C"
- [ ] use bfs to print all path from root to leaf
- [ ] Find shortest snippet,比如给一个 Document 是 A,X,X,B,A,X,B,Query 是 A,B,要求返回 shortestSnippet 第一问:如果 Query 有序(即 A 一定要在 B 前面),那么要返回 A,X,B Follow up:如果 Query 无序(即 B 在 A 前面也可以),那么要返回 B,A
- [ ] 求binary tree 所有从根开始到叶子的所有路径和, no recursion
- [ ] Given an array of non negative integers and a number N, finda length of shortest subarray sum of whose all elements is N
- [ ] 把 sorted list 转成 complete binary search tree
- [ ] 一个数组内要是存在至少三个升序的数(array[x] < array[y] < array[z], x < y < z)就返 回 true,否则返回 false
- [ ] Find first k common elements in n sorted arrays
- [ ] abc2ddddefg 变成 abc1x24xdefg, abc5xefg 变成 abc1x5xefg, abc55555xefg 变成 abc5x5xefg
- [ ] precision of sqrt(x)
- [ ] Generate Maze
- [ ] 先递增后递减的数组，找到最大值, 非严格递增递减
- [ ] https://leetcode.com/problems/zigzag-conversion/
- [ ] 2D matrix length of longest consective path 滑雪问题
- [ ] Given an array of Ad (profit, start_time, end_time) and a timespan [0, T], find the max profit of Ads that fit the timespan
- [ ] binary watch：上边是小时，下边是分钟，最左边最significant，最右边为1。给你数字n，return所有可能的时间，以string为表达形式
- [ ] find the most popular number in an array of interger. The 'popular number' is defined as the number occurs more than n/4, where n is the length of array
- [ ] 给你一个数组，从这个数组中挑出最少的数字，它们的和要比整个数组的和的1%要大。要求Linear time解决
- [ ] insert a number in a sorted singly linked lists
- [ ] one sorted array. find the number of appearence of a given number
- [ ] 题目大致是BACCBBAAA -> ABABACABC，就是输出相邻字母不能相同的string，这题要用到heap
- [ ] rearrange characters to be seperated by k
- [ ] return duplicated subtree
    1. bfs store each subtree in list, check whether 2 trees are the same
- [ ] Check whether A is B's subtree
- [ ] Find duplicate subtrees in a BT, and print out
    1. if stream and traversal once
- [ ] 第二题是一个array里面只有0-9的digits, 有一个target， 判断是否存在一种组合可以等于target 1. eg: [6,3,1,0,5]  target=78, 这个return True. 63+10+5 = 78 如果target= 636 return True. 631+0+5 = 636
- [ ] rearrange aababbc so neighbouring char different: abcabab
- [ ] Flight passes, find path from a city to another city; what if loop, n to 1 city
- [ ] 2d array of char, 'X' cannot go, ' ' means grass, given x,y remove grass and return back (code see picture)
- [ ] Given array contains only 0, 1, find a position to maximize left 0 and right 1
    1. brute force,  time: O(n^2), space: O(1)
    2. follow up, can we solve in O(n): DP, two temp array
    3. follow up, can we use O(1) space: count all 1, and all 0, traverse array, if encounter 0, add 1, else , minus 1
- [ ] Longest Consecutive Sequence in a matrix
- [ ] rearrange array，使得相邻两个字符是不一样的
- [ ] 给一个array 和一个 target求出 array里有几组tuple相加是小于等于target的
- [ ] Different Ways to Add Parentheses?
    1. only number, use binary search to optimize
- [ ] 4*10000=40000的string password minbimize length
    1. backtracking
- [ ] 输出任意permutation使得List中的相同element的间距要大于minDistance
    1. http://articles.leetcode.com/2010/05/here-is-another-google-phone-interview.html
    2. http://www.geeksforgeeks.org/rearrange-a-string-so-that-all-same-characters-become-at-least-d-distance-away/
- [ ] <235, Obama> 代表在第235秒时, obama得到了一个选票. 你现在有一个list的这种数据, 求在第x秒时谁的票数最多
- [ ] 给一个array比如[4,2,1,3,5],根据这个array现在我们能有了一个新的array => 每个数是在原array里, 在它左边的所有比它大的number的个数,就是[0,1,2,1,0]. 题目是现在给了这个[0,1,2,1,0]要求原array, 原来array的range是1~n
- [ ] smallest islands number and largest islands number
- [ ] 一个二维数组代表了一个岛. 周围都是海, 岛的左侧和上侧通向Pacific, 右侧和下侧通向Atlantic. 每个数字都代表了那个位置的海拔高度. 现在下雨了, 雨只有从海拔高的地儿能流向海拔低或者一样的地儿. 返回岛上的分水岭的点
- [ ] Leetcode 3 sum with duplicated use
- [ ] Give flights with start and end time. Find maximum number of simultaneous flights
- [ ] Leetcode read4
    1. read 4096
- [ ] number of airplanes in the sky
- [ ] 2d boolean array, find all squares (Leetcode max square)
    1. ​http://www.jiuzhang.com/solutions/maximal-square/
- [ ] 输入是两个字符串，一个是 target，另一个是 guess，输出有多少个字符是完全对的，有多少个是对的字符，但是错的位置。例子：target: "ROADS"，guess: "BOARD"，输出 2 个完全对，2 个字符对但是位置不对。写代码。写完以后说，如果你现在在玩这个游戏，你最初只知道目标串的长度是多少，每次你提交一个 guess，你会得到上面那段程序的输出作为反馈，你如何尽可能少猜并且猜对？
- [ ] Given two string S and T with same length, the distance is defined as the number of positions in which S and T have different characters. Your task is to minimize this distance, by swap at most 2 characters (which means at most 1 swap) in S. Return the two index. If it is not necessary to swap, return -1, -1
- [ ] 给你一个password 假定6位， 有个function 每call 一次就给你一个triplet 是password 里的随即三位，order不变。比如google, 可能返回， ggl, goe, oog, ool, ........问如何最有效破译这个密码，写code
