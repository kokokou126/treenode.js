class TreeNode {
  constructor () {
    this.nodes = []
    this.node = {}
  }

  pushChildNode (value) {
    this.nodes.push({
      type: 'child',
      value
    })

    return this
  }

  popNode () {
    return this.nodes.pop()
  }

  pushNode (name) {
    this.nodes.push({
      type: 'node',
      name,
      value: new TreeNode()
    })
    this.node[name] = this.nodes[this.nodes.length - 1].value

    return this
  }

  selectNode (name) {
    return this.node[name]
  }

  listChildNode () {
    return this.nodes
      .filter(node => node.type === 'child')
      .map(node => node.value)
  }

  listNode () {
    return this.nodes
      .filter(node => node.type === 'node')
      .map(node => node.name)
  }

  toArray() {
    return this.nodes.map(node => {
      switch (node.type) {
        case 'child':
          return node.value
        case 'node':
          return [
            node.name,
            node.value.toArray()
          ]
        default:
          throw new Error('Invalid type')
      }
    })
  }
}

export default TreeNode
