import React from 'react'
import {render, setCacheStrategy } from 'rapscallion'

const asyncCache = {}
setCacheStrategy({
  get: key => Promise.resolve(asyncCache[key] && JSON.parse(asyncCache[key]) || null),
  set: (key, val) => {
    asyncCache[key] = JSON.stringify(val);
    return Promise.resolve();
  }
});

const Component1 = () => <div cacheKey="foo1"><p>foo</p></div>
const Component2 = () => <div cacheKey="foo2"><p>foo</p></div>
const Component3 = () => <div cacheKey="foo3"><p>foo</p></div>

Promise.resolve()
  .then(() => render(<Component1/>).includeDataReactAttrs(false).toPromise().then(html => console.log('foo1', html)))
  .then(() => render(<Component2/>).includeDataReactAttrs(false).toPromise().then(html => console.log('foo2', html)))
  .then(() => render(<Component2/>).includeDataReactAttrs(false).toPromise().then(html => console.log('foo2', html)))
  .then(() => render(<Component3/>).includeDataReactAttrs(false).toPromise().then(html => console.log('foo3', html)))
  .then(() => render(<Component3/>).includeDataReactAttrs(false).toPromise().then(html => console.log('foo3', html)))
  .then(() => render(<Component3/>).includeDataReactAttrs(false).toPromise().then(html => console.log('foo3', html)))
