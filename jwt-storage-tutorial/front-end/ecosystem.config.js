module.exports = {
  apps: [
    {
      name: 'front-end',
      cwd: './jwt-storage-tutorial/front-end',
      script: 'npm',
      args: 'run start',
      env: {
        PORT: 3000
      },
    },
  ],
};