workflow "Build Docs" {
  on = "push"
  resolves = ["Deploy Docs"]
}

action "Filter Master" {
  uses = "actions/bin/filter@master"
  args = "branch main"
}

action "Install" {
  needs = ["Filter branch"]
  uses = "actions/npm@master"
  args = "install --prefix ./website"
}

action "Update version" {
  needs = ["Install"]
  uses = "clay/docusaurus-github-action@master"
  args = "version"
}

action "Deploy Docs" {
  needs = ["Update version"]
  uses = "clay/docusaurus-github-action@master"
  args="deploy"
  secrets = ["DEPLOY_SSH_KEY", "ALGOLIA_API_KEY"]
  env={
      BUILD_DIR = "new.blishhud.com",
      PROJECT_NAME = "Blish-HUD"
  }
}