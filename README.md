# FaceAR Website

The website for FaceAR - an AR mobile app to help patients with facial disabilities perform facial exercises. FaceAR is being developed by 4 University of Michigan students with support from Michigan Medicine and funding from Snap, Inc. (Snapchat).

# Building, Deploying, and Serving the FaceAR Website Locally

1. Install Node.js, npm, and http-server (if you haven't installed them already)

	sudo apt update
	sudo apt install nodejs
	sudo apt install npm
	sudo npm install -g http-server

2. Update nodejs version if required

	Install a nodejs version manager

		curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

	Close and reopen your terminal (or run source ~/.bashrc or source ~/.zshrc if using Bash or Zsh, 					respectively).
	Install a nodejs version greater than >= 14.6

		nvm install X.XX.X

	Use the installed nodejs version

		nvm use X.XX.X

3.  When deploying to a local environment using localhost, set the homepage to "/" in the package.json file. If not, mention the correct homepage url (https://nithishakumar.github.io/facear/).

	{
  		"homepage": "/",
  		// ... other configuration options
	}

4. Navigate to the project directory (navigate to the directory where your package.json file is located)

	cd /path/to/your/project/directory

5. Run the following command to install the project dependencies specified in the package.json file.

	npm install

6. Build the project

	npm run build

7. Navigate to the build directory

	cd /path/to/your/project/directory/build

8. Serve the build files

	http-server -p 5000

Once the server is running, open a web browser and navigate to http://localhost:5000 (or the specified port if using a different one) to access the locally deployed React application.
