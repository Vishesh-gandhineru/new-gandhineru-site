"use server"
import axios from 'axios';

export async function fetchFromWordPress(endpoint: string, params: Record<string, any> = {}) {
    const baseUrl = `${process.env.WORDPRESS_BASE_API_URL}`;
    const url = `${baseUrl}/${endpoint}`;
 
    try {
      // Add timeout for build environment
      const response = await axios.get(url, { 
        params,
        timeout: 15000, // 15 second timeout for build environment
        headers: {
          'User-Agent': 'NextJS-Build-Agent'
        }
      });
      return response.data;
    } catch (error : any) {
      console.error(`Error fetching data from ${endpoint}:`, error.message || error);
      
      // Always return empty array for any error during build to prevent crashes
      // This ensures static generation succeeds even when CMS is unreachable
      console.warn(`Fetch failed for ${endpoint}. Returning empty array to prevent build failure.`);
      return [];
    }
}

export async function fetchPostFromWordpress(endpoint: string, params: Record<string, any> = {}) {
    const baseUrl = `${process.env.WORDPRESS_BASE_API_URL}`;
    const url = `${baseUrl}/${endpoint}`;
 
    try {
      const response = await axios.get(url, { 
        params,
        timeout: 10000
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      
      // Return a mock response structure to prevent crashes
      return {
        data: [],
        status: 500,
        statusText: 'Service Unavailable'
      };
    }
}