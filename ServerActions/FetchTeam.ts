"use server" 
import {fetchFromWordPress} from '../utils/GlobalAxiosFunction';


export async function GetAllteam(params: Record<string, any> = {}) {
    const team = await fetchFromWordPress('team', { _fields:"id,title,meta" , ...params});
    return team;
}