package main

import (
	"backend/bootstrap"
)

func main() {
	app := bootstrap.Boot()

	app.Start()
}
