module Models.User exposing (User)


type alias User =
    { username : String
    , isPremium : Bool
    , createdAt : String
    , email : String
    }
