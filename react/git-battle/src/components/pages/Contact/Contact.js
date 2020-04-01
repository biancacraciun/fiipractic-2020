import React, { Component } from 'react'; 
import './Contact.scss';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            touched: {},
            formSubmitted: false
        }
    }

    atChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;

        this.setState({
            fields: fields
        })
    }

    atTouch = (e) => {
        let touched = this.state.touched;

        if (e.target.name && touched[e.target.name] !== true) {
            touched[e.target.name] = true;
            this.setState({
                touched: touched
            })
        }
    }

    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["fname"]) {

            formIsValid = false;
            errors["fname"] = "Please enter your first name!"
        }

        if(typeof fields["fname"] !== "undefined") {
            if(!fields["fname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["fname"] = "Please enter alphabet characters only.";
            }
        }

        if(!fields["lname"]) {
            formIsValid = false;
            errors["lname"] = "Please enter your last name!"
        }

        if(typeof fields["lname"] !== "undefined") {
            if(!fields["lname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["lname"] = "Please enter alphabet characters only.";
            }
        }

        if(!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your e-mail address!"
        }

        if(typeof fields["email"] !== "undefined") {
            const validation = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if(!validation.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "Please enter valid e-mail address!";
            }
        }

        if(!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Please enter your phone no.!";
        }

        if(typeof fields["phone"] !== "undefined") {
            if(!fields["phone"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["phone"] = "Please enter valide phone no.!"
            }
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }

    submittedForm = (e) => {
        e.preventDefault();

        this.setState({
            formSubmitted: true
        });

        if(this.validateForm()) {
            let fields = {};
            fields["fname"] = "";
            fields["lname"] = "";
            fields["email"] = "";
            fields["phone"] = "";

            this.setState({
                formSubmitted: false
            });
            alert("Form submitted! We will be contacting you soon! Thank you!")
        }
    }

    render() {
        return (
            <form 
                method="post"
                onSubmit={this.submittedForm}
                className="contact"
            >
                <h3>Contact us!</h3>

                <div id="subject">
                    <label htmlFor="subject">Subject:</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        placeholder="E.g.: Job"
                        pattern="[A-Za-z]*"
                    />
                </div>

                <div id="fname">
                    <label htmlFor="fname">First Name:</label>
                    <input 
                        type="text" 
                        id="fname" 
                        name="fname" 
                        value={this.state.fields.fname}
                        onChange={ (e) => {this.atChange(e); this.validateForm()} }
                        onBlur={ (e) => {this.atTouch(e); this.validateForm()} }
                    />
                    {
                        (this.state.formSubmitted || this.state.touched.fname) ? 
                        <div className="error__message">{this.state.errors.fname}</div> : " "
                    }
                </div>

                <div id="lname">
                    <label htmlFor="lname">Last Name:</label>
                    <input 
                        type="text" 
                        id="lname" 
                        name="lname" 
                        value={this.state.fields.lname}
                        onChange={ (e) => {this.atChange(e); this.validateForm()} }
                        onBlur={ (e) => {this.atTouch(e); this.validateForm()} }
                    />
                    {
                        (this.state.formSubmitted || this.state.touched.lname) ? 
                        <div className="error__message">{this.state.errors.lname}</div> : " "
                    }
                </div>

                <div id="email">
                    <label htmlFor="email">Enter your email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="someone@example.com"
                        value={this.state.fields.email}
                        onChange={ (e) => {this.atChange(e); this.validateForm()} }
                        onBlur={ (e) => {this.atTouch(e); this.validateForm()}}
                    />
                    {
                        (this.state.formSubmitted || this.state.touched.email) ?
                        <div className="error__message">{this.state.errors.email}</div> : " "
                    }
                </div>

                <div id="phone">
                    <label htmlFor="phone">Enter your phone number:</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        pattern="[0-9]{10}"
                        value={this.state.fields.phone}
                        onChange={ (e) => {this.atChange(e); this.validateForm()} }
                        onBlur={ (e) => {this.atTouch(e); this.validateForm()} }
                    />
                    {
                        (this.state.formSubmitted || this.state.touched.phone) ?
                        <div className="error__message">{this.state.errors.phone}</div> : " "
                    }
                </div>

                <div id="file">
                    <button className="btn">Upload file</button>
                    <label htmlFor="file">Attach your file</label>
                    <input type="file" name="file" />
                </div>

                <div id="more">
                    <label htmlFor="more">Tell me more:</label>
                    <textarea id="more" rows="4" cols="40" placeholder="Tell me more"></textarea>
                </div>

                <input type="submit" value="Submit" />
            </form>
        )
    }
};

export default ContactForm;