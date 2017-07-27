// console.log('Hello World');
// console.log('This is a test');
//
//
// for(var i=0; i <5; i++) {
// console.log(i);
//


//variable does not have to be called http, but most people do name the variable this
// // Give us all of your methods and functions - http - module is giving us an object
//
// create server, one of the methods on the object, need to target object http - createServer takes a parameter, which is a functio -targeting response object, wrteHead declares the header and what is written (content) response.end - severs connection


// var http = require('http');
//
// http.createServer(function(request, response){
//   var facts=["play soccer", "have 2 sisters and 1 brother", "love mangos", "love pizza"];
// response.writeHead(200, {"Content-type": "text/plain"});
// response.write("Hello, World");
// response.write(facts[Math.floor(Math.random()* facts.length)]);
// response.end();
// }).listen(8888);


var http = require('http');

var info=require('./example.js');

http.createServer(onRequest).listen(8888);

function onRequest(request, response) {
response.writeHead(200, {"Content-type": "text/plain"});
response.write("Two Truths and a Lie:   ");
response.write(info.truths1[Math.floor(Math.random()* info.truths1.length)]);
response.write(info.lies[Math.floor(Math.random()* info.lies.length)]);
response.write(info.truths2[Math.floor(Math.random()* info.truths2.length)]);
response.end();
}











//
// function add(x,y) {
//   console.log(x + "+" + y + "=" + (x+y));
// }
//
// add(3,4);
//
// function subtract(x,y) {
//   console.log(x + "-" + y + "=" + (x-y));
// }
//
// subtract(3,4);
//
// function multiply(x,y) {
//   console.log(x + "*" + y + "=" + (x*y));
// }
//
// multiply(3,4);
//
// function division(x,y) {
//   console.log(x + "/" + y + "=" + (x/y));
// }
//
// division(3,4);
//
//
// var array = [add, subtract, multiply, division];
//
//
// function all(x,y){
//   array.forEach(function(someFunction){
// someFunction(x,y);
//
//   });
// }
//
//
// function execute (someFunction, x, y) {
//
// someFunction(x,y);
//
// }
//
// execute(add, 3,4);
//
// all(3,4);
//
//





// function executeAdd(add, x,y){
//   add(3,4);
// }
// executeAdd (add,3,4);


// function subtract(x,y) {
//   console.log(x + "-" + y + "=" + (x-y));
// }
//
// function executeSubtract(subtract, x,y){
//   subtract(3,4);
// }
// executeSubtract (subtract,3,4);
