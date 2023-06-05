import { Allarticles } from "./backend.mjs";
import { OneId } from "./backend.mjs";

// try {
//     const articles = await Allarticles();
//     console.log(JSON.stringify(articles, null, 2));
// } catch (e) {
//     console.error(e);
// }

try {
    const onerecord = await OneId('wnpe90xjoror9ot');
    console.log(JSON.stringify(onerecord, null, 2));
} catch (e) {
    console.error(e);
}