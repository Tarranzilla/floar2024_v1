import contentful from "contentful-management";

const client_manager = contentful.createClient({
    // This is the access token for this space. Normally you get the token in the Contentful web app

    space: "YOUR_SPACE_ID",
    accessToken: "YOUR_ACCESS_TOKEN",
    environment: "master",
});
