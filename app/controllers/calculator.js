import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalculatorController extends Controller {
    @tracked a = '1';
    @tracked b = '2';
    @tracked op = '+';
    @tracked result = '';
    @tracked history = [ 
      
    ];

    @tracked notEmptyHis = history.length > 0;

    @action
    calculator(event) {

        this.a = parseInt(this.a)
        this.b = parseInt(this.b)
        switch (this.op) {
            case "+": {
                this.result = this.a + this.b;
                break;
            }
            case "-": {
                this.result = this.a - this.b;
                break;
            }
            case "*": {
                this.result = this.a * this.b;
                break;
            }
            case "/": {
                this.result = this.a / this.b;
                break;
            }
            case "%": {
                this.result = Math.floor(this.a / this.b);
                break;
            }
            default: {
                this.result = "default";
                break;
            }
        }
        this.history.push(            
            this.a+this.op+this.b+"="+this.result          
        );

        console.log("result: " + this.result);
        console.log("history: " + JSON.stringify(this.history));
    }
    @action
    setOperation(op) {
        this.op = op;
        console.log("operation:" + op);
    }
}
