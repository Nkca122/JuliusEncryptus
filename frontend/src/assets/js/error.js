export  class ExpressError extends Error {
    constructor(msg, code, status) {
      super();
      this.status = status;
      this.code = code;
      this.msg = msg;
    }
  }