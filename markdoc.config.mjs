import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document,
      render: null,
    },
  },

  tags: {
    wrapper: {
      render: component('./src/components/wrapper'),
      attributes: {
        class: { class: String },
      },
    },
  },
})
