module RegisterForm.Username exposing (..)

import Common.InputField exposing (..)
import Html.Attributes exposing (..)


view model =
    Common.InputField.view
        [ placeholder "Username"
        , value model.registerForm.values.username
        ]
