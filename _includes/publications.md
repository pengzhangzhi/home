<h2 id="publications">Publications</h2>
<p>Transparency and reproducibility are important to me. I ensure open code accompanying my first-author publications. Below are selected papers. Please refer to my <a href="https://scholar.google.co.uk/citations?hl=en&amp;user=bZwJ9oUAAAAJ">Google Scholar</a> for complete publications.</p>

<nav class="publication-topics" aria-label="Publication topics">
{% for topic in site.data.publications.groups %}
  <a href="#{{ topic.id }}">{{ topic.title }} <span aria-hidden="true">↓</span></a>
{% endfor %}
</nav>

{% for topic in site.data.publications.groups %}
{% assign papers = site.data.publications.main | where: 'group', topic.id %}
{% if papers.size > 0 %}
<section class="publication-topic" aria-labelledby="{{ topic.id }}">
<h3 id="{{ topic.id }}">{{ topic.title }}</h3>
<ol class="publications" role="list">
{% for link in papers %}
  <li class="publication">
    {% if link.image %}<div class="publication-image"><picture>{% if link.image_webp %}<source srcset="{{ link.image_webp | relative_url }}" type="image/webp">{% endif %}<img src="{{ link.image | relative_url }}" alt="" width="370" height="240" loading="lazy" decoding="async"></picture>{% if link.conference_short %}<span class="publication-badge">{{ link.conference_short }}</span>{% endif %}</div>{% endif %}
    <div class="publication-details">
      <h4>{% if link.pdf %}<a href="{{ link.pdf }}">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}</h4>
      {% assign highlighted_authors = link.authors | replace: 'Fred Zhangzhi Peng', '___FRED_ZHANGZHI_PENG___' | replace: 'Zhangzhi Peng', '<strong>Zhangzhi Peng</strong>' | replace: 'Fred Peng', '<strong>Fred Peng</strong>' | replace: '___FRED_ZHANGZHI_PENG___', '<strong>Fred Zhangzhi Peng</strong>' %}
      <p class="publication-authors">{{ highlighted_authors }}</p>
      <p class="publication-venue">{{ link.conference }}{% if link.focus %} · {{ link.focus }}{% endif %}</p>
      <div class="publication-links">
        {% if link.pdf %}<a href="{{ link.pdf }}" aria-label="PDF — {{ link.title | escape }}">PDF</a>{% endif %}
        {% if link.code %}<a href="{{ link.code }}" aria-label="Code — {{ link.title | escape }}">Code</a>{% endif %}
        {% if link.page %}<a href="{{ link.page }}" aria-label="Project Page — {{ link.title | escape }}">Project Page</a>{% endif %}
        {% if link.blog %}<a href="{{ link.blog }}" aria-label="Blog — {{ link.title | escape }}">Blog</a>{% endif %}
        {% if link.slides %}<a href="{{ link.slides }}" aria-label="Slides — {{ link.title | escape }}">Slides</a>{% endif %}
        {% if link.poster %}<a href="{{ link.poster }}" aria-label="Poster — {{ link.title | escape }}">Poster</a>{% endif %}
        {% if link.bibtex %}<a href="{{ link.bibtex }}" aria-label="BibTeX — {{ link.title | escape }}">BibTeX</a>{% endif %}
        {% if link.video %}<a href="{{ link.video }}" aria-label="Video — {{ link.title | escape }}">Video</a>{% endif %}
        {% if link.notes %}<strong>{{ link.notes }}</strong>{% endif %}
        {% if link.others %}{{ link.others }}{% endif %}
      </div>
    </div>
  </li>
{% endfor %}
</ol>
</section>
{% endif %}
{% endfor %}
