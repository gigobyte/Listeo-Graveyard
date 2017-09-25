module App.State.Root exposing (Model, init, subscriptions, update)

import App.Rest exposing (fetchUser)
import App.State.Auth exposing (AuthModel, initAuth, setUser)
import App.State.Msgs exposing (Msg(FetchUser))
import App.State.RegisterForm exposing (RegisterFormModel, initRegisterForm)


type alias Model =
    { auth : AuthModel
    , registerForm : RegisterFormModel
    }


initialModel : Model
initialModel =
    { auth = initAuth
    , registerForm = initRegisterForm
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, fetchUser )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchUser res ->
            ( { model | auth = setUser model.auth res }, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
