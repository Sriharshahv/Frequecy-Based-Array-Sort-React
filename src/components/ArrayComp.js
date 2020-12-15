import React from 'react';
import './ArrayComp.css'

class ArrayComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numberRepeatations: {},
            numbersToDisplay:[],
            current:''
        }
    }

    onChangeHandler = (e) => {
        this.setState( currentState => {
            return {...currentState, current:e.target.value}
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState( currentState => {
            let currentNumber = currentState.current;
            let repeat = 1;
            if(currentState.numberRepeatations[currentNumber]){
                repeat = currentState.numberRepeatations[currentNumber] + 1;
            }
            let numberRepeatations = {...currentState.numberRepeatations,[currentNumber]: repeat}
            let numbersToDisplay = [];
            let sortedArray = []
            for(let number in numberRepeatations){
                sortedArray.push([number,numberRepeatations[number]])
            }
            sortedArray.sort((a,b) => parseInt(b[1])-parseInt(a[1])).forEach((e) => {
                numbersToDisplay.push(...Array(e[1]).fill(e[0]))
            })
            return {...currentState, numberRepeatations, numbersToDisplay, current:''}
        })
    }

    

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input onChange={(e) => this.onChangeHandler(e)} value={this.state.current}></input>
                    <button type="submit">Add to Array</button>
                    <p>
                        {this.state.numbersToDisplay.map((e,i) => <span className="block" key={e+i}>{e}</span>)}
                    </p>
                </form>
            </div>
        );
    }
}

export default ArrayComp;