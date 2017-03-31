class Foo { // this is ES6 syntax!
  constructor(msg) {
    this.msg = msg;
  }
  speak() {
    console.log(this.msg);
  }
}

var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';
ReactDOM.render(
  <div>{ipsumText}</div>,
  document.getElementById('example')
);

var f = new Foo('Hi there, console!');
f.speak();
