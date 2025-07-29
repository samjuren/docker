export default {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "123",
  database: "usersdb",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
