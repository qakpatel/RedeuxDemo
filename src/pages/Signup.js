import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { signup } from './../action/Action'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Loader from 'react-loader-spinner'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            pass: '',
            cPass: '',
            city: '',
            state: '',
            street: '',
            pincode: '',
            isLoading: true
        }
    }

    change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidUpdate(nextProps) {
        if (nextProps !== this.props)
            if (this.props.response.status === 200) {
                this.setState({ isLoading: true })
                ToastsStore.success("Signup successfully!!")
                this.props.history.replace('/')
            }
    }
    signUp = (e) => {

        e.preventDefault();
        if (!this.state.name || !this.state.email || !this.state.pass || !this.state.cPass) {
            ToastsStore.error("Invalid form");
            return;
        }

        let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.pass,
            address: { city: this.state.city, state: this.state.state, street: this.state.street, pincode: this.state.pincode }
        }
        this.props.signup(data)
        this.setState({ isLoading: false })
        this.setState({
            name: '',
            email: '',
            pass: '',
            cPass: '',
            city: '',
            state: '',
            street: '',
            pincode: '',
        })

    }

    render() {
        const page = (<section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                        <div className="row">
                            <div className="col text-center">
                                <h1>Register</h1>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col mt-4">
                                <input type="text" className="form-control" placeholder="your Name..." name="name" onChange={this.change} value={this.state.name} />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <input type="email" className="form-control" placeholder="Email..." name="email" onChange={this.change} value={this.state.email} />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <input type="password" className="form-control" placeholder="Password..." name="pass" onChange={this.change} value={this.state.pass} />
                            </div>
                            <div className="col">
                                <input type="password" className="form-control" placeholder="Confirm Password..." name="cPass" onChange={this.change} value={this.state.cPass} />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="city..." name="city" onChange={this.change} value={this.state.city} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="state..." name="state" onChange={this.change} value={this.state.state} />
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="street..." name="street" onChange={this.change} value={this.state.street} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="pincode..." name="pincode" onChange={this.change} value={this.state.pincode} />
                            </div>
                        </div>
                        <div className="row justify-content-start mt-4">
                            <div className="col">

                                <button className="btn btn-primary mt-4" onClick={this.signUp}>Submit</button>
                            </div>
                        </div>
                        <hr />
                        <a style={{ cursor: 'pointer', color: '#307faf' }} onClick={this.login = () => this.props.history.replace('/')}>Already have an Account?</a>
                    </div>
                </div>
            </div>
        </section>);
        return (
            <div>
                {this.state.isLoading ? page : (<Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />)}
                <ToastsContainer store={ToastsStore} />
            </div>
        )
    }
}

Signup.propTypes = {
    signup: PropTypes.func.isRequired
};
const mapStateToProps = state => {
    return {
        response: state.users.response,
    }
}

export default connect(mapStateToProps, { signup })(Signup);