/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_uVfc0Z1KmUHF@ep-sparkling-moon-apf5uy4x.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require',
    }
  };