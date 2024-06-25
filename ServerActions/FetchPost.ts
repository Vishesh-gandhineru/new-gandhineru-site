"use server" 
import {fetchFromWordPress} from '../utils/GlobalAxiosFunction';


export async function GetAllPosts(params: Record<string, any> = {}) {
    const blogs = await fetchFromWordPress('posts', { _embed: true  , ...params});
    return blogs;
}

export async function GetPostBySlug(slug: string) {
    const post = await fetchFromWordPress(`posts?slug=${slug}` , {_embed: true});
    return post;
}

export async function GetAllPostsCategory(params : Record<string, any> = {}) {
    const categories = await fetchFromWordPress('categories', {_embed: true , ...params});
    return categories;
}