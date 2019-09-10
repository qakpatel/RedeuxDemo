import React, { Component } from 'react'
import './css/style.css'
import Navbar from './componets/Navbar';
import { connect } from 'react-redux';
import { login } from './../action/Action'
import PropTypes from 'prop-types';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { Label, Input, Button } from 'reactstrap';

class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.myref=React.createRef();
    }

    change = (e) => {
        if (e.target.value) {
            this.setState({ [e.target.name]: e.target.value })
        }
    }


    componentDidUpdate(prevProps){
        if(prevProps!==this.props)
        {
            
            if(this.props.response.status===200){
                localStorage.setItem('token',JSON.stringify(this.props.response.token))
                this.props.history.replace('/dashboard')
            }else{
                ToastsStore.warning(this.props.response.message)
            }
        }
    }

    gotoDashboard = (e) => {
        console.log(e.type)
        if (!this.state.email || !this.state.password) {
            ToastsStore.error("Please fill the fields!!")
            return;
        }
        this.props.login(this.state)
    }


    submit=()=>{
        this.myref.current.focus();
    }

    render() {

        return (
            <div>
                <Navbar route={1} />
                <br />
                <div className="container">
                    <div className="form-group">
                        <Label >Email address</Label>
                        <Input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.change} />

                    </div>
                    <div className="form-group">
                        <Label >Password</Label>
                        <Input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.change} />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <Label className="form-check-label" >Remember me</Label>
                    </div>
                    <Button style={{margin:'2px'}}type="submit" outline color="primary" onClick={this.gotoDashboard} onKeyPress={this.gotoDashboard}>Login</Button>
                   <br/>
                   <br/>
                    {/* <input type="text" className="form-check-input" id="exampleCheck3" ref={this.myref}/>
                    <br/>
                    <hr/>
                    <button type="submit" className="btn btn-primary" onClick={this.submit}>submit</button> */}

                    <a style={{ cursor: 'pointer', color: '#307faf' }} onClick={this.signup = () => this.props.history.push('/signup')}>Create a Account?</a>
                </div>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />


            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired
};
const mapStateToProps = state => {
    return {
        response:state.users.response,
     }
   }

export default connect(mapStateToProps, { login })(Login);