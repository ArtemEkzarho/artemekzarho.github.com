'use strict';

function initList () {
    var list = document.getElementById('students'),
    li;

    for (var key in students) {        
        li = document.createElement('LI');
        li.innerHTML = key + ' - ' + students[key];        
        list.appendChild(li);    
    }
}

document.addEventListener("DOMContentLoaded", initList);