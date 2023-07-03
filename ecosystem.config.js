module.exports = {
  apps : [{
    name   : "Overspace client",
    script : "yarn start",
    env_production: {}
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/overspace-client.git',
      path : '/var/www/overspace/client',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
