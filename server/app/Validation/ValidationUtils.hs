module Validation.ValidationUtils where

import           Data.Maybe
import           Validation.ErrorCode

type Validator errorContainer = (String -> Bool, errorContainer)

validate :: (ErrorCode a, Enum a) => String -> [Validator a] -> [Int]
validate = mapMaybe . runValidation
    where
        runValidation :: (ErrorCode a, Enum a) => String -> Validator a -> Maybe Int
        runValidation value (validator, errorCode)
            | validator value = Nothing
            | otherwise = Just $ fromEnum errorCode

required :: String -> Bool
required [] = False
required _  = True
