module App.State exposing (..)

import App.Rest exposing (fetchUser)
import App.Types exposing (Model, Msg)
import RemoteData exposing (..)


init : ( Model, Cmd Msg )
init =
    ( { user = RemoteData.Loading }
    , fetchUser
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        App.Types.FetchUser res ->
            ( { model | user = res }, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
