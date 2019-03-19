import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/share';

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
}).share();

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('COMPLETED')
);

setTimeout(() => {
    var observer2 = observable.subscribe(
        (x:any) => addItem('Subscriber 2: ' + x)
    )
}, 1000);

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}