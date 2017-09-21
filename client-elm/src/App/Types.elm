module App.Types exposing (..)

import Models.User exposing (User)
import RemoteData exposing (WebData)


type Msg
    = FetchUser (WebData User)


type alias Model =
    { user : WebData User
    }
