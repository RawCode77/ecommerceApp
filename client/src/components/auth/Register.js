import { message } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
// import {withRouter} from "react-router-dom";
import { register } from "../../actions/authActions";
// import { addToCart } from "../../actions/cartActions";
// import { decodeUser } from "../../util";
import Input from "../general/input";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value});
  }

 

  componentDidUpdate(prevProps) {
    // const { auth, history, location } = this.props;
    const search = this.props.location.search;
    let split = search.split("redirect=");
    const hasRirect = search.includes("redirect=");
    split = split[split.length - 1];
    console.log(split);
    if (prevProps && prevProps.errors.length > 0) {
      prevProps.errors.forEach((error) => {
        message.error(error.msg);
      });
    }

    if (prevProps.auth.isAuthenticated) {
      if (split && hasRirect) {
        if (
          split === "/cart" &&
          localStorage.getItem("token") &&
          localStorage.getItem("products")
        ) {
          // const userId = decodeUser().user.id;
          // const cartProducts = JSON.parse(localStorage.getItem("products"));
          // const context = { products: cartProducts, userId };
          // this.props.addToCart(context);
          // localStorage.removeItem("products");
        }
        this.props.history.push(split);
      } else {
        message.success("Thank you for signing up");
        setTimeout(() => this.props.history.push("/"), 3000);
      }
    }
  }

  // onChange(e) {
  //   console.log(e.target.name);
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  onSubmit() {
    let split = this.props.location.search.split("?role=");
    split = split[split.length - 1].split("&");
    const role = split[0];

    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
      role,
    };
    if (password === this.state.password2) {
      this.props.register(newUser);
    } else {
      message.error("Passwords must match");
    }
  }

  render() {
    const { name, password, password2, email } = this.state;
    return (
      <div className="container">
        <h1 className="large text-primary">Register</h1>
        <p className="lead">
          <i className="fas fa-user"></i>Create Your Account
        </p>
        <div className="form">
          <Input
            name="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary" onClick={this.onSubmit}>
          {" "}
          Register
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
