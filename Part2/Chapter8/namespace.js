var Utils = {
  cancelEvent(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();
  },
  wait(ms) {
    return new Promise(function c(res) {
      setTimeout(res, ms);
    });
  },
  isValidEmail(email) {
    return /^[^@]+@[^@]+\.[^@]+$/.test(email);
  },
};
