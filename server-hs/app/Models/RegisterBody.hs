{-# LANGUAGE DeriveGeneric #-}

module Models.RegisterBody where

import           Data.Aeson   (FromJSON, ToJSON)
import           GHC.Generics

instance ToJSON RegisterBody
instance FromJSON RegisterBody
data RegisterBody = RegisterBody { username :: String
                                 , password :: String
                                 , email    :: String
                                 } deriving (Generic)
