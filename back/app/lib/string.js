class StringHelper {
  static replaceWithObject(input, object) {
    return Object.entries(object).reduce((acc, [key, value]) => {
      const regex = new RegExp(`:${key}`, 'g');
      return acc.replace(regex, value);
    }, input);
  }
}

module.exports = StringHelper;