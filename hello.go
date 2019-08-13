package main

import (
	"fmt"
)

func main() {
	x := 10
	y := 20
	fmt.Printl("El resultado es :", addition(x, y))
}

func addition(x int, y int)int {
	return x + y
}