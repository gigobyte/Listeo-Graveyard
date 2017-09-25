module Main exposing (main)

import App.State.Msgs exposing (Msg)
import App.State.Root exposing (Model, init, subscriptions, update)
import Html exposing (program)
import Views.Root exposing (view)


main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
