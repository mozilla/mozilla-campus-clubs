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
    <tr><th class="tHeader">Club name:</th><th class="tHeader">Club's Description:</th><th class="tHeader">University/College name:</th><th class="tHeader">University/College website:</th></tr>
      [[#rows]]
        <tr>
        <td>[[Clubname]]</td>
        <td>[[ClubDescription]]</td>
        <td>[[Uniname]]</td>
        <td>[[website]]</td>
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
