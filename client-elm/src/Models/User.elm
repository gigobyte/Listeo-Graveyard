module Models.User exposing (..)


type alias User =
    { username : String
    , isPremium : Bool
    , createdAt : String
    , email : String
    }
