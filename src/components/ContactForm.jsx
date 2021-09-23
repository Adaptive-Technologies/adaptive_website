import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { controlProps } from '../modules/adaptiveHelper'
import { Typography, TextField, Button, Box } from '@mui/material'
import useStyles from '../theme/views/contactUs.theme'

const ContactForm = () => {
  const classes = useStyles()
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
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h3'>Send us a message</Typography>
      <TextField {...controlProps(register, errors, labels[0])} />
      <TextField {...controlProps(register, errors, labels[1])} />
      <TextField {...controlProps(register, errors, labels[2])} multiline />
      <Button variant='contained' fullWidth type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default ContactForm
