import React from 'react';
import { Button, Col, Form } from "react-bootstrap";
import "../IT17056212/CSS/AddCourse.css";
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import "bootstrap/dist/css/bootstrap-grid.min.css";


import "react-datepicker/dist/react-datepicker.css";


const schema = yup.object().shape({
    cid: yup.string().required('Required'),
    cname: yup.string().required('Required'),
    enrollkey: yup.string().required('Required'),



});


const chsubmit = function (val) {
    // console.log("sachin");
    // console.log(val);

    let result = localStorage.getItem("user");
    result = JSON.parse(result);

    if (!(result == null || result == undefined)) {
        val.addby = result._id;
        val.editby = result._id;
    } else {
        val.addby = "self";
        val.editby = "self";
    }


    val.adddate = new Date().toLocaleString();
    val.editdate = val.adddate;

    val.accepted = 'no';
    // console.log(val);
    let ur = "http://localhost:5000/course/" + val.cid;


    try {

        axios.get(ur).then(res => {
            console.log(res);
            let coursedata = res.data.data[0];

            if (coursedata == null) {
                axios.post('http://localhost:5000/course/add', val)
                    .then(res => alert('Added Successfully'));
                window.location.reload();
            } else {

                alert("The relavant Course ID already exists.");
                window.location.reload();
            }

        }).catch((error) => {
            // console.log('v');
            console.log(error.response);
            alert("Details are incorrect");
            window.location.reload();
        });

    } catch (e) {
        // console.log('c');
        console.log(e);
    }


};

export default function AddAssignment() {


    return (
        <div>

            <Formik
                validationSchema={schema}
                onSubmit={(values, { setSubmitting, resetForm }) => {


                    setTimeout(() => {

                        chsubmit(values);
                        resetForm({});
                        setSubmitting(true);
                    }, 500);
                }}
                initialValues={{
                    iid: 'krishani@sliit.lk',
                    cid: 'SE3040',
                    cname: 'Application Frameworks',
                    aid: 'Assignment 1',
                    description: 'Final Report Submition',
                    duedate: new Date(),
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    setFieldValue,
                    setFieldTouched,
                    touched,
                    isValid,
                    errors,
                    resetForm,
                }) => (
                        <Form noValidate onSubmit={handleSubmit}
                            style={{ paddingBottom: '3%', paddingTop: '3%', paddingLeft: '3%', paddingRight: '3%' }}>
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="validationFormik01">
                                    <Form.Label>Instructer ID</Form.Label>
                                    <Form.Control
                                        disabled
                                        type="text"
                                        name="uid"
                                        value={values.iid}
                                        onChange={handleChange}
                                        isValid={touched.uid && !errors.uid}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik02">
                                    <Form.Label>Course ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="cid"
                                        value={values.cid}
                                        onChange={handleChange}
                                        isValid={touched.uid && !errors.cid}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik03">
                                    <Form.Label>Course Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="cname"
                                        value={values.cname}
                                        onChange={handleChange}
                                        isValid={touched.cid && !errors.cname}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik04">
                                    <Form.Label>Assignment ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="aid"
                                        value={values.aid}
                                        onChange={handleChange}
                                        isValid={touched.cname && !errors.aid}
                                    />

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik05">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="description"
                                        value={values.enrollkey}
                                        onChange={handleChange}
                                        isValid={touched.aid && !errors.description}
                                    />

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik06">
                                    <Form.Label>DueDate</Form.Label><br/>
                                    <Form.Control
                                        type="date"
                                        selected={new Date()}
                                        name="duedate"
                                        value={values.duedate}
                                        minDate={new Date()}
                                        onChange={handleChange}
                                        isValid={touched.description && !errors.duedate}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <Button type="reset" style={{ width: '40%', margin: '10px'}}>Reset form</Button>
                                <Button type="submit" style={{ width: '40%' }}>Submit form</Button>
                            </div>
                        </Form>

                    )}

            </Formik>
        </div>
    );
}


