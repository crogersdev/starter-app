package config

import (
	"golang.org/x/oauth2"
)

var OAuthCfg = oauth2.Config{
	ClientID:     "client_id",
	ClientSecret: "client_secret",
	Endpoint: oauth2.Endpoint{
		AuthURL:  "https://foo/oauth2/authorize",
		TokenURL: "https://foo/oauth2/token",
	},
	RedirectURL: "http://localhost:8088/callback",
	Scopes:      []string{"profile", "email"},
}
