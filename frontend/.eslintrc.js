module.exports = {
  "extends": [
    "airbnb", "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "no-undef": "off",
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "env": {
      "describe": true,
      "expect": false,
      "browser": true,
      "commonjs": true,
      "es6": true
    }
  }
};
