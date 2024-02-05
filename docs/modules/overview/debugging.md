---
id: debugging
title: Debugging Your Module
---

## Configuring Your Project

1. In your module's **Debug** settings, set the **Start action** to *Start external program* and specify the path of **Blish HUD.exe**.
2. Under the same settings, set **Command line arguments** to `--debug --module "c:\project-path\bin\x64\Debug\<path-to-your-module-output.bhm"`

By default, you should now be able to run your application - it'll generate the *.bhm* file automatically for you when the project is built.  The command line arguments you specified will launch Blish HUD and allow you to debug your module (the debugger will be attached).  Guild Wars 2 should be running for Blish HUD to be able to overlay something while debugging your module. Instead of running Guild Wars 2 you can modify the **Command line arguments** further to let Blish HUD overlay a powershell window for testing purposes (https://blishhud.com/docs/user/launch-options#overlay-a-different-application-esp-for-testing). 

As long as your project generates a PDB file, it will be packaged into your bhm and loaded by the module loader at runtime.

## Runtime Differences When Debugging

Blish HUD behaves somewhat different when the debug flag is passed to it.  Beyond showing additional runtime data in the top right-corner, some module error handling is disabled.  The intention is to ensure that exceptions are not caught and are instead rethrown to ensure you can address them.

## Troubleshooting

<details>
  <summary>Blish HUD closes almost immediately when launched for debugging without an error.</summary>
  <div>
    Blish HUD is likely already open.  Make sure there are no other instances of Blish HUD in Task Manager or in your notification area.
  </div>
</details>

<details>
  <summary>Blish HUD indicates that it must be restarted in order to enable your module (Enable and Disable buttons are disabled).</summary>
  <div>
    <p>You are attempting to debug a module which is already in your modules folder.  Remove your module from Blish HUD (either through the UI or manually at `%userprofile%\Documents\Guild Wars 2\addons\blishhud\modules`) and then attempt launching Blish HUD again using the `--module` parameter.</p>
    <p>Alternatively, you can keep your regularly used Blish HUD profile seperate from your development environment by using the <a target="_blank" href="/docs/user/launch-options#-s---settings-pathtosettingsdir">`--settings` parameter</a>.</p>
  </div>
</details>