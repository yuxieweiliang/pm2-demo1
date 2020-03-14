    module.exports = {
  apps: [{
           name: "pm2Demo",
           script: "index.js",
           // 默认情况下，PM2会监听应用是否ready，如果3000ms后没有ready会强制重载。 使用listen_timeout改变这个值。
           wait_ready: true,
           // 默认情况下，PM2在发送SIGKILL信号之前，如果应用进程没用自己退出，PM2等待1600毫秒后会主动杀掉应用进程。
           kill_timeout: 1600,
           //环境变量
           env: {
             NODE_ENV: "development",
           },
           env_production: {
             NODE_ENV: "production",
           }
         }],
  deploy: {
            // "production" is the environment name
    production: {
                  // SSH key path, default to $HOME/.ssh
      // key: "$HOME/.ssh",
                  // SSH user
      user: "root",
                  // SSH host
      host: ["39.107.87.157"],
                  // SSH options with no command-line flag, see 'man ssh'
                  // can be either a single string or an array of strings
      ssh_options: "StrictHostKeyChecking=no",
                  // GIT remote/branch
      ref: "origin/master",
                  // GIT remote
      repo: "git@github.com:yuxieweiliang/pm2-demo1.git",
                  // path in the server
      path: "/var/www/my-repository",
                  // Pre-setup command or path to a script on your local machine
      // 'pre-setup': "apt-get install git ; ls -la",
                  // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
        'post-setup': "ls -la",
                  // pre-deploy action 预部署
      'pre-deploy-local': "echo 'This is a local executed command'",
                  // post-deploy action 部署后执行
      'post-deploy': "npm install",
    },
  }
  }
