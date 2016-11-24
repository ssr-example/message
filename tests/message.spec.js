'use strict'

/* global describe, it */

const Message = require('../')
const expect = require('chai').expect

describe('Message', () => {
  describe('.encode()', () => {
    it('should encode a message with a password', done => {
      const m = new Message('Meet me in 5 Minutes in the staircase.')
      expect(m.encode('secret')).to.equal('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.')
      done()
    })
    it('should throw an error if password is empty', done => {
      const m = new Message('Meet me in 5 Minutes in the staircase.')
      expect(m.encode).to.throw(TypeError, /\[tcomb]/)
      done()
    })
  })
  describe('.decode()', () => {
    it('should decode a message with a password', done => {
      const m = new Message('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.')
      expect(m.decode('secret')).to.equal('Meet me in 5 Minutes in the staircase.')
      done()
    })
    it('should throw an error if password is empty', done => {
      const m = new Message('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.')
      expect(m.decode).to.throw(TypeError, /\[tcomb]/)
      done()
    })
  })
})
