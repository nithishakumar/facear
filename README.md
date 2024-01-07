# FaceAR Website

The website for FaceAR: an AR mobile app to help patients with facial disabilities perform facial exercises. FaceAR is being developed by 4 University of Michigan students (Nithisha Nantha Kumar, Melissa Fang, Anisha Nahta, and Haihan Gao) with support from Michigan Medicine and funding from Snap, Inc. (Snapchat).

# Start a Development Server for the FaceAR Website Locally

1. Install npm and yarn (if you haven't installed them already). If you're using a mac replace "sudo apt" with "brew".

		sudo apt update
		sudo apt install npm
		npm install yarn

2.  Run the command below to install bootstrap.

		yarn add bootstrap react-bootstrap

3. Run the command below to install react-router.

		yarn add react-router-dom

3. Start a development server for testing.

		yarn start

There's no need to restart the development server after making changes. Just save the changes and go back to the site, the changes will be visibile.

# Building and Deploying the FaceAR Website to GitHub Pages

1. Run the command below to install gh-pages (only required when you're deploying for the first time).

		yarn add -D gh-pages

2. Run the following command on a local terminal to deploy the site.
   
		npm run deploy

4. Navigate to the settings of the repository, select "Pages" under "Code and Automation", and then make sure the branch deployed is the new "gh-pages" branch that was created after running the command and not "main".
