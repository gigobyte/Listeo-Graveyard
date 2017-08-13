module Validation.RegisterValidation where

import           Data.List
import           Models.RegisterBody
import           Validation.ErrorCodes

validate :: RegisterBody -> Maybe RegisterErrorCode
validate body
    | length (username body) < 3 = Just InvalidUsername
    | length (password body) <= 6 = Just InvalidPassword
    | isInfixOf (email body) "@" = Just InvalidEmail
    | otherwise = Nothing
