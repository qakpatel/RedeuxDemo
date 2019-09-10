import React, { Component } from 'react'
import './css/style.css'
import { getUSer,getUserApi,getProfile } from './../action/Action'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
     this.props.getUSer(); 
     this.props.getUserApi();
     this.props.getProfile();
  }

  componentDidUpdate(nextProps) {
   
    if (this.props.user.length>0) {
      this.props.user.concat(nextProps.user) 
    }
    if(this.props.apiUser.length>0){
      this.props.apiUser.concat(nextProps.apiUser)
    }
  }
  render() {
    let username=''
    if(this.props.response.result){
        username=this.props.response.result.name
    } 
    return (
      <div>
        <div className="header">
          <a href="#" id="menu-action">
            <i className="glyphicon glyphicon-menu-hamburger"></i>
            <span>Close</span>
           
          </a>
          <div className="logo">
            {username}
          </div>
        </div>
        <div className="sidebar">
          <ul>
            <li><a onClick={this.post=()=>this.props.history.push('/profile')} style={{cursor:'pointer'}}><i className="fa fa-desktop"></i><span>Profile</span></a></li>
            <li><a onClick={this.post=()=>this.props.history.push('/posts')} style={{cursor:'pointer'}}><i className="fa fa-server"></i><span>Post</span></a></li>
            <li><a onClick={this.post=()=>this.props.history.push('/calender')} style={{cursor:'pointer'}}><i className="fa fa-calendar"></i><span>Calendar</span></a></li>
            <li><a onClick={this.post=()=>this.props.history.push('/comments')} style={{cursor:'pointer'}}><i className="fa fa-envelope-o"></i><span>Comments</span></a></li>
            <li><a onClick={this.logout=()=>this.props.history.replace('/')} style={{cursor:'pointer'}}><i className="fa fa-table"></i><span>Logout</span></a></li>
          </ul>
        </div>


        <div className="main">
          <div className="">
            <div className="jumbotron">
              <h1>Hello {username.split(' ')[0].toUpperCase()}<a className="anchorjs-link" href="#hello,-world!"><span className="anchorjs-icon"></span></a></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quisquam necessitatibus nesciunt nihil quod tenetur quas laudantium. Impedit, soluta tempore saepe voluptatibus officia quos sunt cum, veritatis laudantium mollitia sequi.</p>

              <p><a className="btn btn-primary" href="#" role="button">Learn more</a></p>
            </div>
            <div className="bs-callout bs-callout-danger">
              <h4>Danger</h4>
              Something horribad happened.
             </div>
            <p>FRENCH SAILOR. Hist, boys! let's have a jig or two before we ride to anchor in Blanket Bay. What say ye? There comes the other watch. Stand by all legs! Pip! little Pip! hurrah with your tambourine!</p>

            <p>PIP. (SULKY AND SLEEPY) Don't know where it is.</p>

            <p>FRENCH SAILOR. Beat thy belly, then, and wag thy ears. Jig it, men, I say; merry's the word; hurrah! Damn me, won't you dance? Form, now, Indian-file, and gallop into the double-shuffle? Throw yourselves! Legs! legs!</p>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {this.props.apiUser.map((a,index)=>{
                  return ( <tr key={a.id}>
                    <th scope="row">{index+1}</th>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                    <td>{a.username}</td>
                  </tr>)
                })
                }
              </tbody>
            </table>
            <p>Hoo-Hoo began to laugh.</p>

            <p>"The woodtick sucks the blood of the dog, but the germ, being so very  small, goes right into the blood of the body, and there it has  many children. In those days there would be as many as a billion&mdash;a  crab-shell, please&mdash;as many as that crab-shell in one man's body. We  called germs micro-organisms. When a few million, or a billion, of them  were in a man, in all the blood of a man, he was sick. These germs were  a disease. There were many different kinds of them&mdash;more different kinds  than there are grains of sand on this beach. We knew only a few of the  kinds. The micro-organic world was an invisible world, a world we could  not see, and we knew very little about it. Yet we did know something.  There was the bacillus anthracis; there was the micrococcus; there  was the Bacterium termo, and the Bacterium lactis&mdash;that's what  turns the goat milk sour even to this day, Hare-Lip; and there were  Schizomycetes without end. And there were many others...."</p>

          </div>
        </div>

      </div>
    )
  }
}

Dashboard.propTypes = {
  getUSer: PropTypes.func.isRequired
};

const mapStateToProps = state => {
 return {
     user:state.users.userData,
     apiUser:state.users.apiUser,
     response:state.users.response
  }
}


export default connect(mapStateToProps,{getUSer,getUserApi,getProfile})(Dashboard);