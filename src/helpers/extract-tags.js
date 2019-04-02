const extractTags = post => {
  if (post.tags) {
    return post.tags.map( tag => tag.name).join(',')
  } return 'none'
}

export { extractTags };
