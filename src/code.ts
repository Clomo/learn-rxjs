import {Observable} from "rxjs/Observable";
import { merge } from "rxjs/observable/merge";

var observable = Observable.create((observer:any) => {
    observer.next('Hello world');    
})

var observable2 = Observable.create((observer:any) => {
    observer.next('Comment ca va?');
})

var newObs = merge(observable, observable2);

newObs.subscribe((x:any) => addItem(x));


function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}