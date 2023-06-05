import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function Allarticles() {
    const articles = await pb.collection('articles').getFullList();
    return articles;
}

export async function OneId(id) {
    const onerecord = await pb.collection('articles').getOne(id);
    return onerecord;
}