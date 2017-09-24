module Views.Home.View exposing (view)

import App.State.Msgs exposing (Msg)
import App.State.Root exposing (Model)
import Html exposing (Html, div, text)


view : Model -> Html Msg
view model =
    div [] [ text "Home" ]
