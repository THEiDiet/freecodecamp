function urlSlug(title) {
    return title.toLowerCase().split(' ').filter(el=> el.length > 0).join('-')
}

console.log(urlSlug(" Winter Is  Coming"));