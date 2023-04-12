export const fetchData = async (url, getData) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        getData(data);
    } catch (error) {
        console.error(error);
    }
};