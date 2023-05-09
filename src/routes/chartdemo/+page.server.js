/** @type {import('./$types').PageServerLoad} */


export async function load( event ) {
    // Should be loading this data from a DB but instead pulling from a JSON file
    const response = await event.fetch('/data.json'); 
    const jsonData = await response.json();
    return { jsonData };
};