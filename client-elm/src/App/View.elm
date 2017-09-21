module App.View exposing (..)

import App.Types exposing (Model, Msg)
import Home.View exposing (..)
import Html exposing (Html, div, text)
import LandingPage.View exposing (..)
import RemoteData exposing (..)


view : Model -> Html Msg
view model =
    case model.user of
        RemoteData.Success _ ->
            Home.View.view model

        RemoteData.Failure _ ->
            LandingPage.View.view model

        _ ->
            text ""
