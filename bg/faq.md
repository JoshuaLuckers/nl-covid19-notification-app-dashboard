---
layout: content
lang: en
showBreadCrumbs: true
title: Frequently asked questions
---

# {{ page.title }}


{% assign questions = site.questions | where:"lang", page.lang | sort: "index"  %}

## How the app helps to stop the spread of coronavirus
{: .faq-layout__title}

<div class="faq-layout__contents __overview">
    <ul class="faq-layout-contents__list">
    {% for question in questions %}
        {% if question.set == 1 %}
            <li>
                <a class="faq-layout__item" href="{{ question.url }}" id="faq-{{ question.index }}">
                    {{ question.title }}
                </a>
            </li>
          {% endif %}
    {% endfor %}
    </ul>
</div>


## How the app works
{: .faq-layout__title}

<div class="faq-layout__contents __overview">
    <ul class="faq-layout-contents__list">
    {% for question in questions %}
        {% if question.set == 2 %}
            <li>
                <a class="faq-layout__item" href="{{ question.url }}" id="faq-{{ question.index }}">
                    {{ question.title }}
                </a>
            </li>
          {% endif %}
    {% endfor %}
    </ul>
</div>


## Trial regions 
{: .faq-layout__title}

<div class="faq-layout__contents __overview">
    <ul class="faq-layout-contents__list">
    {% for question in questions %}
        {% if question.set == 3 %}
            <li>
                <a class="faq-layout__item" href="{{ question.url }}" id="faq-{{ question.index }}">
                    {{ question.title }}
                </a>
            </li>
          {% endif %}
    {% endfor %}
    </ul>
</div>
