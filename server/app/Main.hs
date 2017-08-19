{-# LANGUAGE OverloadedStrings #-}

module Main where

import Database.MongoDB
import Debug.Trace
import Network.Wai.Middleware.Cors
import Routes.Register
import Web.Scotty

server :: Pipe -> ScottyM ()
server pipe =
    post "/register" $ register pipe

corsMiddleware = cors $ const (Just policy)

policy :: CorsResourcePolicy
policy =
    CorsResourcePolicy
        { corsOrigins = Nothing
        , corsMethods = simpleMethods
        , corsRequestHeaders = simpleHeaders
        , corsExposedHeaders = Nothing
        , corsMaxAge = Nothing
        , corsVaryOrigin = False
        , corsRequireOrigin = False
        , corsIgnoreFailures = False
        }

main :: IO ()
main = do
    pipe <- connect $ host "127.0.0.1"
    scotty 8081 $ do
        middleware corsMiddleware
        server pipe
