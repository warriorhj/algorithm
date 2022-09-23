/*
 * @Descripttion: 合并两个有序链表
 * @version: 
 * @Author: Hao
 * @Date: 2022-07-06 22:32:33
 * @LastEditors: Hao
 * @LastEditTime: 2022-07-06 22:49:20
 * @FilePath: \04front-end\09algorithm\双指针技巧\21-合并有序链表.js
 */

// 定义单链表
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
    let newlist = ListNode();
    let pre = newlist
    
    while(list1 != null && list2 != null){
        if(list1.val <= list2.val){
            pre.next = list1;
            list1 = list1.next
        }else{
            pre.next = list2
            list2 = list2.next
        }
        pre = pre.next
    }
    pre.next = list1 === null? list2 : list1
    return newlist.next

};
let newlist =new ListNode(0);
console.log(newlist);