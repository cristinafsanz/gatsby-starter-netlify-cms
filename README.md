# Blog with Gatsby + Netlify CMS

Followed the instructions of [Start with a template](https://www.netlifycms.org/docs/start-with-a-template/) with "Gatsby Site Starter".

## Gatsby Site Starter

1. Connect to GitHub.
Connect Netlify to your GitHub account to create your gatsby-starter-netlify-cms repository.

2. Configure your site. 

    Repository name: [gatsby-starter-netlify-cms](https://github.com/cristinafsanz/gatsby-starter-netlify-cms).

3. Your site is live!
Just push your changes to GitHub and we’ll automatically deploy them to our global CDN

  - Site https://trusting-aryabhata-059eda.netlify.com/.

  ```
  We see you’ve started using Identity on trusting-aryabhata-059eda, so we got you started on the Identity Free plan, which includes:

  - Have up to 1000 users log in to your site per month, with open registration
  - Restrict user registration to invite-only, with up to 5 total users
  - Enable external OAuth providers for user login, using Netlify's built-in integration
  ```

- Content Manager:
https://trusting-aryabhata-059eda.netlify.com/admin/#/collections/blog.

- [Netlify](https://app.netlify.com/):

  - Deploying your site
  - Set up a custom domain
  - Secure your site with HTTPS

Identity:
https://app.netlify.com/sites/trusting-aryabhata-059eda/settings/identity.

Add administrator: https://app.netlify.com/sites/trusting-aryabhata-059eda/settings/general.

## Changes

- Add real text, image and favicon.

- Run in local:

  ```
  npm run develop
  ```

- Add footer (as in https://kaldi-template.netlify.com/).

- Change routes to be Service main page.

- Add custom domain: https://app.netlify.com/sites/trusting-aryabhata-059eda/settings/domain

  1. Add the custom domain to your site. Netlify will verify the domain name you enter and offer to sell the domain to you if it is available. If the domain is registered with an external registrar, you can assign it to your Netlify site.

    Clicking in "Check DNS configuration":

    ```
    Log in to the account you have with your domain provider, and make sure your nameservers are set to the following hostnames:

    dns1.p04.nsone.net
    dns2.p04.nsone.net
    dns3.p04.nsone.net
    dns4.p04.nsone.net

    ```
  2. Configure your DNS provider to point the domain at the Netlify servers (if the domain purchased through a third party). Domains purchased during the custom domain flow do not require additional DNS configuration.

    ```
    - Edit "DNS Servers" in the DNS provider page (1&1).
    ```

  3. Test that your site is accessible via the custom domain. There may be a delay while DNS changes propagate.

    ```
    - If you add a custom domain, we will automatically provision a certificate with Let’s Encrypt, enabling HTTPS on your domain (https automatically).

    - You can check the status of your site’s SSL certificates from the site dashboard, at Settings > Domain management > HTTPS.
    ```

## Pending

- Responsive

- User manual to add/edit posts

- Add filter tags

## Gatsby + Netlify CMS Starter

**Note:** This starter uses the [Gatsby v2 Beta](https://www.gatsbyjs.org/blog/2018-06-16-announcing-gatsby-v2-beta-launch/).

This repo contains an example business website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

### Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Getting Started (Recommended)

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. The example here is the Kaldi coffee company template (adapted from [One Click Hugo CMS](https://github.com/netlify-templates/one-click-hugo-cms)). Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/AustinGreen/gatsby-starter-netlify-cms&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

#### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

### Getting Started (Without Netlify)
```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/AustinGreen/gatsby-starter-netlify-cms/
$ cd [SITE_DIRECTORY_NAME]
$ npm run build
$ npm run serve
```

#### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

### Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')
