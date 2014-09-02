Реализовать функцию `next(node)`, которая вернет следующий узел, не учитывая текстовые узлы и узлы комментариев.

----------

Реализовать функцию `addClass(node, classToAdd)`. Класс не должен добавляться, если у элемента уже есть такой.

Пример применения для разметки

    <div class='main-column'></div>

После вызова

    addClass(document.querySelector('.main-column'), 'main');

HTML станет таким:

    <div class='main-column main'></div>

----------

Реализовать функцию `removeClass(node, classToRemove)`. Удаление несуществующего класса не должно приводить к ошибке. Если классов несколько, должны быть удалены все.

    <div class="main main main-column"></div>
> 

    removeClass(document.querySelector('.main-column'), 'main');
> 

    <div class="main-column"></div>
> 

    removeClass(document.querySelector('.main-column'), 'main-column');
> 

    <div></div>

----------

Реализовать функцию `hasClass(node, classToCheck)`, которая вернет `true`, если у `node` есть класс `classToCheck`

----------

Реализовать функцию `closest(node, testFunc)`, которая вернет первого родителя, для которого `testFunc` вернет `true`. `testFunc` получает аргументом DOM узел. Сам DOM узел `node` тоже проверять. Если ни один из родителей не подошел, функция возвращает `null`

    <div class="main">
    	<div class="wrapper outer">
    		<div class="wrapper inner">
    			<div id="test"></div>
    		</div>
    	</div>
    </div>
> 

    var testDiv = document.getElementById('test')
     
    closest(testDiv, function (node) {
      return node.className.indexOf('wrapper') !== -1
    }); // div.wrapper.inner 
    closest(testDiv, function () {
      return true
    }); // div#test 
    closest(testDiv, function (node) {
      return node.id === 'form'
    }); // null

----------

Релизовать функцию `createList(listData, listContainer, itemContainer)`, возвращающую узел списка. Использовать innerHTML нельзя. Второй и третий аргументы не обязательные. Значения по умолчанию для них - `ul` и `li`. `listData` - массив. Может содержать как элементы (текст), так и массивы элементов. Вложенность - любая.

Примеры возвращаемых узлов:

    createList(['мясо', 'рыба']) /* ->
    <ul>
    	<li>мясо</li>
    	<li>рыба</li>
    </ul>
    */
> 

    createList(['мясо', ['яблоки', 'бананы']], 'ol') /*->
    <ol>
    	<li>мясо</li>
    	<li>
    		<ol>
    			<li>яблоки</li>
    			<li>бананы</li>
    		</ol>
    	</li>
    </ol>
    */