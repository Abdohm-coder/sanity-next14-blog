/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { presentationTool } from "sanity/presentation";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { myTheme } from "./theme";
import StudioNavbar from "./app/(admin)/studio/[[...index]]/_components/StudioNavbar";
import { getDefaultDocumentNode } from "./structur";

export default defineConfig({
  basePath: "/studio",
  name: "BLOG_CONTENT_STUDIO",
  title: "Blog Content Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
