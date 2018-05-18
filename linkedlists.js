'use strict';
class _node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class _doublyNode {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _doublyNode(item, null, this.head);
    if (this.tail === null) {
      this.tail = this.head;
    }
  }
	
  insertLast(item) {
    this.tail = new _doublyNode(item, this.tail, null);
    if (this.head === null) {
      this.head === this.tail;
    }
    if (this.tail.prev) {
      this.tail.prev.next = this.tail;
    }
  }
	
  insertBefore(item, key) {
    let currNode = this.head;
    while(currNode.value !== key) {
			currNode = currNode.next;
			console.log('node',currNode,' key',key);
		}
		let newNode = new _doublyNode(item, currNode.prev, currNode);
    let holder = currNode.prev;
    currNode.prev = new _doublyNode(item, holder, currNode);
    holder.next = currNode.prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAfter(item, key) {
    if (this.head.value === key) {
      let node = new _node(item, this.head.next);
      this.head.next = node;
      return true;
    }

    let currNode = this.head;

    while (currNode.value !== key && currNode.value !== null) {
      currNode = currNode.next;
    }
    if (currNode.value === key) {
      currNode.next = new _node(item, currNode.next);
      return true;
    }
    return false;
  }

  insertAt(index, item) {
    if (index === 0) {
      this.insertFirst(item);
    }
    let currNode = this.head;
    let count = 0;
    while(count < index) {
      count++;
      if (count === index) {
        currNode.next = new _node(item, currNode.next);
      }
      else {
        currNode = currNode.next;
      }
    }
  }

  insertBefore(item, key) {
    if (this.head.value === key) {
      this.insertFirst(item);
      return true;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode.next !== null && currNode.value !== key) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode.value === key) {
      previousNode.next = new _node(item, currNode);
      return true;
    }
    return false;
  }

  insertFirst(item) {
    this.head = new _node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next =  new _node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;

    if(!this.head) {
      return null;
    }

    while(currNode.value !== item) {
      if(currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;

    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

}

function size(SLL) {
  let currNode = SLL.head;
  let count=0;
  while(currNode.next !== null) {
    count++;
    currNode = currNode.next;
  }
  return count;
}

function display(SLL) {
  let currNode = SLL.head;
  if (currNode.next === null) {
    console.log(currNode.value);
  }
  while(currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function isEmpty(SLL) {
  return SLL.head ? false : true;
}

function findPrevious(item, SLL) {
  let currNode = SLL.head;
  if (item === currNode.value) {
    return 'No value before head';
  }
  while (currNode.next.value !== item && currNode.next !== null) {
    currNode = currNode.next;
  }
  if (currNode.next.value === item) {
    return currNode;
  }
  return 'Could not find item in list';
}

function findLast(SLL) {
  let currNode = SLL.head;
  if (!currNode) return 'Empty List';
  if (currNode.next === null) {
    return currNode;
  }
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

// function reverse(node) {
  
//   if (node === null) {
//     return null;
//   }
//   reverse(node.next);
// }

function reverse(SLL) {
  let holder = null;
  let currNode = SLL.head;
  while(currNode !== null) {
    let tempNode = currNode.next;
    currNode.next = holder;
    holder = currNode;
    currNode = tempNode;
  }
  return SLL.head = holder;
}

function thirdFromLast(SLL) {
  let currNode = SLL.head;
  if (currNode.next.next.next.next === null) {
    return 'List not large enough';
  }
  while (currNode.next.next.next.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

// change to a slow / fast pointer solution
function middleElement(SLL) {
  let middle = size(SLL);
  let currNode = SLL.head;
  let inc = 0;
  if (middle % 2) {
    middle = (middle / 2);
  }
  else {
    middle = ((middle + 1) / 2);
  }
  while(inc <= middle-1) {
    currNode = currNode.next;
    inc++;
  }
  return currNode;
}

function isCycle(SLL) {
  let slowPtr = SLL.head;
  let fastPtr = SLL.head;
  while (fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) {
      return true;
    }
  }
  return false;
}

function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertLast('Test');
	
  // console.log(middleElement(SLL));
  //   SLL.remove('squirrel');
  //   SLL.insertBefore('Athena', 'Boomer');
  //   SLL.insertAfter('hotdog', 'Helo');
  //   SLL.insertAt(2, 'Kat');
  //   SLL.remove('Tauhida');
  //   SLL.find('hotdog');
  //   console.log('SIZE', size(SLL));
  //   display(SLL);
  //   console.log('IS EMPTY',isEmpty(SLL));
  //   console.log('PREV',findPrevious('Boomer', SLL));
  //   console.log('LAST', findLast(SLL));
  //   console.log('reverse?', reverse(SLL));
  //   console.log('THIRDFROMLAST - ', thirdFromLast(SLL));

  // let cycle = new LinkedList();
  // cycle.head = new _node('1', null);
  // cycle.head.next = new _node('2', new _node('3', new _node('4', cycle.head)));
  // console.log(isCycle(cycle));
	
  let DLL = new DoublyLinkedList();
	DLL.insertFirst('1');
	DLL.insertFirst('3');
	DLL.insertFirst('1');
	DLL.insertBefore('2', '3');
	console.log(DLL);
}

// mystery program removes duplicates and is O(n^2);

main();