const { sequelize } = require("./models");

async function main() {
    try {
        await sequelize.authenticate();
    } catch (e) {
        console.log("Database connection failure.");
        console.log(e);
        return;
    }

    console.log("Database connection success!");
    console.log("Sequelize is ready to use!");

    await sequelize.close();
}

main();