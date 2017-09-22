module Common.Button exposing (..)

import Html exposing (Html, button)
import Html.Attributes exposing (..)


view : List (Html.Attribute msg) -> List (Html msg) -> Html msg
view props children =
    button
        (props
            ++ [ style
                    [ ( "box-sizing", "content-box" )
                    , ( "border-radius", "15px" )
                    , ( "height", "30px" )
                    , ( "background-color", "transparent" )
                    , ( "border", "1px solid rgba(256, 256, 256, 0.87)" )
                    , ( "color", "white" )
                    , ( "width", "100%" )
                    , ( "padding", "3px" )
                    , ( "cursor", "pointer" )
                    ]
               ]
            ++ [ class "btn" ]
        )
        children
