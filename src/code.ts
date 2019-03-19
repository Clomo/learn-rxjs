import {Observable} from "rxjs/Observable";

var observable = Observable.create((observer: any) => {
    try {
        observer.next('Hello world');
        observer.next('Comment ca va?');
        setInterval(() => {
            observer.next('Tout vas bien');
        }, 2000);
    } catch(err) {
        observer.error(err);
    }
});

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('COMPLETED')
);

setTimeout(() => {
    observer.unsubscribe();
}, 6001);

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}