module Utils.ValidateRegisterForm exposing (validateRegisterForm)

import App.State.RegisterForm exposing (RegisterFormFieldValues)
import Utils.ValidationUtils exposing (includes, minlength, pattern, required, validate)


validateRegisterForm : RegisterFormFieldValues -> RegisterFormFieldValues
validateRegisterForm form =
    { username =
        validate form.username
            [ ( required, "Username is required" )
            , ( pattern "^[a-zA-Z0-9]{3,}$", "Username should not contain special characters and must be at least 3 characters long" )
            ]
    , password =
        validate form.password
            [ ( required, "Password is required" )
            , ( minlength 6, "Passwords should be at least 6 characters long" )
            ]
    , email =
        validate form.email
            [ ( required, "Email is required" )
            , ( includes "@", "Invalid email" )
            ]
    }
