module App.State.Msgs exposing (Msg(FetchUser))

import Models.User exposing (User)
import RemoteData exposing (WebData)


type Msg
    = FetchUser (WebData User)
