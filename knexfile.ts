module.exports = {
    development:  {
        client: "pg",
        connection: {
            database: "knexdb",
            user: "postgres",
            password: "postgres"
        },
        migrations: {
            directory: `${__dirname}/src/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds`
        }
    }
}