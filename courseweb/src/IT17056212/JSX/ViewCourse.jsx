import React from 'react';
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import "../CSS/MyCourses.css";
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import "bootstrap/dist/css/bootstrap-grid.min.css";


import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';

export default class MyCourses extends React.Component {
    constructor() {
        super();

        this.state = {
            courseid: '',
            userid: '',
        }

      ;
        let result4 = "SE3040";//= localStorage.getItem("course");
        //result4 = JSON.parse(result4);

        let cid=result4;
        this.ccid = cid;

        let result5 = "aaa@gmail.com";//= localStorage.getItem("course");
        //result4 = JSON.parse(result4);

        let uid=result5;
        this.uuid = uid;

        this.setState({courseid:cid, userid:uid})
        alert(cid+" . "+uid)
    }

    render() {
        return (
            <div style={{marginTop: '6%', marginBottom: '25%'}}>
                <div>Hi {this.ccid} {this.uuid}</div>
            </div>
        );
    }
}


/*class Type extends React.Component {


    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        this.props.onChange('types', value);
        // console.log(this.props.onChange);

    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur('types', true);
        // console.log(this.props.onBlur);

    };


    render() {
        return (
            <div>

                <Select
                    id="color"
                    multi={true}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                />
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{color: 'red', marginTop: '.5rem'}}>{this.props.error}</div>
                )}
            </div>
        );
    }
}*/

