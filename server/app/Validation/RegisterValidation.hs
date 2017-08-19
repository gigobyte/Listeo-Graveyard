{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric  #-}

module Validation.RegisterValidation where

import Data.Aeson (ToJSON)
import Data.List
import GHC.Generics
import qualified Models.RegisterBody as RB
import Validation.ValidationUtils

instance ToJSON RegisterErrorCode
data RegisterErrorCode = InvalidUsername
                       | InvalidPassword
                       | InvalidEmail
                       | UserAlreadyExists
                       deriving (Enum, Generic)

instance ToJSON ValidationResult
data ValidationResult = ValidationResult { username :: Maybe Int
                                         , password :: Maybe Int
                                         , email    :: Maybe Int
                                         } deriving (Generic)

validateRegisterForm :: RB.RegisterBody -> ValidationResult
validateRegisterForm body =
    let
        usernameError = validate (RB.username body) [(required, InvalidUsername)]
        passwordError = validate (RB.password body) [(required, InvalidPassword)]
        emailError = validate (RB.email body) [(required, InvalidEmail)]
    in
        ValidationResult { username = usernameError
                         , password = passwordError
                         , email = emailError
                         }
