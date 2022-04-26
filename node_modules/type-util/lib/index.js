var _ = require('lodash');
module.exports = function(){
  var methods = {};
methods._isEmpty = function(data){ 
  return methods._isString(data) ? methods._isStringEmpty(data) : methods._isArray(data) ? methods._isArrayEmpty(data) : methods._isObject(data) ? methods._isObjectEmpty(data) : methods._isUndefined(data) ? true : methods._isNull(data) ? true : 'INVALID_DATA'; 
};
methods._lengthOf = function(data){ 
  return methods._isString(data) ? methods._lenString(data) : methods._isArray(data) ? methods._lenArray(data) : methods._isObject(data) ? methods._lenObject(data) : methods._isUndefined(data) ? 0 : methods._isNull(data) ? 0 : 'INVALID_DATA';  
};
methods._isDate = function(data){ 
  return methods._type(data) =='[object Date]' ? true : (new Date(data).toString() == 'Invalid Date') ? false : methods._type(data) != '[object Number]'  && methods._type(new Date(data)) == '[object Date]' ? true : false;
};
methods._isInt = function(data){ 
  return methods._type(data) =='[object Number]' ? true : parseInt(data) == '[object Number]' ? true : false;
};
methods._isFloat = function(data){ 
  return methods._type(data) =='[object Number]' ? true : parseFloat(data) == '[object Number]' ? true : false;
};
methods._isObject = function(data){ 
  return methods._type(data) =='[object Object]';  
};
methods._isArray = function(data){  
  return methods._type(data) =='[object Array]';  
};
methods._isString = function(data){  
  return methods._type(data) =='[object String]';  
}; 
methods._isUndefined = function(data){ 
  return methods._type(data) =='[object Undefined]';  
}; 
methods._isFunction = function(data){ 
  return typeof data =='function';  
}; 
methods._isNull = function(data){ 
  return methods._type(data) =='[object Null]';  
};
methods._compact = function(data){ 
  return _.compact(data); 
};
methods._uniqueList = function(data){ 
  return methods._.uniq(data); 
};
methods._merge = function(obj1, obj2){
  //yet to be decide array can contain multiple objects to be concatenated more then 2
  if(_validateMerge(obj1, obj2))
    console.log('valid');
  else
    console.log('invalid');
};
methods._type = function(data){ 
  return Object.prototype.toString.call(data); 
};
methods._isArrayEmpty = function(data){ 
  return methods._lenArray(data) < 1 ? true : false; 
};
methods._isStringEmpty = function(data){ 
  return methods._lenString(data) < 1 ? true : false; 
};
methods._isObjectEmpty = function(data){ 
  return methods._lenObject(data) < 1 ? true : false; 
};
methods._validateMerge = function(obj1, obj2){ 
  return methods._type(obj1) == methods._type(obj2) && methods._lengthOf(obj1) !== 0 && methods._lengthOf(obj2); /*and also check length*/ 
};

methods._findObj = function(obj, key){
  if(Object.prototype.toString.call(obj) === '[object Object]'){
   if(obj[key] !== undefined) return obj[key];
   if(typeof obj == 'object') 
    for(var k in obj){
      if(obj[k] == key) return {key: k,v: obj[k]};
      var v = methods._findObj(obj[k],key);
      if(v !== undefined) return v;
    }
  } if(Object.prototype.toString.call(obj) === '[object Array]') {  return methods._find(obj, key); }
};

methods._find = function(arr, key){
     for(var i in arr){
       if(i == key){ return arr[i]; /*break;*/ }
       if(typeof arr[i] == 'string') { if(arr[i] == key) { return arr[i]; /*break;*/} }
       if(Object.prototype.toString.call(arr[i]) === '[object Object]') { 
           var v = methods._findObj(arr[i],key);  
           if(v !== undefined) return v;
       }
       if(Object.prototype.toString.call(arr[i]) === '[object Array]') {  return methods._find(arr[i], key); }
     }
};

methods._maxKey = function(data){
    var max = 0;  
  for(var i in data){
       max = i;
       for(var j in data){
         if(parseInt(max) >= parseInt(j)) 
          max = max; 
         if(parseInt(max) < parseInt(j))
          max = j;
       }     
  }
  return max;
}; 

methods._parentHistory = function(arr, splitter){
   var final='';
   for(var index in arr){
      if(arr[index] !== null && arr[index] !== false) final += arr[index] === '' || index == arr.length -1 ? arr[index] : arr[index]+splitter;
   }
   return final;
};

methods._removeElementArray = function(arr, elem){
   arr[arr.indexOf(elem)] = false;
   arr = _.compact(arr);
   return arr;
};

methods._request_response_extractor = function(area, name, ancestors, splitter, current){
  var obj = area;
  if(methods._.lengthOf(area) === 0) return obj; 
   if(methods._.isArray(current)){
      console.log('Array',current);
   }
   if(methods._.isObject(current)){
      for(var key in current){
        if(_.isArray(current)){
           console.log('Array',current);
      }
      if(methods._.isObject(current)){
        ancestors.push(key);  
        obj = methods._request_response_extractor(area, key, ancestors, splitter, current[key]);
      }
      }
   }
   if(!_.isObject(current) && !_.isArray(current)){
          area[_parentHistory(ancestors, splitter)] = current; 
          ancestors = methods._removeElementArray(ancestors, name); 
   }
   return obj;
};


methods._lenString = function(data){ return data.length; };

methods._lenArray = function(data){ return data.length; };

methods._lenObject = function(data){ return Object.keys(data).length; };
// function isArr(arr){ return Array.isArray(arr); }
return methods;
};