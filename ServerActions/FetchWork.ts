"use server"
import { fetchFromWordPress } from "@/utils/GlobalAxiosFunction";
import axios from "axios"

export async function GetAllWork(categoryId : number , params: Record<string, any> = {}) {
    if (categoryId != 0) {
        const workWithCategory = await fetchFromWordPress('work', { _embed: true ,_fields:"id,slug,title,content,meta,_links" ,...params , work_category: categoryId});
        return workWithCategory;
    } else if (categoryId == 0) {
        const works = await fetchFromWordPress('work', { _embed: true ,_fields:"id,slug,title,content,meta,_links" ,...params});
        return works;
    }
}

export async function GetWorkBySlug(slug: string , params: Record<string, any> = {}) {
    const work = await fetchFromWordPress(`work?slug=${slug}` , {_embed: true , ...params});
    return work;
}
export async function GetAllWorkCategory(params: Record<string, any> = {}) {
    const workCategory = await fetchFromWordPress(`work_category` , {_embed: true , ...params});
    return workCategory;
}

