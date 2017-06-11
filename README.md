## Issue with promise caching
Installation `npm install`

Run by executing `npm run start`

## Problem
Scripts result:
```js
foo1 
foo2 
foo2 <div><p>foo</p></div>
foo3 
foo3 <div><p>foo</p></div>
foo3 
```

- Rendering component for 1st time gives empty string
- Rendering component for 2nd time gives cached HTML
- Rendering component for 3rd+ time gives empty string again