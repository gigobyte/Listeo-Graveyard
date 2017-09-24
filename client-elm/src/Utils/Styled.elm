module Utils.Styled exposing (StyledComponent, styled)

import App.State.Msgs exposing (Msg)
import Css exposing (Style, asPairs)
import Html exposing (Attribute, Html)
import Html.Attributes exposing (style)


styled : (List (Attribute msg) -> a) -> List Style -> List (Attribute msg) -> a
styled container css props =
    container (props ++ [ (asPairs >> style) css ])


type alias StyledComponent =
    List (Attribute Msg) -> List (Html Msg) -> Html Msg
