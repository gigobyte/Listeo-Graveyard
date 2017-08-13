module Validation.ErrorCodes where

data RegisterErrorCode = InvalidUsername
                       | InvalidPassword
                       | InvalidEmail
                       | UserAlreadyExists
                       deriving (Enum)
