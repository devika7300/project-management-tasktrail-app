module.exports = {
  apps: [
    {
      name: "project-management-tasktrail-app",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
