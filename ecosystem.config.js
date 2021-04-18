module.exports = {
  apps: [{
    name: "post-api",
    script: "./dist/index.js",
    env: {
      NODE_ENV: "development",
    }
  }]
}