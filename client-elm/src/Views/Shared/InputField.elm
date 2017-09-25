module Views.Shared.InputField exposing (..)

import App.State.Msgs exposing (Msg)
import Css exposing (..)
import Html exposing (Html, div, hr, input)
import Html.Attributes exposing (type_, value)
import Utils.Styled exposing (StyledComponent, styled)


input_ : StyledComponent
input_ =
    styled input
        [ padding zero
        , position relative
        , width (pct 100)
        , backgroundColor (rgba 0 0 0 0)
        , color (rgba 256 256 256 0.87)
        , cursor inherit
        , height (pct 100)
        ]


wrapper : StyledComponent
wrapper =
    styled div
        [ fontSize (px 16)
        , lineHeight (px 24)
        , height (px 48)
        , display inlineBlock
        , position relative
        , backgroundColor transparent
        , width (pct 100)
        ]


border : StyledComponent
border =
    styled hr
        [ borderWidth (px 1)
        , borderStyle solid
        , borderColor (rgba 256 256 256 0.3)
        , bottom (px 8)
        , boxSizing contentBox
        , margin zero
        , position absolute
        , width (pct 100)
        ]


view : { b | placeholder : a, type_ : String, value : String } -> Html Msg
view { type_, placeholder, value } =
    wrapper []
        [ input_ [ Html.Attributes.type_ type_, Html.Attributes.value value ] []
        , div []
            [ border [] []
            ]
        ]
