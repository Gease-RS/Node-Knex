module.exports = {
    development:  {
        client: "pg",
        connection: {
            database: "knexdb",
            user: "postgres",
            password: "postgres"
        },
        migrations: {
            directory: "./src/database/migrations"
        },
        seeds: {
            directory: "./src/database/seeds"
        }
    }
}