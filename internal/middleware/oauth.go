package midddleware_auth

import (
	"context"
	"log"
	"net/http"

	"golang.org/x/oauth2"
)

func AccessTokenMiddleware(next http.Handler)
