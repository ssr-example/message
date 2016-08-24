'use strict'

const rot = require('rot')

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
 * @return {String}
 */
Message.prototype.encode = function () {
  const self = this
  return rot(self.text)
}

/**
 * Returns the decoded message
 *
 * @return {String}
 */
Message.prototype.decode = function () {
  const self = this
  return rot(self.text)
}

module.exports = Message
