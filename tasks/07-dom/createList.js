'use strict';

//test for array
function isArray (obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
}

function createList(listData, listContainer, itemContainer) {
	if (listData === undefined) return;
	if (listContainer === undefined) {
		listContainer = 'ul';
	}
	if (itemContainer === undefined) {
		itemContainer = 'li';
	}

	function createTreeDom(arr) {
		if (!isArray(arr)) {
			return;
		}

		var ul = document.createElement(listContainer);

		for (var i = 0; i < arr.length; i += 1) {
			
			if (!isArray(arr[i])){
				var li = document.createElement(itemContainer);
				var text = document.createTextNode(arr[i]);
				li.appendChild(text);
			};

			var childrenUl = createTreeDom(arr[i]);
			if (childrenUl) {
				li.appendChild(childrenUl);
			}

			ul.appendChild(li);
		}

		return ul;
	}

	document.body.appendChild(createTreeDom(listData));
}

