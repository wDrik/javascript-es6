"use strict";

var arr = [1, 2, 4, 5, 8, 10];
var mapArr = arr.map(function (item, index) {
  return item + index;
});
console.log(mapArr);
var reduceArr = arr.reduce(function (total, next) {
  return total + next;
});
console.log(reduceArr);
var filterArr = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filterArr);
var findArr = arr.find(function (item) {
  return item === 4;
});
console.log(findArr);
"use strict";

var arr = [1, 3, 4, 5, 6]; // const mapArr = arr.map(function (item, index) {
//     return item + index;
// });
// console.log(mapArr);

var mapArr = arr.map(function (item) {
  return item * 2;
});
console.log(mapArr);

var showName = function showName() {
  return {
    name: 'Iorgen'
  };
};

console.log(showName()); // OR

var showNameInline = function showNameInline() {
  return {
    name: 'Iorgen'
  };
};

console.log(showNameInline()); // Default values for parameters

var calc = function calc() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(calc());
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class
var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    } // static method

  }], [{
    key: "Calc",
    value: function Calc(a, b) {
      return a + b;
    }
  }]);

  return List;
}(); // Class extends


var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.user = 'Iorgen';
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUser",
    value: function showUser() {
      console.log(this.user);
    }
  }]);

  return TodoList;
}(List); // Object


var myList = new TodoList();

document.getElementById('newTodo').onclick = function () {
  myList.add('New Todo');
};

myList.showUser(); // Call to static method

console.log(TodoList.Calc(10, 15));
"use strict";

var user = {
  name: 'Iorgen'
};
user.name = 'Wildrik!';
console.log(user.name); // ---------- x ----------

function test(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

test(10);
