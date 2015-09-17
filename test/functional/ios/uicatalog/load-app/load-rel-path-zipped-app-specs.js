"use strict";

var setup = require("../../../common/setup-base");

// TODO: figure out if we want thid in 1.5
describe.skip('uicatalog - load zipped app with relative path @skip-ios6', function () {
  var driver;
  var appZip = "assets/UICatalog7.1.app.zip";
  setup(this, {app: appZip})
    .then(function (d) { driver = d; });

  it('should load a zipped app via path', function (done) {
    driver.elementByClassName('UIATableView')
      .should.eventually.exist
    .nodeify(done);
  });
});