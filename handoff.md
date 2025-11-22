# Product Handoff - Jungles & Monkeys

## For Content Editors
Currently, the content is managed via a static data file located at `src/lib/data.ts`.

### Adding a New Species
1. Open `src/lib/data.ts`.
2. Add a new object to the `speciesData` array:
   ```typescript
   {
     id: "unique-id",
     common_name: "Name",
     scientific_name: "Scientific Name",
     slug: "url-friendly-name",
     image: "image-url",
     range: "Location",
     status: "Conservation Status",
     fun_fact: "Interesting fact"
   }
   ```
3. Save and deploy.

### Future CMS Integration
To connect a CMS (like Sanity or Contentful):
1. Create a new API route in `src/app/api/species/route.ts` to fetch from CMS.
2. Update `src/lib/data.ts` to fetch from this API or directly from the CMS SDK.

## For Developers
- **Map**: Uses `react-leaflet`. Tiles are from OpenStreetMap/Carto.
- **Styling**: Tailwind v4. Theme variables are in `src/app/globals.css`.
- **Animations**: Framer Motion is used for page transitions and scroll effects.
