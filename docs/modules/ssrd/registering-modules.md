---
id: registering-modules
title: Registering Modules
---

## Overview

Modules are registered by their git URI.  A single git repository may contain multiple modules.  Each module detected within a repository can be imported into SSRD.

## Registering a module

To register a module, you will need to first get your git URI.  It will end in `.git`.

#### 1. Copy the git URI from your repository.
<img src="/img/docs/ssrd/gituri.png" />

#### 2. Paste the URI into the `Add Module Repository` page in SSRD.
<img src="/img/docs/ssrd/register-module.png" />

#### 4. Register the relevant modules.

You will be presented with the manifest of each detected module in the repo.  Once you've added each module, you may continue on to the main modules page.

*An old recording of this process can be seen below, though, some aspects of the UI have since been updated.*

<div style={{position: "relative", paddingBottom: "calc(52.86% + 44px)" }}><iframe src='https://gfycat.com/ifr/UnequaledGreenBullfrog' frameborder='0' scrolling='no' width='100%' height='100%' style={{position: "absolute", top:0, left:0}} allowfullscreen></iframe></div>

## Webhooks

To allow SSRD to automatically update when you make changes to your module, you can add a webhook to your module's repo.  If a repo contains multiple repos within it, a single webhook will handle updates for all of the registered modules within it.

To get the webhook URL, hover-over the arrow in the top-right corner of your module and copy the **Push Webhook** from the menu.
<img src="/img/docs/ssrd/push-webhook.png" />

Add the webhook to your repo and configure it to only trigger on **Push**.  This will ensure that your module's manifest remains up-to-date in SSRD for release management as well as other features such as static content hosting.

## Remarks

- SSRD only supports modules hosted on GitHub.
- To add a private GitHub repo to SSRD, you must first give our `org@blishhud.com` GitHub account read access to your repo.
- Modules must include all dependencies resolvable from their repo, so if you have a second project that is not included in the repo that your module references, the build will fail.  You can either include the shared library DLL in your module’s repo or publish it as a NuGet package.
- There are limited user facing error messages.  If something unexpected happens, please let Freesnöw know so that he can investigate.