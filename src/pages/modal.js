import React, { Component } from 'react';

 class modal extends Component {

    constructor(props){
        super(props)
    }

    componentDidUpdate(){
        if(this.props.open){
            window.$('#exampleModal').modal('show')
        }
    }
    yes=()=>{
        this.props.onClickYes('yes')
        window.$('#exampleModal').modal('toggle')
    }
    

    render() {
            return (
                <div>
                   <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">DELETE</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Do you want to delete this?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">NO</button>
            <a href="#delete"><button type="button" className="btn btn-primary" onClick={this.yes}>YES</button></a>
          </div>
         </div>
         </div>
       </div> 
     </div>
            )
    }
}


export default modal;
