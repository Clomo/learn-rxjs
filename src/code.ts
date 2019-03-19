import { AsyncSubject } from 'rxjs/AsyncSubject';

var subject = new AsyncSubject();

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed'),
);

subject.next('Premier truc envoye');
subject.next('Un autre truc envoye');
subject.next('...Observer 2 va se subscribe...');

var observer2 = subject.subscribe(
    data => addItem('Observer 2: ' + data)
);

subject.next('Second truc envoye');
subject.next('Un troisieme truc envoye');

observer2.unsubscribe();

subject.next('Un dernier truc envoye');
subject.complete();

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}