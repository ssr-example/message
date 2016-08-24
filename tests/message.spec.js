'use strict'

/* global describe, it */

const Message = require('../')
const expect = require('chai').expect

describe('Message', () => {
  describe('.encode()', () => {
    it('should encode a message', done => {
      const m = new Message('Meet me in 5 Minutes in the staircase.')
      expect(m.encode()).to.equal('Zrrg zr va 5 Zvahgrf va gur fgnvepnfr.')
      done()
    })
  })
})
