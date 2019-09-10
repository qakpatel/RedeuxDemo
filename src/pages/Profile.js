import React, { Component } from 'react'
import Navbar from './componets/Navbar';
import { getProfile,updateProfile } from './../action/Action'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import image from './../tom.jpg'
import { ToastsContainer, ToastsStore } from 'react-toasts';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
           isEdit:false,
           isChange:false,
            name:'',
            city:'',
            state:'',
            street:'',
            pincode:''
        }
    }

    componentDidMount() {
        this.props.getProfile();
    }
    change=(e)=>{
       this.setState({[e.target.name]:e.target.value,isChange:true})
    }
 
    
    edit=()=>{
        this.setState({isEdit:!this.state.isEdit})
        this.setState({
            name:this.props.response.result.name,
            city:this.props.response.result.address.city,
            state:this.props.response.result.address.state,
            street:this.props.response.result.address.street,
            pincode:this.props.response.result.address.pincode 
        })

        
     if(this.state.isEdit){ 
      let data={
          name:this.state.name,
          email:this.props.response.result.email,
          address:{
              city:this.state.city,
              state:this.state.state,
              street:this.state.street,
              pincode:this.state.pincode
          }
         }
         if(this.state.isChange){
             setTimeout(()=>{
                this.props.updateProfile(data)
             },500)
             setTimeout(()=>{
                this.props.getProfile();
                this.setState({isEdit:false})
            },500)      
         }
      
     }

    }

    render() {  
        if (this.props.response.result) {
                
            const profile=(<div><div tabIndex="0" aria-label="this is profile card" style={{ position: 'absolute', top: "20%", left: "10%", width: '30%',height:'auto' ,backgroundColor: '#bac7bf',borderRadius:'30px' }}>
            <div className="container" style={{ border: '1px gray', width: '100%',padding:'10px' }}>
               <div style={{display:'flex'}}> <label>Name: </label> <span style={{paddingLeft:'10px'}}>{this.props.response.result.name || ''}</span></div>
               <div style={{display:'flex'}}><label>Email: </label><p style={{paddingLeft:'10px'}}>{this.props.response.result.email || ''}</p></div>
                <label>Address: </label>
                <div style={{ padding: '10px' }}>
                <div style={{display:'flex'}}>   <label>City: </label><p style={{paddingLeft:'10px'}}>{this.props.response.result.address.city || ''}</p></div>
                <div style={{display:'flex'}}>   <label>State: </label><p style={{paddingLeft:'10px'}}>{this.props.response.result.address.state || ''}</p></div>
                <div style={{display:'flex'}}>   <label>Street: </label><p style={{paddingLeft:'10px'}}>{this.props.response.result.address.street || ''}</p></div>
                <div style={{display:'flex'}}>   <label>pincode: </label><p style={{paddingLeft:'10px'}}>{this.props.response.result.address.pincode || ''}</p></div>
                </div>
                <button className="btn btn-primary" style={{marginLeft:' 30%',width: '29%',height: '35px'}} onClick={this.edit}>{this.state.isEdit?'Update':'Edit'}</button>
            </div>
        </div>
        <div style={{position:'absolute',top:'20%',left:'45%' ,width:'30%'}}>
               <img src={image} width="100%" height="100%" style={{ borderRadius:'30px'}}/>
         </div>
         </div>)

   const editProfile=(<div><div tabIndex="0" aria-label="this is profile card" style={{ position: 'absolute', top: "20%", left: "10%", width: '30%',height:'auto' ,backgroundColor: '#bac7bf',borderRadius:'30px' }}>
   <div className="container" style={{ border: '1px gray', width: '100%',padding:'10px' }}>
      <div style={{display:'flex'}}> <label>Name: </label> <input type="text" style={{marginLeft:'10px',borderRadius:'10px'}} onChange={this.change}  value={this.state.name} name="name"/></div>
      <div style={{display:'flex'}}><label>Email: </label><input type="text" style={{marginLeft:'10px',borderRadius:'10px',cursor:'no-drop'}} onChange={this.change}  value={this.props.response.result.email} name="email" disabled={true}/></div>
       <label>Address: </label>
       <div style={{ padding: '10px' }}>
       <div style={{display:'flex'}}>   <label>City: </label><input type="text" style={{marginLeft:'10px',borderRadius:'10px'}} onChange={this.change}  value={this.state.city} name="city"/></div>
       <div style={{display:'flex'}}>   <label>State: </label><input type="text" style={{marginLeft:'10px',borderRadius:'10px'}} onChange={this.change}  value={this.state.state} name="state"/></div>
       <div style={{display:'flex'}}>   <label>Street: </label><input type="text" style={{marginLeft:'10px',borderRadius:'10px'}} onChange={this.change}  value={this.state.street} name="street"/></div>
       <div style={{display:'flex'}}>   <label>pincode: </label><input type="text" style={{marginLeft:'10px',borderRadius:'10px'}}  onChange={this.change}  value={this.state.pincode} name="pincode"/></div>
       </div>
       <button className="btn btn-primary" style={{marginLeft:' 30%',width: '29%',height: '35px'}} onClick={this.edit}>{this.state.isEdit?'Update':'Edit'}</button>
   </div>
</div>
<div style={{position:'absolute',top:'20%',left:'45%' ,width:'30%'}}>
      <img src={image} width="100%" height="100%" style={{ borderRadius:'30px'}}/>
</div>
</div>);
            return (
                <div>
                    <Navbar route={this.props.history} />
                    {this.state.isEdit?editProfile:profile}
                </div>
            );
        }else{
            return (
                <div>
                  <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                   />
                </div>
            )
        }
       
    }
}

const mapStateToProps = state => {
    return {
        response: state.users.response,
        response:state.users.response
    }
}
export default connect(mapStateToProps, { getProfile , updateProfile})(Profile);