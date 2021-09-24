import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { controlProps } from '../modules/adaptiveHelper'
import { TextField, Button } from '@mui/material'

const ContactForm = () => {
  const shape = {
    name: yup.string().required,
    email: yup.string().required,
    phone: yup.number().required,
    message: yup.string().required,
  }
  const schema = yup.object().shape(shape)
  const labels = Object.keys(shape)

  const {
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  return (
    <form
      data-cy='contact-us-form'
      data-netlify='true'
      action='/success=true'
      method='POST'
      name='website-contact'>
      <input type='hidden' name='form-name' value='website-contact' />
      <TextField
        data-cy='contact-us-form-name'
        {...controlProps(register, errors, labels[0])}
      />
      <TextField
        data-cy='contact-us-form-email'
        {...controlProps(register, errors, labels[1])}
      />
      <TextField
        data-cy='contact-us-form-phone'
        {...controlProps(register, errors, labels[2])}
      />
      <TextField
        data-cy='contact-us-form-message'
        {...controlProps(register, errors, labels[3])}
        multiline
      />
      <Button special='gradient' fullWidth type='submit' data-cy='contact-us-form-submit'>
        send
      </Button>
    </form>
  )
}

export default ContactForm
