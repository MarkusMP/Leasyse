import { visionTool } from "@sanity/vision";
import { previewDocumentNode } from "plugins/previewPane";
import { productionUrl } from "plugins/productionUrl";
import { pageStructure, singletonPlugin } from "plugins/settings";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import settings from "schemas/singletons/settings";
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "./lib/sanity.api";
import home from "./schemas/singletons/home";
import { media, mediaAssetSource } from "sanity-plugin-media";
import page from "schemas/documents/page";
import header from "schemas/singletons/header";
import footer from "schemas/singletons/footer";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Next.js Personal Website with Sanity.io";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [home.name, page.name];

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId: projectId || "",
  dataset: dataset || "production",
  title,
  plugins: [
    deskTool({
      structure: pageStructure([home, settings, header, footer]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    media(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        );
      },
    },
  },
  schema: {
    types: [
      // Singletons
      home,
      settings,
      header,
      footer,
      // documents
      page,
    ],
  },
});
