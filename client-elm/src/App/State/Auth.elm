module App.State.Auth exposing (AuthModel, initAuth, setUser)

import Models.User exposing (User)
import RemoteData exposing (RemoteData(Loading), WebData)


type alias AuthModel =
    { jwt : Maybe String
    , user : WebData User
    }


initAuth : AuthModel
initAuth =
    { user = Loading
    , jwt = Nothing
    }


setUser : AuthModel -> WebData User -> AuthModel
setUser model res =
    { model | user = res }
