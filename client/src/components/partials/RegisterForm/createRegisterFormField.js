import * as actions from '../../../store/modules/registerForm'
import createFormField from '../../../utils/createFormField'
import validateRegisterForm from '../../../utils/validateRegisterForm'

export default createFormField(actions, validateRegisterForm, 'registerForm')