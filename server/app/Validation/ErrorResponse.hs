{-# LANGUAGE DeriveGeneric #-}

module Validation.ErrorResponse where

import           Data.Aeson   (FromJSON, ToJSON)
import           GHC.Generics

instance ToJSON ErrorResponse
instance FromJSON ErrorResponse
newtype ErrorResponse = ErrorResponse { code :: Int } deriving (Generic)
