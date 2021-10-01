import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { controlProps } from '../modules/adaptiveHelper'
import { TextField, Button, Typography, Box } from '@mui/material'
import useStyles from '../theme/views/contactUs.theme'

const ContactForm = () => {
  const classes = useStyles()
  const shape = {
    name: yup.string().required,
    email: yup.string().email().required,
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
      <Box className={classes.buttonForm}>
        <Button special='gradient' type='submit'>
          <Typography variant='sendMsgButton' data-cy='contact-us-form-submit'>
            {'{ send message }'}
          </Typography>
        </Button>
      </Box>
    </form>
  )
}

export default ContactForm
