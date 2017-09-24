module Views.LandingPage.View exposing (view)

import App.State.Msgs exposing (Msg)
import App.State.Root exposing (Model)
import Css exposing (..)
import Html exposing (Html, div)
import Styles.Flex exposing (flexContainer, flexContainerColumn)
import Utils.Styled exposing (StyledComponent, styled)
import Views.RegisterForm.View as RegisterForm exposing (view)


logo : StyledComponent
logo =
    styled div
        [ fontSize (px 48)
        ]


container : StyledComponent
container =
    styled flexContainerColumn
        [ backgroundImage (url "/background.png")
        , backgroundSize cover
        , padding (px 50)
        , color (hex "fff")
        , height (pct 100)
        , boxSizing borderBox
        ]


content : StyledComponent
content =
    styled flexContainer
        [ paddingTop (px 130)
        ]


leftSide : StyledComponent
leftSide =
    styled flexContainerColumn
        [ flex (int 1)
        , paddingTop (px 100)
        ]


heading : StyledComponent
heading =
    styled div
        [ fontSize (px 30)
        ]


description : StyledComponent
description =
    styled div
        [ paddingTop (px 30) ]


rightSide : StyledComponent
rightSide =
    styled flexContainer
        [ flex (int 1)
        , paddingRight (px 30)
        ]


view : Model -> Html Msg
view model =
    container []
        [ logo [] [ Html.text "Listeo" ]
        , content []
            [ leftSide []
                [ heading []
                    [ Html.text "Listeo is a platform for creating and sharing video playlists"
                    ]
                , description []
                    [ Html.text "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer\n                        took a galley of type and scrambled it to make a type specimen book.\n                        It has survived not only five centuries, but also the leap into electronic typesetting,\n                        remaining essentially unchanged."
                    ]
                ]
            , rightSide []
                [ RegisterForm.view model
                ]
            ]
        ]
