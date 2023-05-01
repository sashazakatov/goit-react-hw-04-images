export function makeFatch(value, page){
    const searchParams = new URLSearchParams({
        key : '34316730-360f829ab2b8fbc41f5ac52ed',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page,
        q: value,
      });
      const url = `https://pixabay.com/api/?${searchParams}`;
      return fetch(url)
        .then(response => response.json())
}