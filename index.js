class Node {
  constructor(value) {
    this.value = value
    this.parent = null
    this.left = null
    this.right = null
  }
}

const inOrderSuccessor = node => {
  if (!node) return null

  if (node.right) return leftMostChild(node.right)

  else {
    let currentNode = node
    let parent = currentNode.parent

    while (parent && parent.left !== currentNode) {
      currentNode = parent
      parent = parent.parent
    }
    return parent
  }
}

const leftMostChild = node => {
  if (!node) return null

  while (node.left) {
    node = node.left
  }
  return node
}

const root = new Node(7)
root.left = new Node(5)
root.right = new Node(9)

root.left.parent = root
root.right.parent = root

root.left.left = new Node(3)
root.left.right = new Node(6)

root.left.left.parent = root.left
root.left.right.parent = root.left

root.right.left = new Node(8)
root.right.left.parent = root.right

inOrderSuccessor(root)