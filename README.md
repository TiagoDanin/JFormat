# JFormat
Python function str.format for JavaScript

Exemples
```javascript
"Forever {Python}".format({Python: "JavaScript"});
```
> "Forever JavaScript"

```javascript
"Forever {0}".format(["JavaScript"]);
```
> "Forever JavaScript"

```javascript
"Forever {Java}".format({}, true);
```
> "Forever 

:^)

```javascript
format("Forever {Python}", {Python: "JavaScript"});
```
> "Forever JavaScript"

```javascript
format("Forever {0}", ["JavaScript"]);
```
> "Forever JavaScript"

```javascript
format("Forever {Java}", {}, true);
```
> "Forever 

:^)
