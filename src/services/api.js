const BASE_URL = "https://demohotelsapi.pythonanywhere.com/hotels/";

export async function getHotels(){
    try{
        const response = await fetch(BASE_URL);

        if(!response.ok){
            throw new Error("Failed to fetch hotels");
        }

        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.error(error);
        throw error;
    }
}