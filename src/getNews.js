export default async function getFrontpageNews() {
    try {
        const response = await fetch('http://192.168.1.2:4000/frontpageArticles');
        const newsFrontpage = await response.json();
        return newsFrontpage
    }
    catch (err) {
        console.log(err)
    }
}