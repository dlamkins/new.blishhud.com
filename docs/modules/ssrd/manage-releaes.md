---
id: manage-releases
title: Manage Releases
---

## Overview

SSRD allows you to submit releases to the Blish HUD module repository automatically.  SSRD also allows you to manage existing releases.

## Submit a New Release

A new release can be submitted by using the Publish button to select a repo target.

<img src="/img/docs/ssrd/mr1.png" width="500"/>

When selected, your module will be built and a new package manifest PR'd to the target repository.

### Publish to the public repo

Releases added to the public repo will be visible to all Blish HUD users.

### Publish to the prerelease repo

Releases added to the prerelease repo will only be visible to Blish HUD users that have [Preview releases](https://blishhud.com/docs/user/overlay-settings#:~:text=Blish%20HUD%20window.-,Preview%20releases,-No) enabled.  Prerelease releases are good for testing major changes before deploying to a wider audience.

## Set Release Notes

Providing release notes helps your users better understand the improvements made to your module.  Release notes are shared in the [🎉release-feed](https://discord.gg/ryWP5Ct89S) Discord channel and on https://pkgs.blishhud.com/.

<img src="/img/docs/ssrd/mr2.png" width="400"/>

Release notes can be updated at any time as needed.  The posting will be updated both in Discord and on the pkgs site.

## Release Listing Modifiers

<details>
    <summary>Toggle Release Listing</summary>
    <div>
        Allows you to hide a module release from Blish HUD.  When hidden, the release will no longer be displayed in Blish HUD's module repo.  It can be good to hide older releases to keep the version dropdown easier to navigate.
    </div>
</details>

<details>
    <summary>Spoil Release</summary>
    <div>
        <p><strong>ONLY AN ADMIN CAN UN-SPOIL A RELEASE.</strong></p>
        <p>
            Spoiling a release fully recalls a release for all users:
            <ul>
                <li>The release is no longer available for download in Blish HUD's module repo.</li>
                <li>Users will be unable to enable the module under any circumstances (even if it was previously downloaded and enabled).</li>
            </ul>
        </p>
        <p>A module release should be spoiled when it causes numerous unhandled/fatal exceptions causing Blish HUD to crash.</p>
    </div>
</details>

<details>
    <summary>Delete Release</summary>
    <div>
        <p><i>Currently only available prior to a release getting merged.</i></p>
        <p>Deletes a release from SSRD.  If you wish to perform a new release, you will need to bump the version number to avoid artifact naming conflicts (this will be fixed in the future).</p>
    </div>
</details>