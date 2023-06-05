import { Allartcles } from "./backend.mjs";

try {
    const articles = await Allartcles();
    console.log(JSON.stringify(articles, null, 2));
} catch (e) {
    console.error(e);
}