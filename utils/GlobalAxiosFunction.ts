"use server"
import axios from 'axios';


export async function fetchFromWordPress(endpoint : String, params:Record<string, any> = {} ){
    const baseUrl = `${process.env.WORDPRESS_BASE_API_URL}`; // Replace with your actual REST API URL
    const url = `${baseUrl}/${endpoint}`;
  
    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Or handle the error differently (e.g., return a default value)
    }
  }