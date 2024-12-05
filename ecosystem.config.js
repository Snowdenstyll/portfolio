// ecosystem.config.js
module.exports = {
    apps: [{
      name: 'portfolio',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=4096'
      },
      max_memory_restart: '1G'
    }]
  }