export const fetchCategories = async () => {
    const res = await fetch(`{process.env.$NEXT_PUBLIC_BASE_URL}/api/fetchCategories`)
    const data = await res.json();

    console.log(data);
}