module Utils.StyledComponent exposing (..)

import Html exposing (..)


type alias StyledComponent a =
    List (Html a) -> Html a
