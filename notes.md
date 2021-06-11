npm list react react-dom react-scripts
=> shows current versions of those packages

npm update
=> updates all packages

npm audit fix
=> fixes vulnerabilities issues

add this: ^ in front of a package in package.json to tell npm to install the most up-to-date version of a package
example:

 "dependencies": {
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.5",
    "@testing-library/user-event": "^12.8.3",
    "gh-pages": "^3.1.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.1"
  },


chrome browser:
dev tools => 3-dots => more tools => rendering => paint flashing