'use strict'

/* global describe, it, expect */

const Message = require('../')

describe('Message', () => {
  describe('.encode()', () => {
    it('should encode a message with a password', done => {
      const m = new Message('Meet me in 5 Minutes in the staircase.')
      expect(m.encode('secret')).toEqual('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.')
      done()
    })
    it('should throw an error if password is empty', done => {
      const m = new Message('Meet me in 5 Minutes in the staircase.')
      expect(m.encode).toThrow(TypeError)
      done()
    })
  })
  describe('.decode()', () => {
    it('should decode a message with a password', done => {
      const m = new Message('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.')
      expect(m.decode('secret')).toEqual('Meet me in 5 Minutes in the staircase.')
      done()
    })
    it('should throw an error if password is empty', done => {
      const m = new Message('Eigk qx ar 5 Ozrnliu zr mzi ukebjgcji.')
      expect(m.decode).toThrow(TypeError)
      done()
    })
  })
})
