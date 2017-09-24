module App.State.RegisterForm exposing (RegisterFormModel, initRegisterForm)


type alias RegisterFormFieldValues =
    { username : Maybe String
    , password : Maybe String
    , email : Maybe String
    }


type alias RegisterFormModel =
    { values : RegisterFormFieldValues
    , clientErrors : RegisterFormFieldValues
    , serverErrors : RegisterFormFieldValues
    }


initRegisterFormFieldValues : RegisterFormFieldValues
initRegisterFormFieldValues =
    { username = Nothing
    , password = Nothing
    , email = Nothing
    }


initRegisterForm : RegisterFormModel
initRegisterForm =
    { values = initRegisterFormFieldValues
    , clientErrors = initRegisterFormFieldValues
    , serverErrors = initRegisterFormFieldValues
    }
