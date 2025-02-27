package handlers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func FooHandler(context *gin.Context) {
	context.JSON(http.StatusOK, gin.H{
		"message": "foo requested",
	})
	fmt.Println("i was called after foo")
}
