import { speciesData } from "./src/lib/data";

async function seed() {
    console.log("Seeding database...");
    // In a real app, this would connect to Postgres/Prisma
    console.log(`Seeding ${speciesData.length} species...`);

    for (const species of speciesData) {
        console.log(`Created: ${species.common_name}`);
    }

    console.log("Seeding complete! 🌱");
}

seed();
