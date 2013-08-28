![Xen API Console (XAC)](https://raw.github.com/HPieters/xac.js/master/readme/logo.png "Xen API Console (XAC)")

# Xen API Console (XAC)

XAC is a single page web application that, at some point in future releases, allows managing of XenServer(s) from any browser. Currently this is still a prototype and only shows some basic infromation per pool, host and vm. This will hopefully change in the future.

## Testdrive

To testdrive the XAC application please visit [http://hpieters.github.io/xac.js/](http://hpieters.github.io/xac.js/) and press the 'Try XAC today' button.

## Prerequisites

xac.js workflow is using [yeoman](yeoman.io). In order to test run the application or to make your own build you are required to have the following on your machine:

- [Node.JS](http://nodejs.org/)
- NPM
- Grunt
- [Ruby](http://www.ruby-lang.org/)
- [Compass](http://compass-style.org/install/)
- [Bourbon](http://bourbon.io/)

To get all the dependencies:

### Node & NPM*

#### OS X

Using homebrew :

`brew install node`

Using macports

`port install nodejs`

Using Installer

[Download macintosh installer](http://nodejs.org/download/).

*) NPM is now included into node.

#### Debian & Ubuntu

On Debian Sid & Ubuntu:

`(sudo) apt-get install nodejs`

On Debian Wheezy:

`sudo apt-get install python g++ make checkinstall`
`mkdir ~/src && cd $_`
`wget -N http://nodejs.org/dist/node-latest.tar.gz`
`tar xzvf node-latest.tar.gz && cd node-v*`
`./configure`
`checkinstall #(remove the "v" in front of the version number in the dialog)`
`sudo dpkg -i node_*`

#### Windows

Using Installer

[Download windows installer](http://nodejs.org/download/).

Using [chocolatey](http://chocolatey.org/)

`cinst nodejs.install`

### Yeoman

Using NPM

`npm install -g yo`

### Ruby

#### OS X

OS X comes with Ruby preinstalled, however it is highly recommend to update the version as old versions of the OS shipped with buggy versions of ruby.

Using rvm:

`\curl -L https://get.rvm.io | bash -s stable --ruby`

`rvm install 1.9.3`

`rvm use 1.9.3`

#### Debian & Ubuntu

Using rvm:

`curl -L get.rvm.io | bash -s stable`

`source ~/.rvm/scripts/rvm`

Check requirements:

`rvm requirements`

`rvm install 1.9.3`

#### Windows

Using Installer:

[Download windows installer](http://rubyinstaller.org/)

### Compass

Using gem:

`gem install compass`

### Bourbon

`gem install bourbon`

### Grunt dependencies

Using NPM:

`npm install` *

*) Use in the main folder (containing package.json) to get te required node_modules to either grunt build or do grunt server.

## Running XAC

If you have all the components installed it is a simple as:

`grunt server`

This will start the application on localhost:9000 and open a browser tab automatically.

## Building XAC

If you have all the components installed it is a simple as:

`grunt build`

By default the application will build in the 'dist' folder inside the project*.

*) there is a known bug where the css output path to icons is not correct and there for the images are not shown. To correct this search the output css for images and make sure that all the instances have ../images instead of /images or images.

## Using XAC

Soon (tm)