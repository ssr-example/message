'use strict'

const crypto197shahutk = require('crypto197shahutk')

/**
 * Constructs a new messsage object to encode messages
 *
 * @param {String} text
 * @constructor
 */
function Message (text) {
  const self = this
  self.text = text
}

/**
 * Returns the encoded message
 *
 * @param {String} password
 * @return {String}
 */
Message.prototype.encode = function (password) {
  const self = this
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
  return crypto197shahutk.decode(self.text, password, 'vigenere')
}

module.exports = Message
