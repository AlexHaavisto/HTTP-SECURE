module.exports = {
  apps: [
    {
      name: 'back-end',
      cwd: './jwt-storage-tutorial/back-end',
      script: 'npm',
      args: 'run start',
      env: {
        PORT: 3001,
      watch: ['index.js']
      },
    },
  ],
};