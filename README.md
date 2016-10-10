# interview preparation

## given problem...
1. **clarify problem**
    * consider an example that is rich enough but not tedious disambiguate expected result
    * state and clarify key assumptions: expect result, any memory or performance requirement
    * clarify the function signature, input, output
2. start with first solution that comes to mind run at least 1-2 examples
    * write steps down in order not to miss any step
    * COMMENTS!!!
    * check edge cases
    * clean up with reasonable variable name
    * ask interviewer if any questions before refine
3. refine the solution
    * clarify assumption rinse, repeat compare the solution
    * analytic skills sound design
    * limitation corner cases error checking
* email addr for thank you letter

### array
* duplicate element?
* empty array case
* if array is ordered:
    * binary search
    * 2 pointers, one from front, one from end
* remove duplicates?
    * sort, then skip

## leetcode

### 8. String to Integer (atoi)
consider the following cases:

* leading whitespaces
* sign
* overflow
* invalid input

### 12. Integer to Roman
* keep minusing the largest number of and append

### Regular Expression Matching
* [link 1](https://discuss.leetcode.com/topic/6183/my-concise-recursive-and-dp-solutions-with-full-explanation-in-c)
* [link 2](http://articles.leetcode.com/regular-expression-matching)

### Letter Combinations of a Phone Number
check empty string case

### Binary Tree Longest Consecutive Sequence
`help(node, parent, len)`

### Longest Increasing Subsequence
dp[i]: max ending here

### LRU Cache＊
* O(1): Queue as Double Linked List + Hashtable + dummy
    * head & tail to avoid check null [Link](https://leetcode.com/discuss/20139/java-hashtable-double-linked-list-with-touch-of-pseudo-nodes)
* disadvantage
    * hard to track of the time each page was last used in all the registers
    * implementation difficult

### Merge Intervals
* merge two
* insert into a list

### 3Sum Smaller
`count += end - start;`

### Perfect Squares Solutions
* dp: For each i, it must be the sum of some number `(i - j*j)` and a perfect square number `(j*j)`
* BFS
* Mathematics: Lagrange's four-square theorem

### Sort List
* Extract value, sort
* 2 Ptr to Mid Point, Merge Sort
    * two ptr init pos diff

### Missing Ranges
* push start - 1 and end - 1, check diff between `nums[i + 1]` and `nums[i]` `=== 1`, `=== 2`, `> 2`

### Longest Substring with At Most Two Distinct Characters 
* hash table: record occurrence
* 2 ptr: start of the substring; current pos

### Coins in a Line
* `dp(i, j) = sum{Ai ... Aj} - min { dp(i+1, j), dp(i, j-1) }`
    * Ai..Aj left and your turn to pick
* `dp(i,j) = max(Ai + min(P(i+2, j), P(i+1, j-1)), Aj + min(P(i+1, j-1), P(i, j-2)))`
* base cases: `dp(1,1)`, `dp(2,2)`, ... `dp(n, n)`

### [Coin Change](http://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/)
```javascript
for (const coin of coins)
    for (let i = coin; i <= target; i++)
        dp[i] += dp[i - coin];
```

### [Optimal Strategy for a Game](http://www.geeksforgeeks.org/dynamic-programming-set-31-optimal-strategy-for-a-game/)

### Height/Level of a Binary Tree
* [recursion](http://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)
* [iteration](http://www.geeksforgeeks.org/iterative-method-to-find-height-of-binary-tree/) BFS, level-wise traversal, dequeue all level at
once

### 78. Subsets
* method 1: iterative, time O(2^n)
* method 2: recursive
* method 3: bit manipulation

### 90. Subsets II
think duplicate number as a special number, ans can be put in set 0 times, 1 times, .... k times where k equal the number of duplication

### 150. Evaluate Reverse Polish Notation
stack

### 151. Reverse Words in a String
edge cases

### 360. Sort Transformed Array
`a > 0, a === 0, a < 0`

### 28. Implement strStr()
* `O(mn)`
* KMP algorithm `O(n)`

### 67. Add Binary
*follow up*: 8 bit, 16 bit

### 89. Gray Code
based on previous one, first half and second half, mid differ at highest bit

### 155. Min Stack
two stack, one keeps for every element, one for min elements

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

### 271. Encode and Decode Strings
* prefix length for each string
* prefix total number and lengths of each string

### 310. Minimum Height Trees
* extend from path graph, start from leaves, when pointers less than 2 unit distance apart, when these pointers are middle points
* above idea is just to find the longest path along the way, to find the longest path, dfs/bfs one node, find the most apart one, then dfs/bfs that node, find the most aparat one, the path is the longest path


### 33. Search in Rotated Sorted Array
* [generalized binary search method](https://discuss.leetcode.com/topic/53387/java-without-finding-the-pivot-with-detailed-explainations)

### 307. Range Sum Query - Mutable
* update O(1), query O(n)
* update O(n), query O(1) precompute
* segment tree update O(lg n) query O(lg n)
* - [x] range minimum query: [segment tree](http://www.geeksforgeeks.org/segment-tree-set-1-range-minimum-query/)

## note
* [scalability](http://blog.csdn.net/v_july_v/article/details/7382693)

### string
* when deal with sentence, consider multiple spaces? punctuations?
* for string**s**, check:
    * case sensitive?
    * white space
    * punctuation
    * char set

* `strcspn`

```javascript
var strcspn = function (str1, str2) {
  var hash = {};
  for (var i = 0; i < str1.length; i++) {
    if (!hash[str1[i]]) { hash[str1[i]] = i; }
  }
  var min = str1.length - 1;
  for (var i = 0; i < str2.length; i++) {
    if (hash[str2[i]] < min) {
      min = hash[str2[i]]
    }
  }
  return min;
};
```

- [ ] implement `indexOf`, '\*' can match other letter
- [ ] Given two string S and T with same length, the distance is defined as the number of positions in which S and T have different characters. Your task is to minimize this distance, by swap at most 2 characters (which means at most 1 swap) in S. Return the two index. If it is not necessary to swap, return -1, -1
- [ ] [palindromic substrings of a given string](http://www.geeksforgeeks.org/find-number-distinct-palindromic-sub-strings-given-string/)
- [ ] abc2ddddefg 变成 abc1x24xdefg, abc5xefg 变成 abc1x5xefg, abc55555xefg 变成 abc5x5xefg
- [ ] 给你一个字符串,统计字符出现次数。输入"AABBBCCC",输出"2A3B3C"
- [ ] encode aaabbbbcccc->aaa4xb4xc,需要考虑3aaaaa->35xa
    * suffix num with '/'
- [ ] given decoder, write an encoder 3xe -> eee
    * abc2ddddefg
    * abc5xefg
    * abc55555xefg
- [ ] 实现任意大整数的加减乘除
- [ ] 1234567891011... Find nth char
- [x] Find common directory path
- [x] Reverse Vowels of a String
- [ ] input: string s, k, output: subsequence of size = k which has smallest lexical order. e.g. pineapple, 3 -> ale
-[x] convert 20th Oct 2052; 1st Jun 1996 to 2052-10-20, 1996-6-01

```javascript
function convert (date) {
    const [day, month, year] = date.trim().split(' ');

    const months = {
        'Jan': '01',
        // ...
    };

    const rawDay = day.match(/^\d+/)[0];

    return [year, months[month], rawDay.length === 1 ? `0${rawDay}` : rawDay].join('-')
}
```

- [x] 给 string, 只包含{0,1,?}, ?可以代表 0 或者 1, 输出所有的组合. 例如"10?", 输出"100", "101"
- [x] return comment contents in a str, including `//` and `/**/`
    * `(\/\*(\*(?!\/)|[^*])*\*\/)|(\/\/.*)`
- [x] remove duplicate lines of a file
    * `cat filename | sort | uniq`
    * *follow up* what if the file is very large which could not be held in the main memory
- [ ] longest repeating substring, e.g. "abab" for "ababab"
    * http://www.geeksforgeeks.org/longest-repeating-subsequence/
- [ ] You are given a String number containing the digits of a phone number (the number of digits, n, can be any positive integer) . To help you memorize the number, you want to divide it into groups of contiguous digits. Each group must contain exactly 2 or 3 digits. There are three kinds of groups: • Excellent: A group that contains only the same digits. For example, 000 or 77. Good: A group of 3 digits, 2 of which are the same. For example, 030, 229 or 166. Usual: A group in which all the digits are distinct. For example, 123 or 90. The quality of a group assignment is defined as 2 × (number of excellent groups) + (number of good groups) Divide the number into groups such that the quality is maximized. Design an efficient algorithm to return the solution that maximizes the quality. **
- [ ] implement strstrp(String a, String b) returns index where any permutation of b is a substring of a. e.g. strstrp("hello", "lle") returns 1, O(n)
    * http://coderchen.blogspot.com/2015/10/implement-function-strstrpstring-string.html
- [ ] 给你一个password 假定6位， 有个function 每call 一次就给你一个triplet 是password 里的随即三位，order不变。比如google, 可能返回， ggl, goe, oog, ool, ........问如何最有效破译这个密码，写code
- [ ] 给一个字符串数组,找出这样的字符串对(str1,str2),使得 1,两个字符串不包含 样的字符,2. 度乘积最大
    ＊ 把每个单词化成26-bit的数字分别对应(a - z),出现了这位就置为1,没出现就这位就是0,存在 `Map< String, Integer >` ,这样 较的时候只要 `(a & b) == 0` 就说明没有重复,然后 key的 度求积

### array
* replace only replace one instance if `/g` flag is not add in `RegExp`
* `//g` matches as much as possible

```javascript
function replacer(match, p1, p2, p3, offset, string) {
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
```

* when using regex, don’t miss `^` and `$`
* when use reduce, always provide an initial value, for empty array case
* check boundary index valid or not when accessing
* rotate binary search: find the rotate pivot and take rotation into account and do ordinary binary search
* maximum subarray: divide and conquer, `dp` with `dp[i + 1]` is the max subarray sum ending in `A[i]`
* [Find common elements in N sorted arrays with no extra space](http://stackoverflow.com/questions/15036821/find-common-elements-in-n-sorted-arrays-with-no-extra-space)
* iterator, proceed in `hasNext`

- [ ] task序列ABBABBC, 和相同task的最小interval. 例如interval=3, 则BB运行时间为5. 写一个函数输入task序列和interval, 输出运行时间
    * *follow up*: 写一个调度函数，输入task序列和interval，输出task最优执行序列
- [ ] Count the number of distinct pairs such that their sum is <= X
    * follow up: distinct triple pairs distinct k pairs
- [ ] rearrange array so the same characters are seperated by at least minDistance, heap
    1. http://articles.leetcode.com/2010/05/here-is-another-google-phone-interview.html
    2. http://www.geeksforgeeks.org/rearrange-a-string-so-that-all-same-characters-become-at-least-d-distance-away/
- [ ] design random queue
- [ ] int[] array, add + and * to maximize value
    * dp
- [ ] input: sorted array，num, output: number of occurance of num
- [ ] input: unsorted array, output: num which has odd number of occurance
- [ ] given a list of player, each of them can choose not playing the game, playing with a specific player(preference) or playing but does not care about the preference. find a team with five players that meet all constraint
- [ ] 就是一圈zombies，给你一 个starting point，然后每隔k步你shoot一个zombie，完后依次下去直到剩下一个 zombie，让你输出最后剩下的zombie
- [ ] input: pool size, pipe[], event array, output: time to fill the pool
    * consider situation that till end the pool if not filled
event array | Action | Time | PipiID
--- | --- | --- | ---
 | start | 10 | 1
 | end | 110 | 1

- [x] input: int[] array, n, output: subarrays which numbers were neighbours. e.g. [1,2,3] -> [1],[2],[3],[1,2],[2,3], [1,2,3]

```javascript
const continuous = (arr) => {
    const stack = [[[], 0]];
    const ans = [];

    while (stack.length > 0) {
        const [curr, start] = stack.shift();

        ans.push(curr);

        if (curr.length === 0) {
            for (let i = start; i < arr.length; i++) {
                stack.push([curr.concat([arr[i]]), i + 1]);
            }
        } else if (start < arr.length) {
            stack.push([curr.concat([arr[start]]), start + 1]);
        }
    }

    return ans;
}
```

- [x] input: int[] array, even number: num, odd number: frequency, output: interator. e.g.[3, 8, 0, 12, 2, 9] -> [8, 8, 8, 9, 9]

```javascript
function* odd(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        const freq = arr[i];
        const num = arr[i + 1];

        for (let i = 0; i < freq; i++) {
            yield num;
        }
    }
}
```

- [ ] input: height[], output: for each i, return nearest higher person's height after i. e.g. [3, 6, 7, 2, 3] -> [6, 7, null, 3, null]
    * O(n)
- [x] input: int[] array, target. output: seperate part sum === target e.g. [1,5,0,6], 21: 15 + 0 + 6 = 21; [6,3,1,0,5], 78: 63 + 10 + 5 = 78
- [x] input: array, target, output: number of subarrays has sum <= target
    ＊ Greedy Algorithm, using max heap, deal with characters w/ most counts first
- [x] unsorted array remove duplicates
- [x] [implement circular queue](https://www.careercup.com/question?id=14133666)
- [x] [longest common subsequence](http://www.geeksforgeeks.org/dynamic-programming-set-4-longest-common-subsequence/)
- [x] 给定一个 array,只包含 0,1, 找到一个分割位置,使左侧 0 出现的个数和右侧 1 出现的个数之和最大化
    * brute force: O(n^2), space: O(1)
    * O(n): DP, two temp array
    * O(1) space: count all 1, and all 0, traverse array, if encounter 0, add 1 to , else sminus 1
- [ ] 求 array 里 unordered pair 的数量(前一个数比后一个数大)比如{1, 3, 2}里面有一个(3, 2), {1, 2, 3}里面没有, {3, 2, 1}里面有三个(3, 2) (3, 1) (2, 1)
- [x] Given a sorted array of floats, find the index of the number closest to x
- [ ] 一群人排队,每个人有(height, Tvalue), height 表示身高,Tvalue 表示 前面有几个比当前人身高高的人 然后顺序打乱,重新排队,还得复原以前的队列
    * Sort by Tvalue, then height, in increasing order. Then iterate from the beginning, insert value if Tvalue > 0
- [ ] 找一个先单增后单减 array 的最大值 **
- [ ] 求最长等差数列.给定一个未排序数组,找出其中最长的等差数列.(PS O(n^2)的时间复杂度)
    * http://blog.csdn.net/yutianzuijin/article/details/11309061
- [x] 一个文件里是一条条短信<time_stamp,senderID, receiverID>记录, 按 time_stamp 排好序了
    1. 给一个 senderID 找出所有他发的短信
        * `R.groupBy`
    2. 如果A给B发了短信(A->B)那么B是A的1 degree friend,如果B->C,那么C是A的 2 degree,给一个 N 返回所有小于等于 degree 的 friend
        * BFS
    3. 给上面那个写 testcase
- [ ] find reverse pair in two arrays
- [ ] You need to organize a football tournament. There are n teams given. You need to prepare a schedule for the matches so that each team plays with every other team and on the same day no team plays twice. You want to finish the tournament as early as possible.
- [ ] Find shortest snippet,比如给一个 Document 是 A,X,X,B,A,X,B, Query 是 A,B,要求返回 shortestSnippet 第一问:如果 Query 有序(即 A 一定要在 B 前面),那么要返回 A,X,B Follow up:如果 Query 无序(即 B 在 A 前面也可以),那么要返回 B,A
- [ ] Given an array of non negative integers and a number N, find a length of shortest subarray sum of whose all elements is N
- [ ] 一个数组内要是存在至少三个升序的数(array[x] < array[y] < array[z], x < y < z)就返回 true,否则返回 false **
    * dp
- [ ] Find first k common elements in n sorted arrays
- [ ] Given an array of Ad (profit, start_time, end_time) and a timespan [0, T], find the max profit of Ads that fit the timespan
- [ ] find the most popular number in an array of interger. The 'popular number' is defined as the number occurs more than n/4, where n is the length of array **
- [ ] minimum number of elements in an array, the sum of which should be larger than 1% of total sum, O(n)
- [ ] one sorted array. find the number of appearence of a given number
- [x] vote log [{ candidate, time } ...], findWinner at given time
    * *follow up*: first k winners
    * hashtable + quickselect
    * priority queue
- [ ] input: file with n entries of [customer, page numer], output: most popular page numer
- [ ] 给一个array比如[4,2,1,3,5],根据这个array现在我们能有了一个新的array => 每个数是在原array里, 在它左边的所有比它大的number的个数,就是[0,1,2,1,0]. 题目是现在给了这个[0,1,2,1,0]要求原array, 原来array的range是1~n
- [x] given an array and a size k, find a size k subset with minimum max and min diff in the subset
    * sort, then sliding window with a queue O(nlogn)
- [x] unknown music play list with unique ids, given log, determine whether shuffle or random
    * assume it's shuffle, find the length, then check the next piece of log of that length, check whether new song appears or some song appears more than 1 time
- [ ] Given a infinite stream of number, return a random element with equal probability
    * [reservoir sampling](http://www.geeksforgeeks.org/reservoir-sampling/)
- [x] Given an array of integers, remove all the duplicates from it
    * sorted: 2 pointers
    * unsorted: hash set
- [x] Given a content of a book, get the most freq word in the content
    * hash table
    * trie
    * map reduce
- [ ] infinity number of object which has state true/false, init false, implement isToggled(i), toggle(start, end)
- [x] given a lot of words, find a smallest set in which sum of frequencies larger than t
    * priority queue
    * quick select and calculate left sum
- [ ] given a list of numbers and signature (increase, increase, decrease), print the number that fits the signature
    * record last decreasing point, insert next number before last descreasing point
- [ ] 两个string 的 list,找出只在某个list 出现的string
    * *follow up* 扩展到k个list
- [ ] given morse codes w/o spaces, output all possibilities **
- [ ] 写 个de duplicator,wrap 个stream,输出的stream全是不重复数字
- [ ] 求stream出现次数最多的数字。然后扩展到N个machine的情况
- [ ] cup volume range, fountain machine有不同的option对应不同的 出水量range, possible sequences
- [ ] 给distinct primes list,回传所有由这些primes组成的数字
    * *follow up* duplicate primes given

### matrix
- [ ] check numbers on antidiagonal are the same
    * *follow up* matrix is too big for RAM
- [ ] random maze generator, no closing space
- [ ] given matrix, each node is a computer, cost to transfer a file is the distance, all computers are recivers, what's the cost
- [ ] 给一个图 让求图中所有的正方形, design own data structure
- [ ] A circus is designing a tower routine consisting of people standing atop one another’s shoulders. For practical and aesthetic reasons, each person must be both shorter and lighter than the person below him or her. Given the heights and weights of each person in the circus, write a method to compute the largest possible number of people
- [ ] 2d array of char, 'X' cannot go, ' ' means grass, given x,y remove grass and return back
- [ ] 一个二维数组代表了一个岛. 周围都是海, 岛的左侧和上侧通向Pacific, 右侧和下侧通向Atlantic. 每个数字都代表了那个位置的海拔高度. 现在下雨了, 雨只有从海拔高的地儿能流向海拔低或者一样的地儿. 返回岛上的分水岭的点
- [ ] 第二题输入一个二维整数数组，表示一个格点地图，数组的每一个元素表示相应格点的海拔。如果在某一个格点倒水，则水会等概率的流向临近的海拔更低的格点。求在某一个格点倒水，最后水流到地图的最左边或者最下边的比例。
- [ ] 2D matrix with 'x' and 'o', find island number
    * *follow up* 如果是大地圖怎麼處理, 要你切 map, 考慮每個 submap 之間的關係-google
    * *follow up* parallel process
    * *follow up* 如果他現在要新增島到地圖上, 請回傳最新的 count, ex: int add(int x, int y), the function should return the new count
    * *follow up* 這個 function 能不能做到  O(N*N) 還要好? (N為 map 邊 )
    * 當初在 count islands 的時候把每個 island 都建成一顆 tree, 所以再判斷新加上去的 island 周圍的時候, 只要判斷周圍的 island 是不是有 ancestor O(lg n) 如果是分開的兩個島, 現在被新的島串起來了的話, 就將兩顆 tree 接起來就好
    * union find
- [ ] implement a sliding puzzle
    * solve a sliding puzzle
- [ ] sparse vector dot multiplication
    * too big for RAM: only store non-zero element position
    * if position sorted: iterate shorter one, binary search find each corresponding index O(M*logN)
    * if position sorted: two pointers O(M + N)
- [x] 2d matrix trap rain water
- [x] tic-tac-toe all possible state
- [x] level 0: 0, level 1: 1,2; 3,4 level 2: 5,6,7,8; 9,10,11,12; 13,14,15,16; 17,18,19,20, int get(int level, int i, int j)
    * geometric sequences sum = a*(r^n - 1)/(r - 1)
- [x] Design a algorithm to initialize the board of Candy Crush Saga. With M x N board, Q types of candies
    * dp, `while` loop to exclude top and left same 2 candy
- [x] 问一个 word grid 给一个词,返回有多少个 path 可以组成所给定的词
- [x] maximum sum matrix
    * naive O(n^4)
    * loop different left and right boundary, reduce row sum to 1D array, then use Kadane’s algorithm, O( n^3 )
- [x] input n, output a spiral array from n*n to 1
- [x] input: n*m matrix, x, y, width, height, output: draw rect at (x, y) with width and height

```javascript
const draw = (n, m, x, y, width, height) => {
    const matrix = Array.from({ length: n }, () => Array.from({ length: m}, () => 0));

    for (let i = 0; i < width; i++) {
        matrix[y][x + i] = 1;
        matrix[y + height - 1][x + i] = 1;
    }

    for (let j = 1; j < height - 1; j++) {
        matrix[y + j][x] = 1;
        matrix[y + j][x + width - 1] = 1;
    }

    return matrix;
}
```

### dictionary
- [ ] input: dictionary, letter set, output: longest word composed from letter set which exists in the dict
- [ ] input: dictionary containing names of format "w1 w2 w3 ... wk", query "p1 p2 ... pm", output: query === subsequence of a name

### graph/tree
* leaf node: `!node.left && !node.right`
* when cloning graph, use a map
* spanning tree T of an undirected graph G is a subgraph that is a tree which includes all of the vertices of G
* Kruskal's algorithm to find Minimal Spanning Tree
    1. Sort all the edges in non-decreasing order of their weight.
    2. Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far. If cycle is not formed, include this edge. Else, discard it.
    3. Repeat step#2 until there are (V-1) edges in the spanning tree.
* [Morris inorder tree traversal](http://stackoverflow.com/questions/5502916/explain-morris-inorder-tree-traversal-without-using-stacks-or-recursion)
* [check a tree is a subtree of another tree](http://www.geeksforgeeks.org/check-binary-tree-subtree-another-binary-tree-set-2/)
    1. Find inorder and preorder traversals of T, store them in two auxiliary arrays inT[] and preT[].
    2. Find inorder and preorder traversals of S, store them in two auxiliary arrays inS[] and preS[].
    3. If inS[] is a subarray of inT[] and preS[] is a subarray preT[], then S is a subtree of T. Else not.

```
sort the edges of G in increasing order by length
keep a subgraph S of G, initially empty
for each edge e in sorted order
  if the endpoints of e are disconnected in S
    add e to S
return S
```

- [ ] convert expression to tree. e.g. 1 + (2 * 3)
- [ ] given BT, find the lowest common accestors of deepest leaves. e.g. 1,2,3,null,null,5,6 -> 3; 1,2,3,4,null,5,6 -> 1
- [ ] 社交网络中,如何实现好友推荐。抽象成图,然后找出共同好友最多的那个人
    * topological sort
- [ ] Flight passes, find path from a city to another city; what if loop, n to 1 city
    * DFS
- [ ] List of boarding passes, return Travel Itinerary
    * dfs
- [ ] return duplicated subtree
    1. bfs store each subtree in list, check whether 2 trees are the same
    * if the binar tree is given a stream
    * traversal once
- [ ] 给你一个node,包含getId 和 setId,children由 iterator<node>提供node的id 如果为null(Integer 类型) 或者为负都是invalid。并且互相之间的id都是没有重复。要求遍历树,将所有的invalid节点找出然后赋给他们不重复的正数
- [ ] 假设某个company在不同国家都有office,每个国家的office,如果是当地的假期,就可以放假了。假设可以查询任意航班的信息,每个星期只能呆在一个地 ,只有周末的时候才能去别的国家。找放假天数最多的schedule
    * `dp[month][country]`
- [ ] input: n cities, flying time from one to another, vacation array, limit of flying time, output: schedule
- [x] serialize an N-ary Tree

```javascript
const serialize = (root) => {
    if (!root) return 'null';
    let base = root.val + ',' + root.children.length;
    if (root.children.length > 0) base += ',' + root.children.map(c => serialize(c)).join(',');

    return base;
}

const deserialize = (str) => {
    if (str === 'null') return null;

    const data = str.split(',').map(e => Number(e));
    const stack = [];

    while (data.length > 0) {
        const length = data.pop();
        const ele = {
            val: data.pop(),
            children: [],
        };

        for (let i = 0; i < length; i++) {
            ele.children.push(stack.pop());
        }

        stack.push(ele);
    }

    return stack[0];
}
```

- [x] fill tank with min steps. e.g. tank: 80L, containers: 1,3,5,6,25 L, soln: 4: 5, 25, 25, 25
    * BFS
- [x] [the good node](http://yuanhsh.iteye.com/blog/2200515)
    * union find
- [x] merge quad tree
- [x] binary tree & operation
- [x] Deep Copy Tree
- [x] Mirror Binary Tree
- [x] all sum of binary tree from root to leaf, no recursion
    * DFS
- [x] use bfs to print all path from root to leaf
- [x] design setManager, setPeer, queryManager
- [x] given players, 2 players a time, print all possibilities of rounds, data structure
    * postorder traversal
- [x] determine binary tree is complete tree
    * level order traversal, every level except the last one cannot has null val
    * DFS, set flag when first meet (deepest - 1) level node
- [x] given n cities and (n - 1) roads, find average path length, e.g. SF-SD-LA -> (SF-SD + SF-LA + SD-LA)/3
- [x] bst most frequent integer 
    * inorder traversal
- [x] given height, how many full binary tree are there? generate full binary trees of height n
    * h = 0: 1; h = 1: 1; h = 2: 3; h = 3: 21; h = 4: 651; h = 5: 457653
    * h(n) = h(n - 1)*h(n - 1) + 2*h(n - 1)*(h(0) + h(1) + ... + h(n - 2))
    * for level n, add root node to previous (n - 1) trees
        * case 1: both left and right subtrees has deepest n - 1: h(n - 1)*h(n - 1)
        * case 2: only left has deepest n - 1, right loops from deepest 0 to deepest n - 2: h(n - 1)*(h(0) + h(1) + ... + h(n - 2))
        * case 3: mirror of case 2

### number
* consider neg, 0, pos
* integer division, think about negative numbers, truncation
* [Segregate Even and Odd numbers](http://www.geeksforgeeks.org/segregate-even-and-odd-numbers/)

- [ ] 生成palindrome number, 然后寻找最相近的palindrome number,最简单的了,不过要注意奇数个digits和偶数个digits
- [ ] first n prime number
- [x] input: polite number, output: politeness (number of ways it can be expressed as the sum of consecutive integers)
    * is the number of odd divisors of the number
    * decomposing the number into its prime factors, taking the powers of all prime factors greater than 2, adding 1 to all of them, multiplying the numbers thus obtained with each other and subtracting 1
- [x] check whether two are gray code

```java
byte x = (byte)(a^b);return x!=0 && ((byte)(x&(x-1)==0));
```

- [x] public float sqrt(float num, int precision)
- [x] Calculate log(x)
- [x] good number is defined as addition of 2 cubic of a number, given n, list all good numbers <= n
- [x] given a number e.g. 1112223334445556677888..., find the missing 2 numbers
- [x] find all factors of n
    * O(lg n)
- [x] sqrt(x, precision)

### linked list
* when deal with pointers in linked list, double check position when calling .next
* linked list proper termination: .next = null

- [x] insert a number in a sorted singly linked lists
- [x] given a **doubly linked list**, and an array containing list nodes, find component number in the array, e.g. A-B-C-D-E. [A E D] -> 2: A, E-D
    * put [A E D] into set, traversal set, for a given node, if neighbours in set, delete

### bit manipulation
* get set bit: diff &= -diff;

### else
- [ ] what's the reducer method in Map-Reduce
- [ ] given two date w/ day, month, year, calculate difference
- [ ] implement `diff`
- [ ] 给画布上的n个线段,问怎么画最快(移动画笔会浪费时间)
    * sort lines first (based on two points and length)
- [ ] stable marriage problem
- [ ] [maximum flow problem](http://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/)
- [x] check if a point is within a polygon
    * ray casting to right
- [ ] n 台机器做 web crawler,如何保证每个网页只被 download 一次,就是 n 台机器里面只能有一个机器访问某网页一次。要求系统效率高,communication 负荷小。
- [ ] http://stackoverflow.com/questions/17928158/find-top-10-most-frequent-visited-url-data-is-stored-accross-network
- [ ] Leetcode read4
    1. read 4096
- [x] 平面上很多点,是否存在一条垂直于x轴的线,使得这些点对于这条线轴对称
    ＊ find median of all x values, the store all points into hashmap
- [ ] 10个机器,每个存有100G的ip地址,怎样找到出现次数最多的10个ip
    1. Redistribution using hash
    2. Create a hash table with ip as key, frequency as its value
    3. Get top 10 ip in every 1 node, using a min heap of size 10 (O(nlogk))
    4. Using merge sort to get final top 10
- [ ] 背包问题的变形,物品可切分,限制条件是如果 放则必须放当前总体积的 半以上,求最后的最 价值。 followup: dp的空间优化
- [ ] design google map backend storage
- [ ] 给了一个UTF-8的pattern:

```
1byte - 0XXX, XXXX
2byte - 110X, XXXX, 10XX,XXXX
3byte - 1110, XXXX, 10XX,XXXX, 10XX,XXXX
4byte - 1111, 0XXX, 10XX,XXXX, 10XX,XXXX, 10XX,XXXX
...
7byte - 1111, 1110, 10XX,XXXX, 10XX,XXXX, 10XX,XXXX, ..., 10XX,XXXX
8byte - 1111, 1111, 10XX,XXXX, 10XX,XXXX, 10XX,XXXX, ......, 10XX,XXXX
```

write function [`isvalidUTF(byte[])`](http://codereview.stackexchange.com/questions/59428/validating-utf-8-byte-array)

```java
public static boolean validate(byte[] bytes) {
  int expectedLen;
  if (bytes.length == 0) return false;
  else if ((bytes[0] & 0b10000000) == 0b00000000) expectedLen = 1;
  else if ((bytes[0] & 0b11100000) == 0b11000000) expectedLen = 2;
  else if ((bytes[0] & 0b11110000) == 0b11100000) expectedLen = 3;
  else if ((bytes[0] & 0b11111000) == 0b11110000) expectedLen = 4;
  else if ((bytes[0] & 0b11111100) == 0b11111000) expectedLen = 5;
  else if ((bytes[0] & 0b11111110) == 0b11111100) expectedLen = 6;
  else return false;
  
  if (expectedLen != bytes.length) return false;
  
  for (int i = 1; i < bytes.length; i++) {
    if ((bytes[i] & 0b11000000) != 0b10000000) {
      return false;
    }
  }
  
  return true;
}
```

- [x] Write a program to count the total number of pages reachable from a website
- [x] how to design google recommendedation search results
    * trie
    * distributed system, each cluster handling different prefixes
- [x] backup a big file from server a to server b, slow network speed, little change
    * rsync
- [x] XML Parser

```javascript
const xmlparser = (xml) => {
    const matches = xml.match(/\<([a-zA-Z0-9\-]+)\>([\w\W]*)\<\/\1\>\s*/g);
    if (!matches) return xml;
    return matches.map(e => {
        const [elementName, inner] = e.trim().match(/^\<([a-zA-Z0-9\-]+)\>([\w\W]*)\<\/\1\>$/).slice(1, 3);
        
        return {
            elementName,
            children: xmlparser(inner.trim()),
        };
    });
}
```

### OOD
- [ ] snake
- [x] contact system, boolean isTaken(), void takeNumber(), number giveMeANumber()
    * trie with numbers available at current level
- [ ] mineweeper
- [ ] parking lot (CC)
- [ ] 要给一个家具工厂的所有家具做质量测试(压力测试，是否易燃等等)
- [ ] 邮件系统
- [ ] truck tracking system，要求实现查询truck的地点，每天的行程之类
- [ ] 图书推荐系统，类似facebook, twitter那样的好友系统，可以看评价，可以写评价，有好友列表一类的, 你有朋友A，朋友A有他的朋友B， 你要看到所有A,B,B的朋友的推荐书单, top n most popular book
- [ ] opentable, 用户输入 restaurant, timeslot, 人数, 返回是否可以预订 一个restaurant 可能有多个桌子, 每个桌子可能可以坐多个人 如果预订的时候,人数大于一个桌子, 可以把相邻的桌子 combine, timeslot 30分钟算一个, 一天就可以算24*2个, 编号从0到47, 用户的输入只能有一个 timeslot
- [ ] traffic management system
- [ ] UBER”， 然后是代码实现UBER里面 makeOrder这个method，最后是代码题，给你一个金额，几种面额，问你几种组合方式
- [ ] 怎么设计系统，可以detect fake comments
- [ ] zoo
- [ ] tic tac toe 游戏 设计整个游戏 不只是怎么判断赢
- [ ] file system, focus on permission
- [ ] 交 通路口，目的是统计车流，反馈给我们的用户
- [ ] board game
- [ ] vending machine
- [ ] 设计paint，可以画各种图形，图形还要旋转，组合什么的
- [ ] 上传下载服务。要求任务能并行，能查询任务状态，每个用户能够同 时进行的任务有数量限制
- [ ] 设计parkingspace，里面有很多种space(比如smallspace middlespace largespace), 对应 不同型号的车。尽量让space都利用好
- [ ] 设计整个亚马逊的物品、 仓库、卡车互动系统。仓库遍布美国，卡车有油量，仓库之间有些有路径有些没 有
- [ ] 设计一个餐厅。然后他说如果他和他朋友第二天6pm要来吃饭，但是餐厅已经订满了，怎 么schedule。还问了怎么拼桌子来满足客户的要求
- [ ] 玩21点。可以有AI和有人玩
- [ ] hotel management system (similar to online reader system in cc150, libary contains rooms, active room, active user)
- [ ] online booking system (cc150)
- [ ] animal kingdom, animal zoo
- [ ] file system (cc150)
- [ ] deck (cc150, or deck.java)
- [ ] wallet
- [ ] design hashtable (cc150)
- [ ] design library, track records of books, CDs (cc150)
- [ ] short url, 设计短网址服务器构架。讨论流量，服务器架构和数据库架构。纯设计
- [ ] Airbnb language translate system (i18n)
- [ ] autocomplete in a search engine
- [ ] 1b active users, use posts，each post has: name, time, system need search functionality，query: keyword+ OR, return related post
    * how to store posts
    * data structure for searching
    * how many machine needed for each functionality
- [ ] twitter

## notes

### deck shuffle
**Fisher–Yates shuffle**: Go through the elements in order, swapping each element with a random element in the array that does not appear earlier than the element. O(n)

### mutex
a mutex is an integer that starts at 1. Whenever a thread needs to alter the array, it "locks" the mutex.  This causes the thread to wait until the number is positive and then decreases it by one. When the thread is done modifying the array, it "unlocks" the mutex, causing the number to increase by 1.

### semaphore
a semaphore's integer may start at a number greater than 1. The number at which a semaphore starts is the number of threads that may access the resource at once. Semaphores support "wait" and "signal" operations, which are analogous to the "lock" and "unlock" operations of mutexes.
* deadlock prevention: assign an order to our locks and require that locks always be acquired in order
​
### rendering performance
* 60FPS (16.66 ms/frame), and browser has housekeeping work, so all of your work needs to be completed inside 10ms. When you fail to meet this budget the frame rate drops, and the content judders on screen, referred to as **jank**

* pixel pipeline: JavaScript -> style calculations -> layout -> paint -> composing
* use `requestAnimationFrame` for visual changes instead of `setInterval`
* move pure computational work to Web Workers
* [rendering performance](https://developers.google.com/web/fundamentals/performance/rendering/?hl=en)
* [optimize javascript execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution?hl=en)

### A/B testing
you have two versions of an element (A and B) and a metric that defines success. To determine which version is better, you subject both versions to experimentation simultaneously. In the end, you measure which version was more successful and select that version for real-world use

​usually tested elements:

* The call to action’s (i.e. the button’s) wording, size, color and placement
​* Headline or product description,
* Form’s length and types of fields,
* Layout and style of website,
* Product pricing and promotional offers,
* Images on landing and product pages,
* Amount of text on the page (short vs. long)

### what resources a processes needs
* an image of the executable machine code associated with a program
* memory, which includes the executable code, process-specific data (input and output), a call stack (to keep track of active subroutines and/or other events), and a heap to hold intermediate computation data generated during run time
* os descriptors of resources that are allocated to the process, e.g. file descriptors
* security attributes, such as the process owner and the process' set of permissions
* processor state (context), such as the content of registers and physical memory addressing. The state is typically stored in computer registers when the process is executing, and in memory otherwise

### how context switching works
say Thread A calls sched_yield() and is replaced by Thread B:

1. Thread A enters the kernel, changing from user mode to kernel mode;
2. Thread A in the kernel context-switches to Thread B in the kernel;
3. Thread B exits the kernel, changing from kernel mode back to user mode.

When a thread context-switches, it calls into the scheduler (the scheduler does not run as a separate thread - it always runs in the context of the current thread). The scheduler code selects a process to run next, and calls the switch_to() function

* [context switch internals](http://stackoverflow.com/questions/12630214/context-switch-internals)

#### from the Running state to the Blocked state for the requesting process, and from the Ready state to the Running state for the selected next process
1. The running process sends a system call via an interrupt.
2. The CPU jumps into the interrupt handler, which is part of the operating system.
3. The OS saves all the registers of the running process into that process's entry of the process table.
4. If another process is already waiting for the device to respond, the OS places the process into a waiting queue for that device. Otherwise, the process's request is sent to the device.
5. The OS selects the next process to execute from the queue of those processes in the ready state. This is called the ready queue.
6. The OS restores the registers to the values saved in the next process's entry of the process table.
7. The OS returns to the program counter value stored in the next process's entry of the process table.

#### from the Blocked state to the Ready state
1. The OS saves the device's response in memory for the requesting process to use when it gets the CPU again.
2. The OS moves the blocked process into the ready queue.
3. If there are processes waiting for the device, the OS sends the next request to the device.
4. The OS returns back to the process that was running at the time the interrupt occurred.

### scheduling
* the ready queue contains many processes, selection to choose one to start running is process scheduling.
* **round robin**: each process is treated equally, when one process runs its time slice out, it is simply placed at the end of the ready queue, and the next process in line begins
* choose by priority, problem: easily starve out the low-priority jobs
* assign longer time slices to higher-priority jobs, but otherwise follow a round-robin strategy
* choose jobs probabilistically, where higher-priority jobs have a higher priority of being selected

### HTTP caching
1. Use consistent URLs: if you serve the same content on different URLs, then that content will be fetched and stored multiple times
2. Ensure the server provides a validation token (ETag): validation tokens eliminate the need to transfer the same bytes when a resource has not changed on the server.
3. Identify which resources can be cached by intermediaries: those with responses that are identical for all users are great candidates to be cached by a CDN and other intermediaries.
4. Determine the optimal cache lifetime for each resource: different resources may have different freshness requirements. Audit and determine the appropriate max-age for each one.
5. Determine the best cache hierarchy for your site: the combination of resource URLs with content fingerprints, and short or no-cache lifetimes for HTML documents allows you to control how quickly updates are picked up by the client.
6. Minimize churn: some resources are updated more frequently than others. If there is a particular part of resource (e.g. JavaScript function, or set of CSS styles) that are often updated, consider delivering that code as a separate file. Doing so allows the remainder of the content (e.g. library code that does not change very often), to be fetched from cache and minimizes the amount of downloaded content whenever an update is fetched.

[source](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)

### DFS, BFS, IDDFS

 | time | space | when to use
​DFS | O(b^d) | O(d) | graph/tree is not very big
​BFS | O(b^d) | O(b^d) | space not issue, want the closest answer to the root
​IDDFS | O(b^d) | O(bd) | need a BFS but not enough memory, slower performance is accepted

## checklist
​​
- [x] HTTP
- [x] WebSockets
- [x] cookies
- [x] asset loading/caching
- [x] A/B testing
- [x] REST API
- [x] understand the intricacies of how JS and CSS impact rendering, client-side performance and optimization experience
- [-] SEO
- [x] mutex
- [x] semaphores
- [x] deadlock
- [x] [livelock](https://docs.oracle.com/javase/tutorial/essential/concurrency/starvelive.html)
- [x] shuffling
- [x] scheduling
- [x] how context switch is initiated by the operating system and underlying hardware
- [-] fundamentals of "modern" concurrency constructs (multi-core)
