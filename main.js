import { ToyReact, Component } from './ToyReact.js';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <a>zzzzz</a>
        <div>{this.children}</div>
      </div>
    );
  }
}

let a = (
  <MyComponent name="a" id="id">
    <div>123</div>
  </MyComponent>
);

ToyReact.render(a, document.querySelector('#root'));
