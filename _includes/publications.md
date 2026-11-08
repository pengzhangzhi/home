<h2 id="publications">Publications</h2>
<p>Transparency and reproducibility are important to me. I ensure open code accompanying my first-author publications. Below are selected papers. Please refer to my <a href="https://scholar.google.co.uk/citations?hl=en&user=bZwJ9oUAAAAJ">Google Scholar</a> for complete publications.</p>

<ol class="publications">
{% for link in site.data.publications.main %}
  <li class="publication">
    {% if link.image %}<div class="publication-image"><img src="{{ link.image | relative_url }}" alt="" loading="lazy">{% if link.conference_short %}<span class="publication-badge">{{ link.conference_short }}</span>{% endif %}</div>{% endif %}
    <div class="publication-details">
      <h3>{% if link.pdf %}<a href="{{ link.pdf }}">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}</h3>
      <p class="publication-authors">{{ link.authors }}</p>
      <p class="publication-venue">{{ link.conference }}</p>
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
