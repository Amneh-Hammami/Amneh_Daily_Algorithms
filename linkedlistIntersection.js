/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
  }

//class to make linkedlist
class LinkedList{
    constructor(){
        this.head = null;
    }
    addToTail(item){
        //is there a head?
        //if no ==> add the node 
        if(this.head === null){
            this.head = Node(item);
        }else{
        //if yes ==> loop through the linkedList until reach the tail then add the node 
            var currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = Node(item);
            }
    }
} 




//function for finding the point of intersection in 2 linkedlist
function linkedListIntersection(){
    //note(list1 and list2 have to be parameters but i am putting them as varabiles so i can test my code)
    let list1 = new LinkedList();
    list1.addToTail(1)
    list1.addToTail(2)
    list1.addToTail(3)
    list1.addToTail(4)

    let list2 = new LinkedList();
    list2.addToTail(5)
    list2.addToTail(5)
    list2.addToTail(7)
    list2.addToTail(8)
    //loop in list1 take the items and put it in array
    var arrOfList1 = [];
    var start = list1.head
    while(start.next){
        arrOfList1.push(start.value);
        start = start.next;
        //the if condition here to push the last value in the linkedlist1 
        if (start.next === null){
            arrOfList1.push(start.value);
        }
    }
    // return arrOfList1;
    // loop in list2 and in the array and compaire between values
    for(var i = 0; i<arrOfList1.length; i++){
        var start2 = list2.head;
        while(start2.next){
           if(start2.value === arrOfList1[i]){
            return 'The node of intersection is ' + arrOfList1[i];
           }
           start2 = start2.next;
           //comparing with the last value in linkedlist2
           if (start2.next === null){
             if(start2.value === arrOfList1[i]){
                return 'The node of intersection is ' + arrOfList1[i];
             }
           }
        }
    }
    return null;
}
