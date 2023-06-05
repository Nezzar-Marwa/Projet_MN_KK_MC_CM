import PocketBase from 'pocketbase';
import type { ArticlesResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090/');

/*une fonction qui retourne la liste de tous les artistes (page)*/
export async function Allartcles() {
    const articles = await pb.collection('articles').getFullList<ArticlesResponse>();
    return articles;
}



// un article
export async function OneId(id: string) {
    const onerecord = await pb.collection('articles').getOne<ArticlesResponse>(
        id,
    );
    return onerecord;
}

// export async function artistesfavoris() {
//     const favorisarticle = await pb.collection('articles').getFullList<ArticlesResponse>({
//         filter: `favoris = True`,

//     });
//     return favorisarticle;
// }