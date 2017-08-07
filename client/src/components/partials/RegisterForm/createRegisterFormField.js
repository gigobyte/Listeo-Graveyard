import { __ } from 'ramda'
import * as actions from '../../../store/modules/registerForm'
import createFormField from '../../../utils/createFormField'
import validateRegisterForm from '../../../utils/validateRegisterForm'

export default createFormField('registerForm', __, actions, validateRegisterForm, __)