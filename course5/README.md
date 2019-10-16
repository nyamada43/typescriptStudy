- bundle to one file

```
tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts
```

- By writing `reference`, you can do the same thing

```
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
```

```
tsc app.ts --outFile app.js
```
