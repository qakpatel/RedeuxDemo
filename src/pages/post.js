import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './componets/Navbar';
import { setPost,deletePost,getPost } from './../action/Action';
import image from './../delete.jpg';
import Modal from './modal';
import { Form, Label,Input,Button,FormGroup } from 'reactstrap';

 class post extends Component {

     constructor(props){
         super(props) 
         this.state={
           title:'',
           body:'',
           showModal:false,
           object:{}
         }  
     }

    componentDidMount(){
        this.props.getPost();
    }

      change=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
      submitPost=(e)=>{
        e.preventDefault();
        this.props.setPost(this.state)
        this.setState({title:'',body:''})
        this.props.getPost();
      }

      modalFunction=(value)=>{
        if(value==='yes'){
          this.setState({showModal:false})
          this.props.deletePost({_id:this.state.object._id});
          this.props.getPost();  
        }
      }
      delete=(object)=>{
      this.setState({showModal:true,object:object}) 
      }
     componentDidUpdate(prevProps){
       if(prevProps!==this.props){
        
       }
     }
 

    render() {
     
      const items=( <div>
        <Navbar route={this.props.history}/>
         <div >
           <div className="container">
        <Form className="form-control">
          <FormGroup>
         <Label className="form-control">Title: <Input type="text" value={this.state.title} onChange={this.change} name="title" /></Label>
         <Label className="form-control">Body: <Input type="text" value={this.state.body} onChange={this.change} name="body" /></Label>
         <Button outline color="success" onClick={this.submitPost}>post</Button>
         </FormGroup>
        </Form>
           </div>

         </div> 
      </div>);
      
        if(this.props.post.length>0){
          const postItems =this.props.post.map((a,index)=>{
            return (<div className="list-group" key={index} style={{padding:'10px',margin:'2px'}}>
            <a style={{cursor:'pointer'}}   className="list-group-item list-group-item-action flex-column align-items-start">
              <img src={image} width="20px" height="20px" className="float-right" onClick={this.delete.bind(this,a)}/>
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">{a.title}</h6>
              </div>
              <p className="mb-1">{a.body}</p>
              <small>Posted By: {a.user_id?a.user_id.name:''}</small>
            </a>
            </div>)})

            return (
              <div>
                {items}
                <div style={{display:'flex',marginTop:'1%',flexDirection:'column',border:'1px solid',backgroundColor:'#a2b2de',overflowY:'scroll',height:'400px'}}>{postItems}</div>
                <Modal open={this.state.showModal} onClickYes={this.modalFunction}/>
              </div>
            );
            
        }
       
        return (
            <div>
                {items}
            </div>
        )
    }
}

const mapStateToProps = state => {
 
    return {
        post:state.users.post,
        response:state.users.response
     }
   }


export default connect(mapStateToProps,{getPost,setPost,deletePost})(post);