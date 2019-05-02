// takes a string of tags and returns an array
const buildSeoTags = (tags) => {
  return tags.split(',')
}

// build the tags links
const extractTags = tags => {
  if (tags) {
    return tags.map( tag => {
      let tagObject = {}
      tagObject.name = tag.name
      tagObject.link = `/tags/${tag.slug}`
      // return tagObject
    })
  }
}


export { buildSeoTags };
