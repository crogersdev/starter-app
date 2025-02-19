package internal

import (
	"github.com/ankorstore/yokai/fxhttpserver"
	"github.com/crogersdev/foo-api/internal/handler"
	"go.uber.org/fx"
)

// Router is used to register the application HTTP middlewares and handlers.
func Router() fx.Option {
	return fx.Options(
		fxhttpserver.AsHandler("GET", "", handler.NewConfigHandler),
		fxhttpserver.AsHandler("GET", "/foo", handler.NewConfigHandler),
	)
}
