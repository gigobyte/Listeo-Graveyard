module Views.RegisterForm.Fields exposing (..)

import App.State.Msgs exposing (Msg)
import App.State.Root exposing (Model)
import Html exposing (Html)
import Utils.CreateFormField exposing (createFormField)
import Views.Shared.InputField as InputField exposing (view)


username : Model -> Html Msg
username model =
    let
        username_ fieldValue error =
            InputField.view { type_ = "text", placeholder = "Username", value = Maybe.withDefault "" fieldValue }
    in
    createFormField .registerForm .username model username_
