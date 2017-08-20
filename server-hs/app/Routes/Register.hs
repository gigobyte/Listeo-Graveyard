module Routes.Register where

import Data.Aeson (decode)
import Database.MongoDB
import Models.RegisterBody
import Network.HTTP.Types.Status
import Validation.RegisterValidation
import Web.Scotty

register :: Pipe -> ActionM ()
register pipe = do
    b <- body
    let c = decode b :: Maybe RegisterBody
    case c of
        Just val -> if hasAnyErrors $ validateRegisterForm val
                    then status badRequest400
                    else status ok200
        Nothing  -> status badRequest400
