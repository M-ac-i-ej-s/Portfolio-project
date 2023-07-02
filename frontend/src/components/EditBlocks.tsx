import { useEffect, useState } from 'react'
import {getBlocks}  from '../services/block.service'
import {block} from '../types/block'
import '../styles/blockAdminComponent/blockAdmin.scss'
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postBlock, deleteBlock } from '../services/block.service';
import * as PropTypes from 'prop-types'
import Swal from 'sweetalert2'
import '../styles/userFormComponent/userForm.scss'

function EditBlocks({token}:PropTypes.InferProps<typeof BlockFormTypes>) {
    const [blocks, setBlocks] = useState<Array<null | block>>([]);

    useEffect(() => {
        getBlocks(setBlocks)
    },[])

    const config = {
        headers:{
          Authorization: `Bearer ${token}`
        }
    }

    const handleDelete = (id:string | undefined) => {
        deleteBlock(config, id)
        Swal.fire(
            'Good job!',
            'You deleted a block!',
            'success'
        )
        getBlocks(setBlocks)
    }
  return (
    <div>
      {blocks.map(el => {
        return (
            <div className='div__blocks_admin' key={el?._id}>
                <span>{el?.date}</span>
                <span>{el?.title}</span>
                <span>{el?.description}</span>
                <span>{el?.links}</span>
                <Button color='error' variant="contained" onClick={() => handleDelete(el?._id)}>Delete</Button>
            </div>
        )
      })}
      <Formik
        initialValues={{
            _id: '',
            date: '',
            title: '',
            description: '',
            links: ''
        }}
        onSubmit={async (values:block) => {
          console.log(values)
          postBlock(config, values)
          Swal.fire(
            'Good job!',
            'You added a block!',
            'success'
          )
          getBlocks(setBlocks)
        }}
      >
        {props => (
          <form className='form__form_box' onSubmit={props.handleSubmit} style={{'height':'360px', 'marginLeft':'100px'}}>
            <span>Add block</span>
            <TextField value={props.values.date} onChange={props.handleChange} onBlur={props.handleBlur} id="date" date="date" label="Date" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <TextField value={props.values.title} onChange={props.handleChange} onBlur={props.handleBlur} id="title" name="title" label="Title" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <TextField value={props.values.description} onChange={props.handleChange} onBlur={props.handleBlur} id="description" name="description" label="Description" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <TextField value={props.values.links} onChange={props.handleChange} onBlur={props.handleBlur} id="links" name="links" label="Links" variant="outlined" sx={{'marginBottom': '10px'}} focused/>
            <Button type="submit" variant="contained">Submit</Button>
          </form>
        )}
    </Formik>
    </div>
  )
}

const BlockFormTypes = {
    token: PropTypes.string
}

EditBlocks.propTypes = BlockFormTypes;

export default EditBlocks
