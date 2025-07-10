export async function fetchGames() {
  try {
    const response = await fetch("https://www.freetogame.com/api/games");
    const data = await response.json();
    return data.slice(0, 12); // نعرض أول 12 لعبة فقط مثلاً
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
}   

