module Styles.FlexContainer exposing (flexContainer)

import Css exposing (..)
import Html exposing (div)
import Utils.Styled exposing (StyledComponent, styled)


flexContainer : StyledComponent
flexContainer =
    styled div
        [ displayFlex
        ]
