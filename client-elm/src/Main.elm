module Main exposing (..)

import Html exposing (..)
import App.Types exposing (Model, Msg)
import App.View exposing (view)
import App.State exposing (init, update, subscriptions)


main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
