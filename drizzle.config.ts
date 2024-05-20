import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",  // Chỉ định loại cơ sở dữ liệu
    schema: "./db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DATABASE_URL!,  // Sử dụng 'url' thay vì 'connectionString'
    },
});
