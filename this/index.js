console.log(this);

obj = {
  name: "Object 1",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  getName: function () {
    console.log(this.name);
  },
};

obj2 = {
  name: "Object 2",
};

obj3 = {
  name: "Object 3",
};

//call
obj.getName.call(obj2); // arg should be passed as comma separated

//apply
obj.getName.apply(obj2); // arg should be passed as an array

//bind
let getName = obj.getName.bind(obj3);
getName();

function foo(cb) {
  console.log("Function foo with cb");
  cb();
}
foo(obj.getName.bind(obj2));
