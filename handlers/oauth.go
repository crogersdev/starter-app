package handlers

import (
	goctx "context"
	"fmt"
	"net/http"

	"pl-innovate.army.mil/starter-app/config"

	"github.com/gin-gonic/gin"
)

func CallbackHandler(context *gin.Context) {
	req := context.Request
	state := req.FormValue("state")
	if state != "state" {
		context.JSON(http.StatusBadRequest, gin.H{
			"message": "failed to retrieve state from login callback",
		})
		return
	}

	code := req.FormValue("code")
	token, err := config.OAuthCfg.Exchange(goctx.Background(), code)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"message": "failed to exchange token",
		})
		return
	}

	fmt.Println("your token is: ", token.AccessToken)

	context.JSON(http.StatusOK, gin.H{
		"message": "successfully authenticated",
	})
}
