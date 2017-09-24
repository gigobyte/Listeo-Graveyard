module Styles.Flex exposing (flexContainer, flexContainerColumn, flexItem)

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


flexItem : Int -> StyledComponent
flexItem size =
    styled div
        [ flex (int size)
        ]
