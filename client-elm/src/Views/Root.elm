module Views.Root exposing (view)

import App.State.Msgs exposing (Msg)
import App.State.Root exposing (Model)
import Html exposing (Html, text)
import RemoteData exposing (RemoteData(Failure, Success))
import Views.Home.View as Home
import Views.LandingPage.View as LandingPage


view : Model -> Html Msg
view model =
    case model.auth.user of
        Success _ ->
            Home.view model

        Failure _ ->
            LandingPage.view model

        _ ->
            text ""
