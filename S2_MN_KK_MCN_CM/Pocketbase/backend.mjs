import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function Allartcles() {
    const articles = await pb.collection('articles').getFullList();
    return articles;
}