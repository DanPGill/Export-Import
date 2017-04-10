import React from 'react' // ignore this

import banana from './banana';
console.log(banana);
import { apple } from './apple';
console.log(apple);
import sum from './myFunctions';
console.log(sum(2, 2));
import fruits from './fruits';
console.log(fruits);
import { apple as apple2 } from './fruits';
console.log(apple2);
import { banana as banana2 } from './fruits';
console.log(banana2);
import pieMenu, {applePie, blueberryPie} from './pies';
console.log(pieMenu);
console.log(applePie);
console.log(blueberryPie);
import cats from 'cat-names';
// Ignore this!
export default () => <p>Import Export Tasks. Open your debugger :)</p>
