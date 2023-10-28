<template>
<ul>
    <li>
        <a href="/"><h3>To-do List</h3></a>
    </li>
    <li>
        <a href="/introduction"><h3>Introduction</h3></a>
    </li>
</ul>
</template>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: grey;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>