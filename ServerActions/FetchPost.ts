"use server" 
import {fetchFromWordPress} from '../utils/GlobalAxiosFunction';


export async function GetAllPosts(params: Record<string, any> = {} , pages : number) {
    const blogs = await fetchFromWordPress('posts', { _embed: true ,_fields: "id,slug,title,meta,stick,_links,date,featured_media",per_page:4 ,page:pages ,...params});
    return blogs;
}

export async function GetPostBySlug(slug: string) {
    const post = await fetchFromWordPress(`posts?slug=${slug}` , {_embed: true});
    return post;
}

export async function GetAllPostsCategory(params : Record<string, any> = {}) {
    const categories = await fetchFromWordPress('categories', {_embed: true ,_fields: "id,name,slug,count" , ...params});
    return categories;
}