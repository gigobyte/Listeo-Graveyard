module LandingPage.View exposing (..)

import App.Types exposing (Model, Msg)
import Html exposing (Html, div, text)
import Html.Attributes exposing (..)
import Utils.StyledComponent exposing (..)


logo : StyledComponent Msg
logo =
    div
        [ style
            [ ( "font-size", "48px" )
            ]
        ]


container : StyledComponent Msg
container =
    div
        [ style
            [ ( "display", "flex" )
            , ( "flex-direction", "column" )
            , ( "background", "url(/background.png)" )
            , ( "background-size", "cover" )
            , ( "padding", "50px" )
            , ( "color", "white" )
            , ( "height", "100%" )
            , ( "box-sizing", "border-box" )
            ]
        ]


content : StyledComponent Msg
content =
    div
        [ style
            [ ( "display", "flex" )
            , ( "padding-top", "130px" )
            ]
        ]


leftSide : StyledComponent Msg
leftSide =
    div
        [ style
            [ ( "display", "flex" )
            , ( "flex", "1" )
            , ( "flex-direction", "column" )
            , ( "padding-top", "100px" )
            ]
        ]


heading : StyledComponent Msg
heading =
    div
        [ style
            [ ( "font-size", "30px" )
            ]
        ]


description : StyledComponent Msg
description =
    div
        [ style
            [ ( "padding-top", "30px" )
            ]
        ]


rightSide : StyledComponent Msg
rightSide =
    div
        [ style
            [ ( "display", "flex" )
            , ( "flex", "1" )
            , ( "padding-right", "30px" )
            ]
        ]



-- const LandingPage = () =>
--     <Container>
--         <Logo>Listeo</Logo>
--         <Content>
--             <LeftSide>
--                 <Heading>
--                     Listeo is a platform for creating and sharing video playlists
--                 </Heading>
--                 <Description>
--                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
--                      Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer
--                      took a galley of type and scrambled it to make a type specimen book.
--                      It has survived not only five centuries, but also the leap into electronic typesetting,
--                      remaining essentially unchanged.
--                  </Description>
--             </LeftSide>
--             <RightSide>
--                 <RegisterForm />
--             </RightSide>
--         </Content>
--     </Container>


view : Model -> Html Msg
view model =
    container
        [ logo [ text "Listeo " ]
        , content
            [ leftSide
                [ heading
                    [ text "Listeo is a platform for creating and sharing video playlists"
                    ]
                , description
                    [ text "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer\n                        took a galley of type and scrambled it to make a type specimen book.\n                        It has survived not only five centuries, but also the leap into electronic typesetting,\n                        remaining essentially unchanged."
                    ]
                ]
            , rightSide []
            ]
        ]
