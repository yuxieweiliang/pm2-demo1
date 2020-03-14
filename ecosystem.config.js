module.exports = {
  apps : [{
    name: 'pm2Demo',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key: "$HOME/.ssh",
      user : 'root',
      host : '39.107.87.157',
      ref  : 'origin/master',
      repo : 'git@github.com:yuxieweiliang/pm2-demo1.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
