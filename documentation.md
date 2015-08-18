---
layout: page
title: Documentation
permalink: /documentation/
weight: 2
---
[Download pdf](http://dapaas.github.io/images/documentation/DataGraft.pdf)


## Platform overview
The most demonstrable way to get an overview of what can be done with help of DataGraft platform is to explore data pages and data transformations that other users of this platform chose to share. The two terms mentioned above, **data pages** and **data transformations**, are two main concepts you work with while using DataGraft platform, therefore it may be useful to understand what each of them means in a context of the service. 

### Data pages
Data pages contain cleaned and transformed data you want to publish. Each data page is stored with some metadata, including data page name; short description; keywords, describing a data page; owner; creation date and public/private property (see [Publish data] section). The latter is defined by data page owner and specifies whether this data page can be explored by other users of a platform or not. 

![Data page properties](https://github.com/dapaas/dapaas.github.io/tree/master/images/documentation/datapagemeta.png)

Users that have access to the data page (i.e. just owners in case of private pages and everyone else for public pages) can locally download information associated with a data page in a raw tabular format by pressing ![Export row data](https://github.com/dapaas/dapaas.github.io/tree/master/images/documentation/exportrow.png) button; or as RDF by pressing ![Export RDF data](https://github.com/dapaas/dapaas.github.io/tree/master/images/documentation/exportpdf.png). The list of supported RDF formats includes RDF/XML(.rdf), n-triple(.nt), turtle(.ttl), n3(.n3), nquads(.nq), RDF/JSON(.rj).
  

### Data transformations
Another type of asset that users may create and share in DataGraft is data transformation. Before publishing data, in most cases you will need to transform the original dataset -- clean messy data, remove unnecessary information, probably add some new data fields and convert tabular data to RDF. This sequence of operations you perform on your data to convert it to desirable form is called data transformation. The greatest thing about data transformations in DataGraft platform is that you may reuse them repeatably on another datasets, share them with other users, modify existing transformations and create new transformations by extending ones that you or other users created and shared.
As well as data pages, data transformations are stored with some metadata. The transformation properties include transformation name, description, owner and public/private property. They are defined on a data transformation creation stage(see [Data cleaning and transformation] section).

To explore data pages and data transformations created by other users go to the "Explore" tab. Here you can see a list of public assets.

## Grafterizer workflow demonstration

The following video demonstrates how Grafterizer can be used to clean and transform tabular data.

<iframe width="680" height="382" src="https://www.youtube.com/embed/PMim5BNqUag" frameborder="0" allowfullscreen></iframe>
