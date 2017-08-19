module Validation.ValidationUtils where

import Data.Maybe

runValidation :: (Enum a) => String -> (String -> Bool, a) -> Maybe Int
runValidation value (validator, errorCode)
    | validator value = Nothing
    | otherwise = Just $ fromEnum errorCode

validate :: (Enum a) => String -> [(String -> Bool, a)] -> Maybe Int
validate value validator = case mapMaybe (runValidation value) validator of
                                (x:_) -> Just x
                                [] -> Nothing

required :: String -> Bool
required [] = False
required _  = True