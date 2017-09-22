module Common.InputField exposing (..)

import Html exposing (Html, div, hr, input)
import Html.Attributes exposing (..)
import Utils.StyledComponent exposing (..)


input_ : List (Html.Attribute msg) -> StyledComponent msg
input_ props =
    input
        (props
            ++ [ style
                    [ ( "padding", "0" )
                    , ( "position", "relative" )
                    , ( "width", "100%" )
                    , ( "border", "medium none" )
                    , ( "outline", "medium none" )
                    , ( "background-color", "rgba(0, 0, 0, 0)" )
                    , ( "color", "rgba(256, 256, 256, 0.87)" )
                    , ( "cursor", "inherit" )
                    , ( "font", "inherit" )
                    , ( "height", "100%" )
                    ]
               ]
        )


wrapper : StyledComponent msg
wrapper =
    div
        [ style
            [ ( "font-size", "16px" )
            , ( "line-height", "24px" )
            , ( "height", "48px" )
            , ( "display", "inline-block" )
            , ( "position", "relative" )
            , ( "background-color", "transparent" )
            , ( "width", "100%" )
            ]
        ]


border : StyledComponent msg
border =
    hr
        [ style
            [ ( "border-width", "medium medium 1px" )
            , ( "border-style", "none none solid" )
            , ( "border-color", "rgba(256, 256, 256, 0.3)" )
            , ( "bottom", "8px" )
            , ( "box-sizing", "content-box" )
            , ( "margin", "0" )
            , ( "position", "absolute" )
            , ( "width", "100%" )
            ]
        ]


view : List (Html.Attribute msg) -> Html msg
view props =
    wrapper
        [ input_ props []
        , div []
            [ border []
            ]
        ]
