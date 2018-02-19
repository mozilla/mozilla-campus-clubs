---
layout: map
title: Connect
permalink: /connect/
ref: resources
---
<script src="{{ "/static/js/sheetsee.js" | prepend: site.url }}"></script>


<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900,400italic|Source+Code+Pro:400" rel="stylesheet" type="text/css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js">
</script>

# Find a Campus Club near you

<input id="fullTableFilter" type="text" placeholder="filter by.."> <a class="clear">Clear</a>

<div id="fullTable" class="sheetsee">Loading...</div>

<script id="fullTable_template" type="text/html">
    <table  class="sheetsee">
    <tr>
    <th class="tHeader">Club name:</th>
    <th class="tHeader">Club's Description:</th>
    <th class="tHeader">Club URL:</th>
    <th class="tHeader">University/College name:</th>
    <th class="tHeader">University/College website:</th>
    <th class="tHeader">Club Captain</th>
    <th class="tHeader">Country/City:</th>
    </tr>
      [[#rows]]
        <tr>
        <td>[[clubname]]</td>
        <td>[[clubDescription]]</td>
        <td><a href="[[cluburl]]" target="_blank">[[cluburl]]</a></td>
        <td>[[uniname]]</td>
        <td><a href="[[website]]" target="_blank">[[website]]</a></td>
        <td>[[captain]]</td>
        <td>[[country]], [[city]]</td>
        </tr>
      [[/rows]]
  </table>
</script>



<script type="text/javascript">
      document.addEventListener('DOMContentLoaded', function() {
        var URL = "https://docs.google.com/spreadsheets/d/1iUpqXnh0g2EPRzQC5BVcCRVMJwg8Tu2_aGsgJHVw1Ns/edit?usp=sharing"
        Tabletop.init({key: URL, callback: showInfo, simpleSheet: true})
      })

      function showInfo (data) {
              var tableOptions = {
                "data": data,
                pagination: 10,
                "tableDiv": "#fullTable",
                "filterDiv": "#fullTableFilter",
                "templateID": "fullTable_template"
              }
          Sheetsee.makeTable(tableOptions)
        Sheetsee.initiateTableFilter(tableOptions)
      }
</script>
