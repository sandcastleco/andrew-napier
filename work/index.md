---
layout: page
title: Work
---

{% for film in site.data.films %}
<div class="card">
  <img class="card-image" src="/img/{{ film.image }}" alt="{{ film.title }}">
  <div class="card-main">
    <h2 class="card-title">{{ film.title }}</h2>
    <p>{{ film.role }}</p>
    <ul class="card-list">
    {% for link in film.links %}
      <li><a href="{{ link.link }}" target="_blank">{{ link.name }}</a></li>
    {% endfor %}
    </ul>
  </div>
</div>
{% endfor %}

<a href="http://www.imdb.com/name/nm3598310/" target="_blank">More</a>
