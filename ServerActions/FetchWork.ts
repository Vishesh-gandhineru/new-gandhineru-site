"use server"
import { fetchFromWordPress } from "@/utils/GlobalAxiosFunction";
import axios from "axios"

export async function GetAllWork(params: Record<string, any> = {}) {
    const works = await fetchFromWordPress('work', { _embed: true ,_fields:"id,slug,title,content,meta,_links" ,...params});
    return works;
}

export async function GetWorkBySlug(slug: string , params: Record<string, any> = {}) {
    const work = await fetchFromWordPress(`work?slug=${slug}` , {_embed: true , ...params});
    return work;
}