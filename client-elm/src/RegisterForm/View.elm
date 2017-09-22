module RegisterForm.View exposing (..)

import App.Types exposing (Model, Msg)
import Common.Button exposing (..)
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (..)
import RegisterForm.Username exposing (..)
import Utils.StyledComponent exposing (..)


container : StyledComponent Msg
container =
    div
        [ style
            [ ( "display", "flex" )
            , ( "flex-direction", "column" )
            , ( "width", "100%" )
            ]
        ]


formContainer : StyledComponent Msg
formContainer =
    div
        [ style
            [ ( "display", "flex" )
            , ( "flex-direction", "column" )
            , ( "justify-content", "center" )
            ]
        ]


title : StyledComponent Msg
title =
    div
        [ style
            [ ( "text-align", "center" )
            , ( "font-size", "30px" )
            ]
        ]


fieldStyle : Style
fieldStyle =
    [ ( "display", "flex" )
    , ( "flex", "1" )
    , ( "align-self", "center" )
    , ( "width", "60%" )
    , ( "padding-bottom", "10px" )
    ]


field : StyledComponent Msg
field =
    div
        [ style fieldStyle
        ]


submitButtonContainer : StyledComponent Msg
submitButtonContainer =
    div
        [ style
            (fieldStyle
                ++ [ ( "padding-top", "20px" )
                   , ( "width", "20%" )
                   ]
            )
        ]


otherActionsContainer : StyledComponent Msg
otherActionsContainer =
    div
        [ style
            (fieldStyle
                ++ [ ( "justify-content", "space-between" )
                   ]
            )
        ]


signIn : StyledComponent Msg
signIn =
    div
        [ style
            [ ( "flex", "1" )
            , ( "cursor", "pointer" )
            ]
        ]


forgotPassword : StyledComponent Msg
forgotPassword =
    div
        [ style
            [ ( "flex", "1" )
            , ( "text-align", "right" )
            , ( "cursor", "pointer" )
            ]
        ]


view : Model -> Html Msg
view model =
    container
        [ title [ text "Join now!" ]
        , formContainer
            [ field [ RegisterForm.Username.view model ]
            , otherActionsContainer
                [ signIn [ text "Sign In" ]
                , forgotPassword [ text " Forgot password?" ]
                ]
            , submitButtonContainer
                [ Common.Button.view [] [ text "Sign up" ]
                ]
            ]
        ]
