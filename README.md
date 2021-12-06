```

  ▄████  ██▀███   ▄▄▄        ██████   ██████  ▄████▄   ██░ ██  ▒█████   ██▓███   ██▓███  ▓█████  ██▀███  
 ██▒ ▀█▒▓██ ▒ ██▒▒████▄    ▒██    ▒ ▒██    ▒ ▒██▀ ▀█  ▓██░ ██▒▒██▒  ██▒▓██░  ██▒▓██░  ██▒▓█   ▀ ▓██ ▒ ██▒
▒██░▄▄▄░▓██ ░▄█ ▒▒██  ▀█▄  ░ ▓██▄   ░ ▓██▄   ▒▓█    ▄ ▒██▀▀██░▒██░  ██▒▓██░ ██▓▒▓██░ ██▓▒▒███   ▓██ ░▄█ ▒
░▓█  ██▓▒██▀▀█▄  ░██▄▄▄▄██   ▒   ██▒  ▒   ██▒▒▓▓▄ ▄██▒░▓█ ░██ ▒██   ██░▒██▄█▓▒ ▒▒██▄█▓▒ ▒▒▓█  ▄ ▒██▀▀█▄  
░▒▓███▀▒░██▓ ▒██▒ ▓█   ▓██▒▒██████▒▒▒██████▒▒▒ ▓███▀ ░░▓█▒░██▓░ ████▓▒░▒██▒ ░  ░▒██▒ ░  ░░▒████▒░██▓ ▒██▒
 ░▒   ▒ ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░ ▒ ░░▒░▒░ ▒░▒░▒░ ▒▓▒░ ░  ░▒▓▒░ ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░
  ░   ░   ░▒ ░ ▒░  ▒   ▒▒ ░░ ░▒  ░ ░░ ░▒  ░ ░  ░  ▒    ▒ ░▒░ ░  ░ ▒ ▒░ ░▒ ░     ░▒ ░      ░ ░  ░  ░▒ ░ ▒░
░ ░   ░   ░░   ░   ░   ▒   ░  ░  ░  ░  ░  ░  ░         ░  ░░ ░░ ░ ░ ▒  ░░       ░░          ░     ░░   ░ 
      ░    ░           ░  ░      ░        ░  ░ ░       ░  ░  ░    ░ ░                       ░  ░   ░     
                                             ░                                                           

```

# GrassChopper

## About The Project

This project has been built to facilitate frontend development tasks and the deployment of assets under webpack and docker

### Installation

The project contains webpack within docker so the first time it is only necessary to do a:

```docker-compose up --build```

Installation will take a few minutes while downloading docker images and installing node dependencies

## Usage

We will start the project with ```docker-compose up``` and then webpack listens for the changes under the src directory
If we want to browse the assets we will visit the url with our browser [https://localhost:8444/](https://localhost:8444/)

The first time we will have to agree to enter a non-secure site, since the SSL certificate is self-signed

## Another considerations

It is a better option to leave the docker output visible and not use the -d option to be able to see the logs and know if we have a syntax error on compilation

If we add new files or directories, webpack will not see them and will not be able to compile them so it is necessary to restart docker, for example with CTRL + C on console.