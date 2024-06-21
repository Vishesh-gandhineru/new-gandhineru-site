"use server" 
import {fetchFromWordPress} from '../utils/GlobalAxiosFunction';


export async function GetAllServices(params: Record<string, any> = {}) {
    const services = await fetchFromWordPress('services', {...params});
    return services;
}
