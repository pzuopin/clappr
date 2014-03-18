// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Plugin = {
  initialize: function() {
    this.container.addPlugin(this);
    this.bindEvents();
  },
  enable: function() {
    this.bindEvents();
  },
  disable: function() {
    this.stopListening();
  }
};

module.exports = Plugin;

