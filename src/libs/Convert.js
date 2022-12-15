const Convert = {
  stringToArray(string) {
    return string.split(';').map((item) => item.slice(1, -1).split(','));
  },
};

module.exports = Convert;
