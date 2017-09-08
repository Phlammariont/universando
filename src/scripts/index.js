import _ from 'lodash';
import 'Style/style.css';
console.log("hola mundo");

function component() {
  var elemento = document.createElement('div');

  // Lodash, now imported by this script
  elemento.innerHTML = _.join(['Hello', 'webpack'], ' ');
  elemento.classList.add('hello');

  return elemento;
}
document.body.appendChild(component());
document.body.appendChild(component());
