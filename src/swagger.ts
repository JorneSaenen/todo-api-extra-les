import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
      description: "Simple Todo API with Node.js, Express and TypeScript",
    },
    servers: [
      process.env.NODE_ENV !== "production"
        ? {
            url: "http://localhost:3000/api",
            description: "Development server",
          }
        : {
            url: "https://aaaaa.com/api",
            description: "Production server",
          },
    ],
    components: {
      schemas: {
        Todo: {
          type: "object",
          properties: {
            _id: {
              type: "string",
            },
            title: {
              type: "string",
            },
            completed: {
              type: "boolean",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
            },
          },
        },
      },
    },
    tags: [
      {
        name: "Todos",
        description: "Todo management",
      },
    ],
  },
  apis: ["**/*.ts"],
};

export const specs = swaggerJSDoc(options);
