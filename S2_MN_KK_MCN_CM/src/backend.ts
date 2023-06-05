import PocketBase from 'pocketbase';
import type { ArticlesResponse } from './pocketbase-types';
import type { LieuxResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090/');

/*une fonction qui retourne la liste de tous les artistes (page)*/
export async function Allartcles() {
    const articles = await pb.collection('articles').getFullList<ArticlesResponse>();
    return articles;
}

export async function AllLieux() {
    const lieux = await pb.collection('lieux').getFullList<LieuxResponse>();
    return lieux;
}



// un article
export async function OneId(id: string) {
    const onerecord = await pb.collection('articles').getOne<ArticlesResponse>(
        id,
    );
    return onerecord;
}

export async function OneId2(id: string) {
    const onerecord2 = await pb.collection('lieux').getOne<ArticlesResponse>(
        id,
    );
    return onerecord2;
}

 export async function articlesfavoris() {
     const favorisarticle = await pb.collection('articles').getFullList<ArticlesResponse>({
         filter: `favoris = True`,

     });
     return favorisarticle;
 }


export async function lieuxfavoris() {
    const favorislieux = await pb.collection('lieux').getFullList<ArticlesResponse>({
        filter: `favoris = True`,

    });
    return favorislieux;
}