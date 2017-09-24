module App.Rest exposing (fetchUser)

import App.State.Msgs exposing (Msg(FetchUser))
import Http
import Json.Decode as Decode
import Json.Decode.Pipeline exposing (decode, required)
import Models.User exposing (User)
import RemoteData


root : String -> String
root =
    (++) "http://localhost:8081/"


fetchUser : Cmd Msg
fetchUser =
    Http.get (root "auth/me") userDecoder
        |> RemoteData.sendRequest
        |> Cmd.map FetchUser


userDecoder : Decode.Decoder User
userDecoder =
    decode User
        |> required "username" Decode.string
        |> required "isPremium" Decode.bool
        |> required "createdAt" Decode.string
        |> required "email" Decode.string
