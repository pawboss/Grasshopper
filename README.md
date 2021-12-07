```

█▀▀▀ █▀▀█ █▀▀█ █▀▀ █▀▀ █▀▀ █░░█ █▀▀█ █▀▀█ █▀▀█ █▀▀ █▀▀█ 
█░▀█ █▄▄▀ █▄▄█ ▀▀█ ▀▀█ █░░ █▀▀█ █░░█ █░░█ █░░█ █▀▀ █▄▄▀ 
▀▀▀▀ ▀░▀▀ ▀░░▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀▀ █▀▀▀ █▀▀▀ ▀▀▀ ▀░▀▀
```
# GrassChopper

## About The Project

What is grasschopper? It is an asset compilation tool to use in a development environment, fast and very versatile.

Why use this and not npm? GrassChopper offers a webpack environment with dockerized npm, ready to use, with a web server under https, so that with a resource override plugin you can test your development in real time.

Css, sass, less? all and none, grasschopper combines all stylesheets, use whatever you want.

What do i need to start it? docker, nothing more.

Grasschopper uses webpack and needs a JS entry point, but we don't need to make an entrypoint for each stylesheet, grasschopper will look for all the dependencies and compile them to get a css.

Changes in real time: write styles and update the page, it's that simple.

Start it up, navigate to the prepared css and use a resource override on whatever web you want.

### Installation

The project contains webpack within docker so the first time it is only necessary to do a:

```docker-compose up --build```

Installation will take a few minutes while downloading docker images and installing node dependencies and wake up the web server.

## Usage

We will start the project with ```docker-compose up``` and then webpack listens for the changes under the src directory
If we want to browse the assets we will visit the url with our browser [https://localhost:8444/](https://localhost:8444/)

The first time we will have to agree to enter a non-secure site, since the SSL certificate is self-signed

## Another considerations

It is a better option to leave the docker output visible and not use the -d option to be able to see the logs and know if we have a syntax error on compilation

If we add new files or directories, webpack will not see them and will not be able to compile them so it is necessary to restart docker, for example with CTRL + C on console.