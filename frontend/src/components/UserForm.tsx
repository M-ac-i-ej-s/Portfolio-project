import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Loader from './Loader';
import * as PropTypes from 'prop-types'
import '../styles/userFormComponent/userForm.scss'
import {getUser, editUser} from '../services/user.service'
import {user} from '../types/user'
import { Formik } from 'formik';

function UserForm({token}:PropTypes.InferProps<typeof UserFormTypes>) {
  const [user, setUser] = useState<null | user>(null);

  useEffect(() => {
    getUser(setUser)
  },[])

  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }

  return (
    <> 
    {user ? (
      <Formik
        initialValues={{
          _id: user?._id,
          name: user?.name,
          surname: user?.surname,
          age: user?.age,
          description: user?.description,
          email: user?.email,
          github: user?.github,
          linkedIn: user?.linkedIn
        }}
        onSubmit={async (values:user) => {
          console.log(values)
          editUser(config, values)
        }}
      >
        {props => (
          <form className='form__form_box' onSubmit={props.handleSubmit}>
            <span>Edit user data</span>
            <TextField value={props.values.name} onChange={props.handleChange} onBlur={props.handleBlur} id="name" name="name" label="Name" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <TextField value={props.values.surname} onChange={props.handleChange} onBlur={props.handleBlur} id="surname" name="surname" label="Surname" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <TextField value={props.values.age} onChange={props.handleChange} onBlur={props.handleBlur} id="age" name="age" label="age" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <TextField value={props.values.description} onChange={props.handleChange} onBlur={props.handleBlur} id="description" name="description" label="description" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <TextField value={props.values.email} onChange={props.handleChange} onBlur={props.handleBlur} id="email" name="email" label="email" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <TextField value={props.values.github} onChange={props.handleChange} onBlur={props.handleBlur} id="github" name="github" label="github" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <TextField value={props.values.linkedIn} onChange={props.handleChange} onBlur={props.handleBlur} id="linkedIn" name="linkedIn" label="linkedIn" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <Button type="submit" variant="contained">Submit</Button>
          </form>
        )}
    </Formik>
    ) : <Loader/>}
    </>
  )
}

const UserFormTypes = {
    token: PropTypes.string
}

UserForm.propTypes = UserFormTypes

export default UserForm
