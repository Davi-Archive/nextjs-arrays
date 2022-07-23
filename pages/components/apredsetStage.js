import React, {Component} from "react";

export default class SetState extends Component {

    constructor(){
        super();

        this.increment = this.increment.bind(this);

        this.state = {
            contador: 0,
            array: 0
        };
    }
        increment() {
            console.log('Clique!');
            this.setState({array: this.state.array+1})
            var newArr= [];
            newArr.push(this.state.array+1);
            console.log(newArr);
        };



        render() {
            return (
                <div>
                    <h1>cliques: {this.state.array}</h1>
                    <input onInput={this.increment} />Incrementar
                </div>
            )
        };

};
