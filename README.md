# interview-preparation

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

## code challenge
- [ ] Binary Tree and http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=140358&page=1#pid1971401
deep copy tree
serialize an N-ary Tree
给定一个 array,只包含 0,1, 找到一个分割位置,使左侧 0 出现的个数和右侧 1 出现的个数之和最大化
brute force, time: O(n^2), space: O(1)
follow up, can we solve in O(n): DP, two temp array-google 1point3acres
follow up, can we use O(1) space: count all 1, and all 0, traverse array, if encounter 0, add 1, else , minus 1
Give you an integer matrix, find the longest increasing continuous subsequence in this matrix
实现任意大整数的加减乘除
给 string, 只包含{0,1,?}, ?可以代表 0 或者 1, 输出所有的组合. 例如"10?", 输出"100", "101"
求 array 里 unordered pair 的数量(前一个数比后一个数大)比如{1, 3, 2}里面有一个(3, 2), {1, 2, 3}里面没有, {3, 2, 1}里面有三个(3, 2) (3, 1) (2, 1)
给一个 int[] array, e.g {1,5,0,6}和一个 int target,e.g. target = 21; 问是否存在某种分法把 array 分成几部分,每部分看成一个 int,这几部分加起来等于 target。 e.g. {1,5}{0}{6},三部分加起来是 21。{1,5}{0,6}也是 21
社交网络中,如何实现好友推荐。抽象成图,然后找出共同好友最多的那个人
Given a sorted array of floats, find the index of the number closest to x
一段代码,用 string 表示的,写一个函数,返回所有的注释里面的内容,返回//和/* */里 的内容
写一个 meeting schedule, 求最少的房间
假设有一个 dictionary 和一个字符的 set,找到从该字符集中能组成的存在于 dictionary 中的 最长的 word
问一个 word grid.给一个词,返回有多少个 path 可以组成所给定的词
sparse matrix
right rotate k 次。要求 O(N),in-place
一群人排队,每个人有(height, Tvalue), height 表示身高,Tvalue 表示 前面有几个比当前人身 高高的人。。然后顺序打乱,重新排队,还得复原以前的队列
给以下矩阵序列 level 0: 0, level 1: 1,2; 3,4 level 2: 5,6,7,8; 9,10,11,12; 13,14,15,16; 17,18,19,20, 写个转换方程 int get(int level, int i, int j)
找一个先单增后单减 array 的最大值
求最长等差数列.给定一个未排序数组,找出其中最长的等差数列.(PS O(n^2)的时间复杂度)
給你一個 integer array, 假設每個 element 值代表建物高度, 如何算出這堆建物可存多少水? 比左右相鄰 element 低的 element 就可以存水
一个文件里是一条条短信<time_stamp,senderID, receiverID>记录,按 time_stamp 排好序了。 a) 给一个 senderID 找出所有他发的短信 b) 如果A给B发了短信(A->B)那么B是A的1 degree friend,如果B->C,那么C是A的 2 degree,给一个 N 返回所有小于等于 degree 的 friend c) 给上面那个写 testcase
remove duplicate lines of a file(what if the file is very large which could not be held in the main memory)
check if a point is within a polygon
插入整数,然后计算最近五个数的平均数。然后问了一下如果是 web application 这个需要注 意什么?想想办法提高 performance,还有提高存储效率,还扯了一些其他网络的知识。
n 台机器做 web crawler,如何保证每个网页只被 download 一次,就是 n 台机器里面只 能有一个机器访问某网页一次。要求系统效率高,communication 负荷小。
http://stackoverflow.com/questions/17928158/find-top-10-most-frequent-visited-url-data-is- stored-accross-network
Given an input array of integers of size n, and a query array of integers of size k, find the smallest window of input array that contains all the elements of query array and also in the same order.
find an only number which occurs once while others occurs three times
find reverse pair in two arrays
fill tank with min steps, Tank Size: 80 litre, Containers: 1,3,5,6,25 litre, Solution: 4: 5, 25, 25, 25
You need to organize a football tournament. There are n teams given.
You need to prepare a schedule for the matches so that each team plays with every other team and on the same day no team plays twice. You want to finish the tournament as early as possible.
A circus is designing a tower routine consisting of people standing atop one another’s shoulders. For practical and aesthetic reasons, each person must be both shorter and lighter than the person below him or her. Given the heights and weights of each person in the circus, write a method to compute the largest possible number of people
longest repeating substring, e.g. "abab" for "ababab"
generate randum number within a circle
reverse 32 bit number 1101001 ==> 1001011
Print a spiral array
e.g. given 5:
25 24 23 22 21
10 09 08 07 20
11 02 01 06 19
12 03 04 05 18
13 14 15 16 17
You are given a String number containing the digits of a phone number (the number of digits, n, can be any positive integer) . To help you memorize the number, you want to divide it into groups of contiguous digits. Each group must contain exactly 2 or 3 digits. There are three kinds of groups: • Excellent: A group that contains only the same digits. For example, 000 or 77. Good: A group of 3 digits, 2 of which are the same. For example, 030, 229 or 166. Usual: A group in which all the digits are distinct. For example, 123 or 90. The quality of a group assignment is defined as 2 × (number of excellent groups) + (number of good groups) Divide the number into groups such that the quality is maximized. Design an efficient algorithm to return the solution that maximizes the quality.
implement function strstrp(String a, String b) returns index where any permutation of b is a substring of a. e.g. strstrp("hello", "lle") returns 1, O(n)
给你一个字符串,统计字符出现次数。输入"AABBBCCC",输出"2A3B3C"
use bfs to print all path from root to leaf
Find shortest snippet,比如给一个 Document 是 A,X,X,B,A,X,B,Query 是 A,B,要求返回 shortestSnippet 第一问:如果 Query 有序(即 A 一定要在 B 前面),那么要返回 A,X,B Follow up:如果 Query 无序(即 B 在 A 前面也可以),那么要返回 B,A
求binary tree 所有从根开始到叶子的所有路径和, no recursion
Given an array of non negative integers and a number N, finda length of shortest subarray sum of whose all elements is N
把 sorted list 转成 complete binary search tree
一个数组内要是存在至少三个升序的数(array[x] < array[y] < array[z], x < y < z)就返 回 true,否则返回 false
Find first k common elements in n sorted arrays
