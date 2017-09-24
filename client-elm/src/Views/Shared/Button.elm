module Views.Shared.Button exposing (view)

-- import Html.Attributes exposing (..)

import Css exposing (..)
import Html exposing (Html, button)
import Utils.Styled exposing (StyledComponent, styled)


view : StyledComponent
view =
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
