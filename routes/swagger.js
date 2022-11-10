const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API grupo-n-7",
            version: "1.0.0"
        }
    },
    apis: [
        "./routes/auth.js",
        "./routes/category.js",
        "./routes/transaction.js",
        "./routes/user.js"
    ]
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)) 
};

module.exports = swaggerDocs;