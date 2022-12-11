import "server-only";

import { apiVersion, dataset, projectId, useCdn } from "lib/sanity.api";
import { homePageQuery, pagesBySlugQuery } from "lib/sanity.queries";
import { createClient } from "next-sanity";
import type { HomePagePayload, PagePayload } from "../types";

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null;
};

export async function getHomePage({
  token,
}: {
  token?: string;
}): Promise<HomePagePayload | undefined> {
  return await sanityClient(token)?.fetch(homePageQuery);
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string;
  token?: string;
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug });
}