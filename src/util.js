var util = {
  mergeRecursive: function mergeRecursive(source, sink) {
     var prop;

     for (prop in sink) {

         if (source[prop] instanceof Object) {
             mergeRecursive(source[prop], sink[prop]);
         }
         else {
             source[prop] = sink[prop];
         }
     }
  },
  serialize: function () {

  },
  isObject: function (obj) {
    return typeof obj === 'object';
  },
  extend2: function () {

  }
};

export default util;
