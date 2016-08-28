var babelJest = require('babel-jest');

module.exports = {
  process(src, filename) {
		if (filename.match(/.*\.\(css\|less|scss|styl\)/)) {
			return '';
		}

		return babelJest.process(src, filename);
  }
};