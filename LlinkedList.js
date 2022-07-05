/*
 * Implement a linked list.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';

class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    addToTail(item){
        //is there a head?
        //if no ==> add the node 
        if(this.head === null){
            this.head = new Node(item);
        }else{
        //if yes ==> loop through the linkedList until reach the tail then add the node 
            var currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(item);
            }
            this.length ++;
    }
    removeHead(){
        // if there is no head return null 
        if(this.head === null){
            return null;
            
        }else{
            //if there is head 
            var deletedHead = this.head;
            this.head = this.head.next;
            this.length --;
            return deletedHead.item;
            }
    }
    contain(value){
        //loop and check if item is exist 
            var current = this.head;
            while(current.next){
                if(current.item === value){
                    return true;
                }
                current = current.next;
            }
            return false;
    }
}


let list = new LinkedList();
list.addToTail(1)
list.addToTail(2)
list.addToTail(3)
list.addToTail(4)
