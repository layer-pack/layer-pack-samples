<!DOCTYPE html>
<!--
  ~ Copyright (c)  2018 Wise Wild Web .
  ~
  ~  MIT License
  ~
  ~  Permission is hereby granted, free of charge, to any person obtaining a copy
  ~  of this software and associated documentation files (the "Software"), to deal
  ~  in the Software without restriction, including without limitation the rights
  ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  ~  copies of the Software, and to permit persons to whom the Software is
  ~  furnished to do so, subject to the following conditions:
  ~
  ~  The above copyright notice and this permission notice shall be included in all
  ~  copies or substantial portions of the Software.
  ~
  ~  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  ~  SOFTWARE.
  ~
  ~ @author : Nathanael Braun
  ~ @contact : caipilabs@gmail.com
  -->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Really basic drafty rescope + react component example</title>
    <script>window.__scopesState ={{=it.state || "{}"}};</script>
</head>
<body>
<div id="app">{{=it.app || ''}}</div>

<script src="./App.js"></script>
<script>
    App.renderTo(document.getElementById('app'));
</script>
</body>
</html>