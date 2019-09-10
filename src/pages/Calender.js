import React, { Component } from 'react'
import Calendar from 'react-calendar';

class Calender extends Component {

    constructor(props){
        super(props)
        this.state={
            date:new Date()
        }
    }    
    

    change = date => {
      
        this.setState({ date })
      console.log(date)
    }

    render() {
        
        return (
            <div>
                <div style={{position:'absolute',top:'35%',left:'37%'}}>
                <Calendar
           onChange={this.change}
           value={this.state.date}
           maxDate={new Date()}
           minDate={new Date('Jan 01 2000')}
           />
        </div>
            </div>
        )
    }
}

export default Calender;