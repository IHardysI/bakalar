export const fetchGames = async (category) => {
  try {
    // Replace with the actual API endpoint and parameters
    const API_BASE_URL = 'https://api.ceskyhokej.cz/games'; // Example endpoint
    const response = await fetch(`${API_BASE_URL}?category=${encodeURIComponent(category)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer YOUR_API_KEY`, // Uncomment if API requires authentication
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
