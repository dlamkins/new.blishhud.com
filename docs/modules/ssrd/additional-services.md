---
id: additional-services
title: Additional Services
---

## Overview

In addition to release management, SSRD provides other services intended to benefit our module developers.

## Static Hosting

Modules can host static content on `bhm.blishhud.com` for free.  This is done by creating a branch on your module's repository named `bhud-static/modulenamespace` where `modulenamespace` is the namespace of your module.

When your standard [module webhook](registering-modules#webhooks) is called on push, any `bhud-static/*` branches will be cloned and hosted automatically.  Your modules and other services can access these statically hosted files at `https://bhm.blishhud.com/modulenamespace/` where `modulenamespace` is once again the namespace of your module.

An example of such a repository branch can be found for the Pathing module:<br/>
https://github.com/blish-hud/Pathing/tree/bhud-static/bh.community.pathing

These files are available at:<br/>
https://bhm.blishhud.com/bh.community.pathing/

For example:
https://bhm.blishhud.com/bh.community.pathing/wiki/logo.png

In addition to hosting content for your module, this hosting can be used to display static sites as it will serve html.