{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DeriveGeneric  #-}

module Validation.RegisterValidation where

import           Data.Aeson                 (ToJSON)
import           Data.List
import           GHC.Generics
import qualified Models.RegisterBody        as RB
import           Validation.ErrorCode
import           Validation.ValidationUtils

instance ToJSON RegisterErrorCode
data RegisterErrorCode = InvalidUsername
                       | InvalidPassword
                       | InvalidEmail
                       | UserAlreadyExists
                       deriving (Enum, ErrorCode, Generic)

instance ToJSON ValidationResult
data ValidationResult = ValidationResult { username :: [Int]
                                         , password :: [Int]
                                         , email    :: [Int]
                                         } deriving (Generic)

validateRegisterForm :: RB.RegisterBody -> ValidationResult
validateRegisterForm body =
    let
        usernameErrors = validate (RB.username body) [(required, InvalidUsername)]
        passwordErrors = validate (RB.password body) [(required, InvalidPassword)]
        emailErrors = validate (RB.email body) [(required, InvalidEmail)]
    in
        ValidationResult { username = usernameErrors
                         , password = passwordErrors
                         , email = emailErrors
                         }
