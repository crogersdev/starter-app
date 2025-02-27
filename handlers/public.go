package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func LoginHandler(context *gin.Context) {
	context.JSON(http.StatusOK, gin.H{
		"message": "let's log you in",
	})
}

func BarHandler(context *gin.Context) {
	context.JSON(http.StatusOK, gin.H{
		"message": "bar bar bar",
	})
}
