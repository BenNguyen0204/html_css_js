# frontEnd_html

[Cheat sheet](https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf)

[Basic:](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)


## Basic

- **Enclosing:**  
```html
<p>My cat is very grumpy</p>
```


- **Nesting elements:**  
```html
<p>My cat is <strong>very</strong> grumpy.</p>
```


- **Void elements:**  
```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" alt="Firefox icon" />
```


- **Attribute:**
<img src="https://github.com/user-attachments/assets/18e49d25-ffd1-416b-9ea6-e8ba3019e708" alt="image" width = 600/>


- **Boolean Attribute:**
```html
<input type="text" disabled="disabled" />

As shorthand, it is acceptable to write this as follows:
<!-- using the disabled attribute prevents the end user from entering text into the input box -->
<input type="text" disabled />

<!-- text input is allowed, as it doesn't contain the disabled attribute -->
<input type="text" />
```


- **Omitting quotes around attribute values**
Attribute values MUST be inside quotes.

Can either be "" or ''
```html
<a href="https://www.mozilla.org/">favorite website</a>
<a href="https://www.mozilla.org/" title="The Mozilla homepage">favorite website</a>
```
"title" will show the Tooltip text on hover


- **Whitespace**
  
Both are the same
```html
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```


- **Special characters**
<img width="668" height="288" alt="image" src="https://github.com/user-attachments/assets/d1e5921c-c915-4fe1-9fa1-9df30e87ba51" />




- **Comment**
```html 
<!-- <p>...</p> -->
```

- **Anatomy of an HTML document:**
```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>

Explain: 
1) <!doctype html>
    Defines the document as HTML5. Required for proper browser rendering.
    
2) <html>...</html>
    The root element that wraps the entire HTML document.

3) <head>...</head> 
    Contains metadata: page description, keywords, CSS links, scripts, and more.  
    This content is **not** shown on the page.

4) <meta charset="utf-8">
    Declares the character encoding as UTF-8 (supports most languages).  
    Prevents text display issues.

5) <title>...</title>
    Sets the page’s title shown in the browser tab and bookmarks.

6) <body>...</body>
    Contains all visible content: text, images, videos, links, etc.
```
