import React, { Component } from 'react'
import { getComments } from './../action/Action'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class comments extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
     this.props.getComments(); 
    }

    componentDidUpdate(nextProps) {
     if(this.props.comments.length>0){
        this.props.comments.concat(nextProps.comments) 
     }
    }
    render() {

        const comment=this.props.comments.map((a,index)=>{
            return (<div className="row" key={a.id}>
            <div className="col-3" style={{padding:'40px'}}>
             <h4>{a.name}</h4>
             <p>{a.body}</p>
            </div>
            </div>)
        })
        return (
            <div>
                {comment}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments:state.users.comments,
       
     }
   }

export default connect(mapStateToProps,{getComments})(comments);
