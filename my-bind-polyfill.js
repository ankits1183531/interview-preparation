Function.prototype.myBind = function(obj , ...args){
	let fn = this;
 	return function (...args1) {
  	fn.apply(obj , [...args, ...args1]);
  }
}

printName.myBind(obj , 'Test')()