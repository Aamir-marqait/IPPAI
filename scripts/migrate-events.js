// /**
//  * Migration Script: Import Events Data to Sanity
//  *
//  * This script migrates your existing events.json data to Sanity CMS
//  *
//  * Usage:
//  * 1. Install dependencies: npm install @sanity/client dotenv
//  * 2. Set environment variables in .env or .env.local
//  * 3. Run: node scripts/migrate-events.js
//  */

// // Load environment variables
// require("dotenv").config({ path: ".env" });
// require("dotenv").config({ path: ".env.local" });

// const { createClient } = require("@sanity/client");
// const fs = require("fs");
// const path = require("path");

// // Verify environment variables are loaded
// console.log("🔍 Checking environment variables...");
// if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
//   console.error(
//     "❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID not found in environment variables"
//   );
//   console.error("Please check your .env or .env.local file");
//   process.exit(1);
// }
// if (!process.env.SANITY_API_TOKEN) {
//   console.error(
//     "❌ Error: SANITY_API_TOKEN not found in environment variables"
//   );
//   console.error("Please check your .env or .env.local file");
//   process.exit(1);
// }
// console.log("✅ Environment variables loaded successfully!");
// console.log(`   Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
// console.log(
//   `   Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}`
// );
// console.log("");

// // Load events data
// let eventsData;
// try {
//   eventsData = require("../data/events.json");
//   console.log(`✅ Found ${eventsData.events.length} events in events.json\n`);
// } catch (error) {
//   console.error("❌ Error: Could not load data/events.json");
//   console.error("Please ensure the file exists at: data/events.json");
//   process.exit(1);
// }

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: "2024-01-01",
// });

// // Helper function to upload image to Sanity
// async function uploadImage(imagePath) {
//   try {
//     // Check if the path is a URL or local file
//     if (imagePath.startsWith("http")) {
//       console.log(
//         `⚠️  Warning: ${imagePath} is a URL. You'll need to manually upload this image.`
//       );
//       return null;
//     }

//     const fullPath = path.join(process.cwd(), "public", imagePath);

//     if (!fs.existsSync(fullPath)) {
//       console.log(`⚠️  Warning: Image not found at ${fullPath}`);
//       return null;
//     }

//     const imageBuffer = fs.readFileSync(fullPath);
//     const asset = await client.assets.upload("image", imageBuffer, {
//       filename: path.basename(imagePath),
//     });

//     return {
//       _type: "image",
//       asset: {
//         _type: "reference",
//         _ref: asset._id,
//       },
//     };
//   } catch (error) {
//     console.error(`Error uploading image ${imagePath}:`, error.message);
//     return null;
//   }
// }

// // Main migration function
// async function migrateEvents() {
//   console.log("🚀 Starting event migration...\n");

//   const events = eventsData.events;

//   for (const event of events) {
//     try {
//       console.log(`📝 Migrating: ${event.title}`);

//       // Upload event image
//       const eventImage = await uploadImage(event.image);

//       // Create event document
//       const eventDoc = {
//         _type: "event",
//         title: event.title,
//         slug: {
//           _type: "slug",
//           current: event.slug,
//         },
//         description: event.description,
//         location: event.location,
//         date: event.date,
//         dateTime: event.dateTime,
//         time: event.time,
//         capacity: event.capacity,
//         image: eventImage,
//         status: event.status,
//         statusLabel: event.statusLabel,
//         organizer: event.organizer,
//         registrationLink: event.registrationLink,
//         redirectTo: event.redirectTo,
//         breadcrumb: event.breadcrumb,
//         eventDuration: event.eventDuration,
//         fullDescription: event.fullDescription,
//         theme: event.theme,
//         conceptNote: event.conceptNote,
//         aboutEvent: event.aboutEvent,
//         highlights: event.highlights,
//         criticalIssues: event.criticalIssues,
//         whyAttend: event.whyAttend,
//         whoShouldAttend: event.whoShouldAttend,
//         delegateFees: event.delegateFees,
//         awards: event.awards,
//         prizes: event.prizes,
//         contacts: event.contacts,
//         conclusion: event.conclusion,
//       };

//       // Create document in Sanity
//       const result = await client.create(eventDoc);
//       console.log(`✅ Successfully migrated: ${result.title}\n`);
//     } catch (error) {
//       console.error(`❌ Error migrating ${event.title}:`, error.message, "\n");
//     }
//   }

//   console.log("🎉 Event migration completed!");
// }

// // Helper function to create hero section
// async function createHeroSection() {
//   console.log("📝 Creating Hero Section...");

//   try {
//     const bgImage = await uploadImage("/event/bg.png");
//     const frameImage = await uploadImage("/event/frame.png");
//     const heroImage = await uploadImage("/hero.png");

//     const heroDoc = {
//       _type: "eventHeroSection",
//       title: "26th Regulators & Policymakers",
//       subtitle: "",
//       highlightText: "Retreat",
//       eventDate: "7th- 10th January, 2026",
//       eventLocation: "Shoonya Farm Retreat, Belagavi, Karnataka",
//       registrationLink: "/contact",
//       knowMoreLink: "/events/regulators-policymakers-retreat",
//       countdownTargetDate: "2026-01-07T00:00:00.000Z",
//       backgroundImage: bgImage,
//       frameImage: frameImage,
//       heroImage: heroImage,
//     };

//     await client.create(heroDoc);
//     console.log("✅ Hero Section created successfully!\n");
//   } catch (error) {
//     console.error("❌ Error creating hero section:", error.message, "\n");
//   }
// }

// // Helper function to create Why Join Events section with proper data
// async function createWhyJoinEvents() {
//   console.log("📝 Creating Why Join Events Section...");

//   try {
//     // Feature data from your original component
//     const featuresData = [
//       {
//         title: "IN PERSON NETWORKING",
//         description:
//           "Connect directly with regulators, policymakers, and industry leaders. Build meaningful relationships that foster collaboration and knowledge exchange.",
//         number: "01.",
//       },
//       {
//         title: "EXPERT KNOWLEDGE",
//         description:
//           "Gain insights from leading experts on energy transition, regulatory frameworks, and emerging trends shaping India's power sector.",
//         number: "02.",
//       },
//       {
//         title: "INTERACTIVE SESSIONS",
//         description:
//           "Engage in dynamic workshops, panel discussions, and case studies that encourage practical application of regulatory concepts.",
//         number: "03.",
//       },
//       {
//         title: "POLICY INSIGHTS",
//         description:
//           "Stay ahead with the latest developments in energy policy, market dynamics, and strategic implementation across the power sector.",
//         number: "04.",
//       },
//       {
//         title: "INDUSTRY LEADERS",
//         description:
//           "Learn from distinguished speakers including senior regulators, utility executives, and internationally recognized energy professionals.",
//         number: "05.",
//       },
//       {
//         title: "STRATEGIC PARTNERSHIPS",
//         description:
//           "Forge strategic alliances with key stakeholders in the power sector to drive innovation and advance regulatory excellence.",
//         number: "06.",
//       },
//     ];

//     const features = [];

//     for (let i = 1; i <= 6; i++) {
//       const iconImage = await uploadImage(`/event/${i}.png`);
//       features.push({
//         _type: "object",
//         _key: `feature-${i}`,
//         iconType: "image",
//         iconImage: iconImage,
//         title: featuresData[i - 1].title,
//         description: featuresData[i - 1].description,
//         number: featuresData[i - 1].number,
//       });
//     }

//     const whyJoinDoc = {
//       _type: "whyJoinEvents",
//       sectionTitle: "Join our event",
//       mainHeading: "Why Join Our Events?",
//       description:
//         "Guided by experienced leaders, experts, and advisors shaping the future of India's power sector.",
//       features: features,
//     };

//     await client.create(whyJoinDoc);
//     console.log("✅ Why Join Events section created successfully!\n");
//   } catch (error) {
//     console.error(
//       "❌ Error creating Why Join Events section:",
//       error.message,
//       "\n"
//     );
//   }
// }

// // Helper function to create Gallery
// async function createGallery() {
//   console.log("📝 Creating Gallery Section...");

//   try {
//     const images = [];

//     for (let i = 1; i <= 8; i++) {
//       const image = await uploadImage(`/ne/${i}.jpg`);
//       if (image) {
//         images.push({
//           _type: "image",
//           _key: `gallery-${i}`,
//           asset: image.asset,
//           alt: `Event gallery image ${i}`,
//         });
//       }
//     }

//     const galleryDoc = {
//       _type: "eventGallery",
//       sectionTitle: "EVENTS GALLERY",
//       mainHeading: "Collection of images from past events",
//       description:
//         "Unique confluences of stalwarts from government, industry and civil society engaging and deliberating for a brighter future.",
//       images: images,
//     };

//     await client.create(galleryDoc);
//     console.log("✅ Gallery section created successfully!\n");
//   } catch (error) {
//     console.error("❌ Error creating gallery section:", error.message, "\n");
//   }
// }

// // Run all migrations
// async function runMigrations() {
//   try {
//     await migrateEvents();
//     await createHeroSection();
//     await createWhyJoinEvents();
//     await createGallery();

//     console.log("\n🎊 All migrations completed successfully!");
//     console.log(
//       "\n⚠️  Important: Please manually verify all data in Sanity Studio"
//     );
//     console.log("⚠️  Some images may need to be re-uploaded manually\n");
//     console.log("🚀 Next steps:");
//     console.log("   1. Run: npx sanity dev");
//     console.log("   2. Visit: http://localhost:3333");
//     console.log("   3. Review and publish your content\n");
//   } catch (error) {
//     console.error("❌ Migration failed:", error);
//     process.exit(1);
//   }
// }

// // Execute migrations
// runMigrations();
