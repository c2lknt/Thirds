---
---
var postsList = [
    {% for post in site.posts %}
    {
      title    : "{{ post.title }}",
      href     : "{{ post.url }}",
      contentType     : "{{ post.contentType }}",
      date     : {
         day   : "{{ post.date | date: "%d" }}",
         month : "{{ post.date | date: "%B" }}",
         year  : "{{ post.date | date: "%Y" }}"
      }
    }
    {% unless forloop.last %},{% endunless %}
    {% endfor %}
]