# FaceAR Website

The website for FaceAR: an AR mobile app to help patients with facial disabilities perform facial exercises. FaceAR is being developed by 4 University of Michigan students (Nithisha Nantha Kumar, Melissa Fang, Anisha Nahta, and Haihan Gao) with support from Michigan Medicine and funding from Snap, Inc. (Snapchat).

# Start a Development Server for the FaceAR Website Locally

1. Install npm and yarn (if you haven't installed them already). If you are using a mac replace "sudo apt" with "brew".

		sudo apt update
		sudo apt install npm
		npm install yarn

2.  Run the command below to install all the needed dependencies.

		yarn run bootstrap

3. Start a development server for testing

		yarn start

# Building and Deploying the FaceAR Website to GitHub Pages

1. Make sure the homepage in the package.json file contains the correct URL: https://nithishakumar.github.io/facear/
2. Run the following command on a local terminal to deploy the site.
   
		npm run deploy

4. Navigate to the settings of the repository, select "Pages" under "Code and Automation", and then make sure the branch deployed is the new "gh-pages" branch that was created after running the command and not "main".
