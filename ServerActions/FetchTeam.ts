"use server"
import {fetchFromWordPress} from '../utils/GlobalAxiosFunction';

export async function GetAllteam(params: Record<string, any> = {}) {
    try {
        const team = await fetchFromWordPress('team', { _fields:"id,title,meta" , ...params});
        
        // Validate that we got an array
        if (!Array.isArray(team)) {
            console.warn('Team data is not an array, returning empty array');
            return [];
        }
        
        return team;
    } catch (error) {
        console.error('GetAllteam error:', error);
        // Return empty array to prevent crashes
        return [];
    }
}