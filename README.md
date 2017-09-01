# ELM APP

Example application which consumes a library of functions - see [elm-starter](https://github.com/tommymessbauer/elm-starter)

This is a good way to get started with Elm within a project using webpack and other common infrastructure.

# GET STARTED

This repo should be cloned, then renamed/re-initialized for use in a component.

```bash
git clone git@github.com:tommymessbauer/elm-app.git your_folder
cd your_folder
rm -rf .git
git init
git remote add origin git@your-git-host:/path-to/repo.git
```

# RUNNING THE PROJECT

```bash
yarn run reinstall
yarn run start
```

After starting, a local dev server with HMR will be running at localhost:3000. Write your functions, then commit and push to your repo.

# ANATOMY OF THIS COMPONENT

* `./src/elm/` - Put Main.elm and other files here.
* `./src/styles` - Put your sass here.

# USING PRIVATE GIT URLS

This example relies on [elm-github-install](https://github.com/gdotdesign/elm-github-install) which allows the inclusion of private repos. This is done in the `elm-package.json` with the `dependency-sources` field.

```
{
	"version": "0.0.0",
	"summary": "App that consumes an external library",
	"repository": "https://github.com/tommymessbauer/elm-app.git",
	"license": "MIT",
	"source-directories": [ "src/elm" ],
	"exposed-modules": [  ],
	"dependencies": {
		"tommymessbauer/elm-starter": "0.0.0 <= v < 1.0.0",
		"elm-lang/core": "5.0.0 <= v < 6.0.0",
		"elm-lang/html": "2.0.0 <= v < 3.0.0"
	},
	"dependency-sources": {
		"tommymessbauer/elm-starter": "git@github.com:tommymessbauer/elm-starter.git"		
	},
	"elm-version": "0.18.0 <= v < 0.19.0"
}
```