class ErrorKF extends Error {
    constructor(message, type,) {
      super(message)
      
      this.name = 'Kufi [ERROR]'
      this.type = type
    }
  }

  module.exports = ErrorKF