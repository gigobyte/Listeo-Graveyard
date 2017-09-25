module Utils.CreateFormField exposing (createFormField)

import App.State.Root exposing (Model)


createFormField : (Model -> { c | clientErrors : b, values : b }) -> (b -> d) -> Model -> (d -> d -> e) -> e
createFormField formGetter fieldGetter model composed =
    let
        form =
            formGetter model

        value =
            fieldGetter form.values

        error =
            fieldGetter form.clientErrors
    in
    composed value error
