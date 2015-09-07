function LinkedList() {
    this._head = null;
    this._size =  0;
}

LinkedList.prototype = {
    _createNode: function(val) {
        return {
            data: val,
            next: null
        }
    },
    push: function(val) {
        var current,
        newNode = this._createNode(val); 
        if(this._head == null) {
            this._head = newNode;
        }
        else {
            current = this._head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this._size++;
    },
	pop: function(){
		var prev, current;
		prev = this._head;
        current = this._head.next;
		while(current.next != null) {
			prev = current;
			current = current.next;
		}
		prev.next = null;
		this._size--;
		return current.data;
	},
	shift: function(val){
		var newNode = this._createNode(val);
		newNode.next = this._head;
		this._head = newNode;
        this._size++;
	},
	unShift: function(val){
		var prev, current;
		prev = this._head;
		current = this._head.next;
		this._head = current;
        this._size--;
		return prev.data;
	},
    removeDuplicates: function() {
		var prev, current;
        prev = this._head;
        current = this._head.next;
        hash = {};
        while(current != null) {
            if(!hash[current.data]) {
                hash[current.data] = true;
            } else {
                prev.next = current.next;
                this._size--;
            }
            prev = current;
            current = current.next;
        }
    },
	removeSpecific: function(node){
		var prev, current;
		prev = this._head;
		current = this_head.next;
		while(current.next != null){
			if(node.data !== current.data && node.next !== current.next){
				prev = current;
				current = current.next;
			}else{
				prev.next = current.next;
				break;
			}
		}
	}
}
