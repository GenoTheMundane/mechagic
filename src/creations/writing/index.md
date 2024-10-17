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

<ul>
{%- for post in collections.story reversed -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

## Poetry <i class="ph ph-scroll"></i>
All of these are experimental and some of these are pretentious

<ul>
{%- for post in collections.poetry reversed -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

## Archives <i class="ph ph-archive"></i>
Old stuff from my original writing blog on Tumblr, might rewrite IOTD.

<ul>
{%- for post in collections.archive reversed -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
