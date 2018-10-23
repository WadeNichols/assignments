import React, {Component} from 'react'

export default class Squares extends Component{
    constructor(){
        super();
        this.state ={
            tLeft: "red",
            tRight: "blue",
            bLeft: 'purple',
            bRight: 'green'
        }
        this.changeAllToWhite = this.changeAllToWhite.bind(this);
    }

    changeAllToWhite(){
        this.setState({
            tLeft: 'white',
            tRight: 'white',
            bLeft: 'white',
            bRight: 'white'
        })
    }

    changeTopTwo(){
        this.setState({
            tLeft: 'white',
            tRight: 'white',
            bLeft: 'white',
            bRight: 'white'
        })
    }

    topHalf(){
        this.setState({
            tleft: 'purple',
            tRight: 'purple',
            bLeft: 'white',
            bRight: 'white'
        })
    }

    render(){
        const {tLeft, tRight, bLeft, bRight} = this.state
        return(
            <div>
                <button className='Button' onClick={this.changeAllToWhite}>White Power Hour!</button>
                <button className='Button' onClick={this.topHalf}>Purple Drank</button>
                <div className="box-container">
                    <div style={{backgroundColor: tLeft}} className={'box'}>box 1</div>
                    <div style={{backgroundColor: tRight}} className={'box'}>box 2</div>
                    <div style={{backgroundColor: bLeft}} className={'box'}>box 3</div>
                    <div style={{backgroundColor: bRight}} className={'box'}>box 4</div>
                </div>
            </div>
        )
    }
}

