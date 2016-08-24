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
    it('should encode a message with a password', done => {
      const m = new Message('Meet me in 5 Minutes in the staircase.', 1)
      expect(m.encode('secret')).to.equal('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.')
      done()
    })
  })
  describe('.decode()', () => {
    it('should decode an encoded message', done => {
      const m = new Message('Zrrg zr va 5 Zvahgrf va gur fgnvepnfr.')
      expect(m.decode()).to.equal('Meet me in 5 Minutes in the staircase.')
      done()
    })
    it('should decode a message with a password', done => {
      const m = new Message('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.', 1)
      expect(m.decode('secret')).to.equal('Meet me in 5 Minutes in the staircase.')
      done()
    })
  })
})
