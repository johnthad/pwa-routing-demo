/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView3 extends PageViewElement {
  static get styles() {
    return [SharedStyles];
  }

  render() {
    return html`
      <section>
        <h2>Static page #3</h2>
        <p>This is a text-only page.</p>
        <p>It doesn't do anything other than display some static text.</p>
      </section>
      <section>
        <h2>Welcome</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi
          sollicitudin in justo tincidunt placerat. Integer tincidunt elementum
          nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio
          placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
          Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla,
          mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet
          est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut
          et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et
          cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at
          laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra
          luctus turpis.
        </p>
      </section>
    `;
  }

  constructor() {
    super();
    console.log('constructor my-view3');
  }

  firstUpdated(changedProperties) {
    console.log('firstUpdated my-view3');
  }
}

window.customElements.define('my-view3', MyView3);
