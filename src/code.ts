import {Observable} from "rxjs/Observable";

var observable = Observable.create((observer: any) => {
    observer.next('Hello world');
    observer.next('Comment ca va?');
    observer.complete();
    observer.next('Vous ne me verrez pas');
});

observable.subscribe(
        (x:any) => addItem(x),
        (error:any) => addItem(error),
        () => addItem('COMPLETED')
    );

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}