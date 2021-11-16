import { Formik, Form } from 'formik';
import React from 'react';

function Validaion_Form() {
    return (
        <Formik
        initialValues={{
            firstname : '',
            lastname : '',
            email: '',
            password: '',
            confirmpassword: ''
        }}
        >
            {/* {formik => ()} */}
        </Formik>
    )
}

export default Validaion_Form
