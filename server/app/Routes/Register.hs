module Routes.Register where

import           Data.Aeson                    (decode)
import           Database.MongoDB
import           Models.RegisterBody
import           Network.HTTP.Types.Status
import           Validation.ErrorResponse
import           Validation.RegisterValidation
import           Web.Scotty

register :: Pipe -> ActionM ()
register pipe = do
    b <- body
    let c = decode b :: Maybe RegisterBody
    case c of
        Just val -> case validate val of
            Just error -> do
                status badRequest400
                json ErrorResponse { code = fromEnum error }
            Nothing    -> status ok200
        Nothing  -> status badRequest400
