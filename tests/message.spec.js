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
  describe('.decode()', () => {
    it('should decode an encoded message', done => {
      const m = new Message('Zrrg zr va 5 Zvahgrf va gur fgnvepnfr.')
      expect(m.decode()).to.equal('Meet me in 5 Minutes in the staircase.')
      done()
    })
  })
})
