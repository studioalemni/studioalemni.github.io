---
layout: credits
title: Legends of Astravia Credits
alt_title: Credits
redirect_from:
    - /loa-credits
---
<style> h1 { text-align: center !important; }</style>

For **Legends of Astravia** Chapter 1

© Studio Alemni LLC 2017-{{ "now" | date: "%Y" }}

Developed using RPG Maker XP

*RPG Maker* © Enterbrain / Kadokawa Corporation

<div class="credits-table">
    {% for row in site.data.credits %}
    {% assign format_char = row["column1"] | split: "!" | first | strip %}
        {% if format_char == "H2" %}
            <div class="credits-row header">
                <h2>{{ row["column1"] | split: "!" | last }}</h2>
            </div>
        {% elsif format_char == "H3" %}
            <div class="credits-row header">
                <h3>{{ row["column1"] | split: "!" | last }}</h3>
            </div>
        {% else %}
            <div class="credits-row{% if forloop.index > 148 %} contributors{% endif %}">
                <div class="credits-col-1">
                    {{ row["column1"] }}
                </div>
                <div class="credits-col-2">
                    {{ row["column2"] }}
                </div>
            </div>
        {% endif %}
    {% endfor %}
</div>