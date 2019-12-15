import React, { Component } from 'react';

export default class FormDataComponent extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message:''
        }
          
    }


    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value });
    }
     
    onSubmit(e) {
        e.preventDefault()
        const name = this.state.name;
        const email = this.state.email;
        const phone = this.state.phone;
        if(name != " " && email != "" && phone != ""){
        this.setState({
            name: '',
            email: '',
            phone: '',
            message:'Data saved sucessfully.'
        })
          let flash =  document.getElementsByClassName("alert-success")[0];
          flash.style.display = "block";
          setTimeout(function(){ flash.setAttribute(
          "style", "display:none;transition: display 4s ease-in;"); }, 5000);
        }
         else if(name != " " || email != "" || phone != ""){
            this.setState({
              message:"Fill the required form field"
            })
             let flash =  document.getElementsByClassName("alert-danger")[0];
             flash.style.display = "block";
             setTimeout(function(){ flash.setAttribute(
             "style", "display:none;transition: display 4s ease-in;"); }, 5000);
         }
          
    }
    

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            });
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container">
                    <div className="alert alert-success alert-dismissible" id="success">{this.state.message}
                        </div>
                          <div className="alert alert-danger alert-dismissible" id="success">{this.state.message}
                          </div>
                        <center><h2>Contact Us!</h2></center>
                   <form className="offset-0 offset-sm-2 col-sm-12 offset-md-2 col-md-12 offset-xl-3 col-xl-11 col-md-12" onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <div className="form-row">
                            <label className="col-xs-12 col-sm-12">Name</label>
                                <input type="text" className="form-control col-12 col-sm-8 col-md-8 col-xl-7" value={this.state.name} onChange={this.onChangeName}  />
                          </div>
                      </div>
                      <div className="form-group">
                        <div className="form-row">
                            <label className="col-xs-12 col-sm-12">Email</label>
                                <input type="email" className="form-control col-12 col-sm-8 col-md-8 col-xl-7" value={this.state.email} onChange={this.onChangeEmail} />
                          </div>
                      </div>
                      <div className="form-group">
                        <div className="form-row"><label className="col-xs-12 col-sm-12">Phone</label>
                            <input type="tel" className="form-control col-12 col-sm-8 col-md-8 col-xl-7" value={this.state.phone} onChange={this.onChangePhone} pattern="[0-9]{10}" /></div>
                          </div>
                      <button type="submit" className="btn btn-primary col-7 col-sm-5 col-md-3  ">Submit</button>
                  </form>
            </div>
        )
    }
}
