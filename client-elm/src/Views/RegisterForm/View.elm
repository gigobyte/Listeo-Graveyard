module Views.RegisterForm.View exposing (view)

import App.State.Msgs exposing (Msg)
import App.State.Root exposing (Model)
import Css exposing (..)
import Html exposing (Html, div)
import Styles.Flex exposing (flexContainer, flexContainerColumn, flexItem)
import Utils.Styled exposing (StyledComponent, styled)
import Views.RegisterForm.Fields as Fields exposing (username)
import Views.Shared.Button as Button exposing (view)


container : StyledComponent
container =
    styled flexContainerColumn
        [ width (pct 100)
        ]


formContainer : StyledComponent
formContainer =
    styled flexContainerColumn
        [ justifyContent center
        ]


title : StyledComponent
title =
    styled div
        [ textAlign center
        , fontSize (px 30)
        ]


field : StyledComponent
field =
    styled flexContainer
        [ flex (int 1)
        , alignSelf center
        , width (pct 60)
        , paddingBottom (px 10)
        ]


submitButtonContainer : StyledComponent
submitButtonContainer =
    styled field
        [ paddingTop (px 20)
        , width (pct 20)
        ]


otherActionsContainer : StyledComponent
otherActionsContainer =
    styled field
        [ justifyContent spaceBetween
        ]


signIn : StyledComponent
signIn =
    styled (flexItem 1)
        [ cursor pointer
        ]


forgotPassword : StyledComponent
forgotPassword =
    styled div
        [ flex (int 1)
        , textAlign right
        , cursor pointer
        ]


view : Model -> Html Msg
view model =
    container []
        [ title [] [ Html.text "Join now!" ]
        , formContainer []
            [ field [] [ Fields.username model ]
            ]
        , otherActionsContainer []
            [ signIn [] [ Html.text "Sign In" ]
            , forgotPassword [] [ Html.text "Forgot password?" ]
            ]
        , submitButtonContainer []
            [ Button.view [] [ Html.text "Sign up" ]
            ]
        ]
