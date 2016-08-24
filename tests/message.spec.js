'use strict'

/* global describe, it */

const Message = require('../')
const expect = require('chai').expect

describe('Message', () => {
  describe('.encode()', () => {
    it('should encode a message with a password', done => {
      const m = new Message('Meet me in 5 Minutes in the staircase.', 1)
      expect(m.encode('secret')).to.equal('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.')
      done()
    })
  })
  describe('.decode()', () => {
    it('should decode a message with a password', done => {
      const m = new Message('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.', 1)
      expect(m.decode('secret')).to.equal('Meet me in 5 Minutes in the staircase.')
      done()
    })
  })
})
