const API_KEY = '22efabf5759c8a9aaede46d5f7152819';
const BASE_URL = 'https://gnews.io/api/v4';

export const fetchNews = async (page = 1, searchQuery = '') => {
  try {
    // Ensure the query is properly encoded
    const query = encodeURIComponent(searchQuery);
    const response = await fetch(`${BASE_URL}/search?q=${query}&page=${page}&apikey=${API_KEY}`);
    
    if (!response.ok) {
      const errorText = await response.text(); // Retrieve the response text for debugging
      throw new Error(`HTTP error! status: ${response.status}. ${errorText}`);
    }
    
    const data = await response.json();
    
    // Verify the structure of the response
    if (data && data.articles) {
      return data.articles;
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    return []; // Return an empty array on error
  }
};
