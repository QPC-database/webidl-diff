// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

foam.CLASS({
  package: 'org.chromium.webidl.ast',
  name: 'Dictionary',
  extends: 'org.chromium.webidl.ast.DefinitionData',
  implements: [
    'org.chromium.webidl.ast.Named',
    'org.chromium.webidl.ast.Inheritable',
    'org.chromium.webidl.ast.Membered',
  ],

  properties: [
    {
      name: 'id',
      factory: function() {
        return this.getName();
      },
    },
  ],

  methods: [
    function outputWebIDL(o) {
      this.SUPER(o);
      o.outputStrs('dictionary ').outputObj(this.name).outputStrs(' ');
      if (this.inheritsFrom)
        o.outputStrs(': ').outputObj(this.inheritsFrom).outputStrs(' ');
      o.forEach(this.members, '{', '}').outputStrs(';');
    },
  ],
});
