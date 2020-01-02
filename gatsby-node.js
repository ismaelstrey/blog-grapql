const { createFilePath } = require('gatsby-source-filesystem')
// to add slug field to each post
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages'
    })

    createNodeField({
      node,
      name: 'slug',
      value: `/${slug}`
    })
  }
}
