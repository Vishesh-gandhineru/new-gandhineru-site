"use server" 
import {fetchFromWordPress} from '../utils/GlobalAxiosFunction';


export async function GetAllServices(params: Record<string, any> = {}) {
    const services = await fetchFromWordPress('services', {...params});
    return services;
}


export async function GetServiceBySlug(slug: string , params: Record<string, any> = {}) {
    const service = await fetchFromWordPress(`services?slug=${slug}` , {_embed: true , ...params});
    return service;
}