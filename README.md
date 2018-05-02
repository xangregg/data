# data

**AmericanMoviesByYear.csv**
* Movie titles from Wikipedia's [Lists of American Movies](https://en.wikipedia.org/wiki/Lists_of_American_films), 1900-2017

**Billion-Dollar Distasters.csv**
* Slightly cleaned data from [Billion-Dollar Weather and Climate Disasters: Table of Events]( https://www.ncdc.noaa.gov/billions/events/US/1980-2017)
* Referenced by 538 story, [Hurricane Harvey’s Impact — And How It Compares To Other Storms](https://fivethirtyeight.com/features/hurricane-harveys-impact-and-how-it-compares-to-other-storms/)
* Added derived columns that attempt to create shortened event names for graph point labeling.
* Examples:
* "Hurricane Matthew October 2016" -> "Matthew 2016"
* "Western Drought 2015" -> "Drought 2015"
* "Colorado Flooding September 10-16 2013" -> "Flooding 2013"
* "Colorado Hail Storm and Central Severe Weather May 2017" -> "Severe Weather 2017"
* "South/ Southeast Severe Weather March 2017" -> "Severe Weather 2017 2"

**Cape Town rainfall averages**
* capetownrainfallsince1977.csv is data from the CSAG JSON file: http://cip.csag.uct.ac.za/monitoring/gsod/data/688160_gsod_pr_day_1977-2018.json  
   See graphs at http://www.csag.uct.ac.za/current-seasons-rainfall-in-cape-town/
* capetown_rainfallsince.csv scraped from the graph in [Guardian story on 3 year drought](https://www.theguardian.com/cities/ng-interactive/2018/feb/03/day-zero-how-cape-town-running-out-water)  
   So the values are only approximate.  
   I did a couple [remakes](https://twitter.com/xangregg/status/959906500725673985) on Twitter

**MosquitoTrendsData.csv**
* Google Trends mosquito search data used for [state grid blog post](http://blogs.sas.com/content/jmp/2016/05/24/remaking-mosquito-trends-chart/)

**wiseparatext.csv**
* Timing test results for [log scale bars makeover blog post](http://blogs.sas.com/content/jmp/2016/06/29/graph-makeover-bars-on-a-log-scale/)

**World rail line colors**
 * Rail colors shown in [Nicholas Rougeux](https://twitter.com/rougeux)'s [Color of Rails](https://www.c82.net/work/?id=355) project
 * With changes as documented in [world_rail_line_colors.md](world_rail_line_colors.md)
 
