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

**internet_speeds_summer_2018.csv**
* Results from downloading a 10MB file 3 times an hour over 5+ weeks on my "up to 60Mb/s" connection.
* A few graphs tweeted at https://twitter.com/xangregg/status/1028665493689913344.

**MosquitoTrendsData.csv**
* Google Trends mosquito search data used for [state grid blog post](http://blogs.sas.com/content/jmp/2016/05/24/remaking-mosquito-trends-chart/)

**wiseparatext.csv**
* Timing test results for [log scale bars makeover blog post](http://blogs.sas.com/content/jmp/2016/06/29/graph-makeover-bars-on-a-log-scale/)

**shirt_sponsorship.csv**
* Inferred data on Premier league shirt sponsorship over time from [this FT article](https://www.ft.com/content/61f3c8fc-9c86-11e8-9702-5946bae86e6d). Use for experimenting with alternates to streams.

**travel_motivation_recoded_stacked.csv**
* Recoded subset of [survey responses from /r/travel](https://www.reddit.com/r/travel/comments/99foe4/1000000_rtravel_subscriber_survey_results/).
* Includes a few demographic fields and responses to the question "What motivates you to travel?"
* This was a free-form text field. I recoded the responses into common terms and expanded multiple responses into multiple rows (with same respondent id).
* For instance, "new cultures" could have been originally "different cultures", "see new cultures", "other lifestyles", ...
* Surely, some bias or error was introduced during the recoding process.
* I made a slopegraph of the [responses by gender](https://twitter.com/xangregg/status/1052718677299273728).

**World rail line colors**
 * Rail colors shown in [Nicholas Rougeux](https://twitter.com/rougeux)'s [Color of Rails](https://www.c82.net/work/?id=355) project
 * With changes as documented in [world_rail_line_colors.md](world_rail_line_colors.md)
 
