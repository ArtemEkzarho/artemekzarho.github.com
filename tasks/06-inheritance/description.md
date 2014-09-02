Реализовать `counter` на прототипах. Значение счетчика не нужно инкапсулировать. Методы вынести в прототип.

----------

Создать заготовку класса `Gallery`. Составить список методов, объявить их, не реализовывать. Конечный результат галереи должен выглядеть как галерея на главной [http://fotorama.io](http://fotorama.io).

----------

Написать функцию `createMediator()`, которая возвращает объект с тремя методами.

`subscribe(eventName, handler)` подписка на событие. Первый аргумент строка, название события `eventName` при котором надо вызвать функцию `handler`. Запуск события происходит при вызове метода `publish(eventName, data)`. Метод `subscribe` можно вызывать несколько раз для одного и того же события: все `handler`-ы запоминаются.

`publish(eventName, data)` запуск события с названием `eventName`. Должны быть вызваны все `handler`-ы, добавленные с помощью метода `subscribe`. Если для события `eventName` нет ни одного обработчика, ошибки не должно происходить. Порядок вызова обработчиков должен совпадать с порядком их добавления.

`unsubscribe(eventName, handler)` отписаться от события. То есть не запускать обработчик `handler` для события `eventName`. Может принимать только один первый аргумент. В этом случае убираются все обработчики для события `eventName`. Если у события `eventName` нет обработчиков или нет обработчика `handler`, ошибки не должно происходить.

    var m = createMediator();
     
    m.publish('customEvent'); // Ничего не происходит
    var h2 = function(data) {console.log('handler 2', data)};
    m.subscribe('customEvent', function(data) {console.log('handler 1', data)});
    m.subscribe('anotherEvent', h2);
    m.publish('customEvent'); // в консоли 'handler 1', undefined
    m.publish('anotherEvent', {test: true}); // в консоли 'handler 2', {test: true}
    m.subscribe('customEvent', function() {console.log('handler 3')});
    m.publish('customEvent', {foo: "bar"}); // в консоли 'handler 1' {foo: "bar"}, 'handler 3'
    m.unsubscribe('customEvent');
    m.publish('customEvent'); // Ничего не происходит
