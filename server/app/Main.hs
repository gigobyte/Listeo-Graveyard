{-# LANGUAGE OverloadedStrings #-}

module Main where

import           Control.Monad.IO.Class
import qualified Data.Text.Lazy         as T
import           Database.MongoDB
import           Web.Scotty
import           Network.Wai.Middleware.Cors
import Debug.Trace
import Text.JSON (decode)

data User = User { username :: String } deriving (Show, Read)

getUsers :: Pipe -> IO [Document]
getUsers pipe = access pipe master "listeodb" (find (select [] "users") >>= rest)

server :: Pipe -> ScottyM()
server pipe =
    get "/" $ do
        res <- liftIO $ getUsers pipe
        json $ T.pack $ show res

main :: IO ()
main = do
    pipe <- connect $ host "127.0.0.1"
    scotty 8081 $ do
        middleware simpleCors
        server pipe
