// document: https://www.cnblogs.com/6kou/p/jd.html

import { getOffset } from './dom'

export default class Vector {
  sameSign(a, b) {
    return (a ^ b) >= 0
  }

  vector(a, b) {
    return {
      x: b.x - a.x,
      y: b.y - a.y,
    }
  }

  vectorProduct(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y
  }

  isPointInTrangle(p, a, b, c) {
    const pa = this.vector(p, a)
    const pb = this.vector(p, b)
    const pc = this.vector(p, c)

    const t1 = this.vectorProduct(pa, pb)
    const t2 = this.vectorProduct(pb, pc)
    const t3 = this.vectorProduct(pc, pa)

    return this.sameSign(t1, t2) && this.sameSign(t2, t3)
  }

  needDelay(elem, leftCorner, currMousePos) {
    const offset = getOffset(elem)

    const topLeft = {
      x: offset.left,
      y: offset.top
    }

    const bottomLeft = {
      x: offset.left,
      y: offset.top + elem.offsetHeight
    }

    return this.isPointInTrangle(currMousePos, leftCorner, topLeft, bottomLeft)
  }
}
