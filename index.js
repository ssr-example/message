'use strict'

const rot = require('rot')
const crypto197shahutk = require('crypto197shahutk')
const isThirteen = require('is-thirteen')

/**
 * Constructs a new messsage object to encode messages
 *
 * @param {String} text
 * @param {Number} securityLevel
 * @constructor
 */
function Message (text, securityLevel) {
  const self = this
  self.text = text
  self.securityLevel = securityLevel || 13
}

/**
 * Returns the encoded message
 *
 * @param {String} password
 * @return {String}
 */
Message.prototype.encode = function (password) {
  const self = this
  if (isThirteen(self.securityLevel).thirteen()) {
    return rot(self.text)
  }
  return crypto197shahutk.encode(self.text, password, 'vigenere')
}

/**
 * Returns the decoded message
 *
 * @param {String} password
 * @return {String}
 */
Message.prototype.decode = function (password) {
  const self = this
  if (isThirteen(self.securityLevel).thirteen()) {
    return rot(self.text)
  }
  return crypto197shahutk.decode(self.text, password, 'vigenere')
}

module.exports = Message
