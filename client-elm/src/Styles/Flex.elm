module Styles.Flex exposing (flexContainer, flexContainerColumn)

import Css exposing (..)
import Html exposing (div)
import Utils.Styled exposing (StyledComponent, styled)


flexContainer : StyledComponent
flexContainer =
    styled div
        [ displayFlex
        ]


flexContainerColumn : StyledComponent
flexContainerColumn =
    styled flexContainer
        [ flexDirection column
        ]
