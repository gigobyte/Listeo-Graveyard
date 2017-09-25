module Views.Shared.Button exposing (view)

import App.State.Msgs exposing (Msg)
import Css exposing (..)
import Html exposing (Html, button)
import Html.Attributes exposing (class)
import Utils.Styled exposing (StyledComponent, styled)


button_ : StyledComponent
button_ =
    styled button
        [ boxSizing contentBox
        , borderRadius (px 15)
        , height (px 30)
        , backgroundColor transparent
        , border3 (px 1) solid (rgba 256 256 256 0.87)
        , color (hex "fff")
        , width (pct 100)
        , padding (px 3)
        , cursor pointer
        ]


view : List (Html.Attribute Msg) -> List (Html Msg) -> Html Msg
view props =
    button_ (props ++ [ Html.Attributes.class "btn" ])
