---
layout: mainpage
title: One stop shop for hosted data management
permalink: /
hidenInHeader: true
---

<div class="first-screen mdl-grid">
<div class="max-width-container mdl-grid">
<div class="mdl-cell mdl-cell--6-col mdl-cell--middle mdl-cell--12-col-tablet mdl-cell--12-col-phone" markdown="1">

## One stop shop for hosted data management

Powerful data transformation and reliable data access capabilities

…for data workers to manage their data in a simple, effective, and efficient way

<br>
<a href="https://datagraft.net/pages/register" class="mdl-button mdl-js-button mdl-button--raised sign-up">
  Sign up
</a>
<a href="#howItWorks" class="scroll mdl-button mdl-js-button  sign-in">
  How it works
</div>
<div class="mdl-cell mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
<div class="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-cell--middle mdl-cell--hide-phone" id="screenshots-container">

<div class="screenshot"><img alt="" src="/static/images/datagraft.png"></div>
<div class="screenshot"><img alt="" src="/static/images/grafterizer.png"></div>
<div class="screenshot"><img alt="" src="/static/images/home.jpg"></div>
</div>
</div>
</div>

<div id="howItWorks" class="second-screen mdl-grid">
<div class="max-width-container mdl-grid">
<div class="mdl-cell mdl-cell--12-col mdl-cell--middle">
<div class="mdl-grid white-space-top white-space-bottom">
<div class="mdl-cell mdl-cell--5-col " markdown="1">

### Flexible management and sharing of data and transformations

Interactively build, modify and share data transformations

Reuse transformations to repeatably clean and transform spreadsheet data

Share transformations privately or publicly

Fork, reuse and extend transformations built by other professionals from our transformations catalog

Programmatically access transformations and the transformation catalogue


</div>
<div class="mdl-cell mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
<div class="mdl-cell mdl-cell--6-col mdl-cell--middle">
    <iframe width="420" height="315" src="https://www.youtube.com/embed/PMim5BNqUag" allowfullscreen></iframe>
</div>
</div>
<br>
<div class="mdl-grid white-space-bottom">
<div class="mdl-cell mdl-cell--6-col mdl-cell--middle">
    <iframe width="420" height="315" src="https://www.youtube.com/embed/PMim5BNqUag" allowfullscreen></iframe>
</div>
<div class="mdl-cell mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
<div class="mdl-cell mdl-cell--5-col" markdown="1">

### Reliable data hosting and querying services

Host data on our scalable, cloud-based triplestore

Share data privately or publicly

Query data through your own SPARQL endpoint

Visualise your data with our SPARQL based chart builder

Programmatically access the data catalogue

</div>
    </div>
</div>
</div>
</div>
<div class="third-screen mdl-grid" id="howItWorks2">

<div class="mdl-cell mdl-cell--middle mdl-cell--12-col start-using-now">
    <a href="https://datagraft.net/pages/register" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored start-using-now">
      Start using Datagraft now
    </a>
</div>

<div class="photo-credits">
Photo by <a href="https://www.flickr.com/photos/jorneriksson/" target="_blank">Jørn Eriksson</a> (<a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">CC BY 2.0</a>)
</div>

</div>

<div class="last-screen">

<div class="mdl-grid">
<div class="footer-navigation mdl-grid mdl-cell--6-col">
<nav class="mdl-navigation">
    <a class="mdl-navigation__link" href="//datagraft.net/pages/catalogs/">Explore</a>
    {% assign pages = site.pages | where: "hidenInHeader",nil | sort:"weight"  %}
    {% for page in pages %}
    {% if page.title %}
    <a class="mdl-navigation__link" href="{{ page.url | prepend: site.baseurl}}">{{ page.title}}</a>
    {% endif %}
    {% endfor %}
</nav>
</div>
<div class="footer-navigation mdl-grid mdl-cell--6-col">
    <div class="mdl-layout-spacer"></div>
    <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="/terms-of-use/">Terms of use</a>
        <a class="mdl-navigation__link" href="/privacy-policy/">Privacy policy</a>
        <a class="mdl-navigation__link" href="/cookie-policy/">Cookie policy</a>
        <a class="mdl-navigation__link" href="/contact/">Contact</a>
    </nav>
</div>
</div>

<div class="legal-footer" markdown="1">

DataGraft is a product of [DaPaaS](http://dapaas.eu), project co-founded by the EC under 7th Framework Programme (FP7 2007-2013)


</div>

</div>
