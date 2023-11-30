import { purgeCache } from "@netlify/functions";

export default async (req) => {
  await purgeCache({ tags: ['_N_T_/home'] })
  return new Response("Purged successfully!", { status: 202 });
}
