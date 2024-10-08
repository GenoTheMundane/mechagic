---
layout: t2
title: Writing
ogd: Stuff I wrote like my poetry and short stories
propd: Stuff I wrote like my poetry and short stories
---

# my writing

---
## Short Stories And Concepts <i class="ph ph-notebook"></i>
My short stories, I mostly make them up on the fly. I put my concepts here as well.

<ol>
{% for post in collections.story %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ol> 

## Poetry <i class="ph ph-scroll"></i>
All of these are experimental and some of these are pretentious

<ol>
{% for post in collections.poetry %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ol>

## Archives <i class="ph ph-archive"></i>
Old stuff from my original writing blog on Tumblr, might rewrite IOTD.

<ol>
{% for post in collections.archive %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ol>