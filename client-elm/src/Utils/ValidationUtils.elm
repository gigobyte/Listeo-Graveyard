module Utils.ValidationUtils exposing (..)

import Maybe.Extra exposing (isJust)
import Regex exposing (contains, regex)


type alias FieldValue =
    Maybe String


type alias Error =
    String


type alias Validator =
    FieldValue -> Bool


validate_ : FieldValue -> ( Validator, Error ) -> Maybe Error
validate_ value ( validationFn, errorStr ) =
    if validationFn value then
        Nothing
    else
        Just errorStr


validate : FieldValue -> List ( Validator, Error ) -> Maybe Error
validate value validationTuples =
    validationTuples |> List.map (validate_ value) |> List.filterMap identity |> List.head


required : Validator
required =
    isJust


pattern : String -> Validator
pattern p =
    createValidator (contains (regex p))


minlength : Int -> Validator
minlength l =
    createValidator (String.length >> (>=) l)


maxlength : Int -> Validator
maxlength l =
    createValidator (String.length >> (<=) l)


includes : String -> Validator
includes =
    createValidator << String.contains


createValidator : (String -> Bool) -> FieldValue -> Bool
createValidator body value =
    Maybe.withDefault False (Maybe.map body value)
