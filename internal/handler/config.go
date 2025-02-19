package handler

import (
	"fmt"
	"net/http"

	"github.com/ankorstore/yokai/config"
	"github.com/labstack/echo/v4"
)

// ConfigHandler is an example HTTP handler.
type ConfigHandler struct {
	config *config.Config
}

// NewConfigHandler returns a new [ExampleHandler].
func NewConfigHandler(config *config.Config) *ConfigHandler {
	return &ConfigHandler{
		config: config,
	}
}

// Handle handles HTTP requests.
func (h *ConfigHandler) Handle() echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.String(http.StatusOK, fmt.Sprintf("Welcome to %s.", h.config.AppName()))
	}
}
