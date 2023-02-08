import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import { Button} from '@mui/material';
import * as Yup from 'yup';

function Login() {
    const initialValues={
        email:'',
        password:''
    }
    const  validationSchema= Yup.object({
        email:Yup.string().email('invalid email format')
        .required('User email is Required'),
        password:Yup.string().required('Required')
    })
    const onSubmit = (values,onSubmitProps) =>{
        onSubmitProps.setSubmitting(false);
    }
  return (
    <div>
         <h1>Sign In</h1>
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
       {formik =>{
        return(
        <Form>
            <div className='form-control' >
                <label htmlFor='email'>Email Address</label>
                <Field type="text" id='email' name='email'placeholder='Enter email' />
                <ErrorMessage name='email' >
                    {errorMsg => <div className="error" >{errorMsg}</div>}
                    </ErrorMessage>
            </div>
            <div className='form-control' >
                <label htmlFor='password'>Password</label>
                <Field type="text" id='password' name='password'placeholder='Enter password' />
                <ErrorMessage name='password' >
                {errorMsg => <div className="error" >{errorMsg}</div>}
                    </ErrorMessage>
            </div>
            <div className='form-control' >
                <span><Field type="checkbox"  name='rem' />
                <label htmlFor='rem'>Remember me</label></span>
                <ErrorMessage name='rem' />
            </div>
            <div className='form-control' >
            <Button type="submit" disabled={ !formik.isValid || formik.isSubmitting} variant="contained" color="primary"  size='large'>Submit</Button>
       </div>
       <div className='forgot'>
        Forgot password?
       </div>
        </Form>
        )
        }
    }
        
    </Formik>
    </div>
  )
}

export default Login