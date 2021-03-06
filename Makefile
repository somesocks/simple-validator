
.PHONY: help build test


help:
	@echo "Makefile for simple-validator"
	@echo "	make build - make a new build"
	@echo "	make test - run the test cases against the build"

build:
	mkdir -p ./dist
	NODE_MODULES=. webpack --config=./webpack.js

test:
	NODE_MODULES=. mocha ./tests/all.js
