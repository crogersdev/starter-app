package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"pl-innovate.army.mil/starter-app/handlers"
)

func main() {
	router := gin.Default()
	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"http://localhost:5173"}
	router.Use(cors.New(corsConfig))

	router.GET("/foo", handlers.FooHandler)
	router.GET("/login", handlers.LoginHandler)

	router.Run()
}
