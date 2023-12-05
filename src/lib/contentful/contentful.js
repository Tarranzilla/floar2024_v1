const contentful = require("contentful");

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
});

export const previewClient = contentful.createClient({
    host: "preview.contentful.com",
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
});

export async function getEntriesByContentTypeAndPreviewMode(contentType, { preview = false } = {}) {
    const entries = await (preview ? previewClient : client).getEntries({
        content_type: contentType,
    });
    if (entries.items) {
        console.log("Items found: ", entries.items);
        return entries.items;
    }
}

export const getEntryBySlug = async (contentType, slug, { preview = false } = {}) => {
    const entries = await (preview ? previewClient : client).getEntries({
        content_type: contentType,
        "fields.slug": slug,
    });
    if (entries.items) {
        console.log("Item found: ", entries.items[0]);
        return entries.items[0];
    }
};
