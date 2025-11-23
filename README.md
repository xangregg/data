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

**crossword_times.csv**
* Four years of my own results for the New York Times daily crossword. Includes, time spent and whether I successfully completed the puzzle or not.
* I made some graphs in a [Twitter thread](https://twitter.com/xangregg/status/1133026668178747394)
* Latest graphs with [all four years of data](https://twitter.com/xangregg/status/1505575499338330114)

**Du Bois Georgia Map 1899**
* Data shown on the [map by W.E.B. Du Bois](http://www.loc.gov/pictures/collection/anedub/item/2013650439/) of land ownership by blacks in 1899.
* Note that the counties are a little different from today. You can find historical shapefiles at the [Atlas of Historical County Boundaries](https://publications.newberry.org/ahcbp/pages/Georgia.html) at Newberry Library.
* My reproduction is on Twitter at https://twitter.com/xangregg/status/1094401138353418240.

**greenland_surface_melt.csv**
* Data behind National Snow and Ice Data Center's [Greenland surface melt chart](https://nsidc.org/greenland-today/greenland-surface-melt-extent-interactive-chart/).
* Missing days have been interpolated and a separate column indicates which dates were interpolated.
* A few graphs tweeted at https://twitter.com/xangregg/status/1141133285088735233.

**internet_speeds_summer_2018.csv**
* Results from downloading a 10MB file 3 times an hour over 5+ weeks on my "up to 60Mb/s" connection.
* A few graphs tweeted at https://twitter.com/xangregg/status/1028665493689913344.

**journal.pone.0216362.s003.csv**
* Data from [Battle for the thermostat: Gender and the effect of temperature on cognitive performance](https://journals.plos.org/plosone/article/authors?id=10.1371/journal.pone.0216362)
* Converted form Stata DTA from to CSV
* Added a few derived fields
  * Added rounded version of temp field, so "19.1000003814697" is "19.1". I'm guessing the Stata file was compressed to use single precision floating point numbers.
  * Computed wordscore for the word problem, since the participants were rewarded by total score rather than number complete.
  * Added Gender=F|M from Male=0|1
  * Added "Temp Category" to combine indicator variables: cool, normal, warm, hot

**MosquitoTrendsData.csv**
* Google Trends mosquito search data used for [state grid blog post](http://blogs.sas.com/content/jmp/2016/05/24/remaking-mosquito-trends-chart/)

**Pseudovirus_panel_fig1b.csv**
* Scraped data for 6 beeswarms [blog post](https://rawdatastudies.com/2025/11/22/beeswarm-attack/)

Pseudovirus_panel_1b.csv
**pubdelays100.csv**
* 100 publication delays for research with positive (70) and negative (30) results. Approximated from CDF graph in JAMA paper
[Delays in the Publication of Important Clinical Trial Findings in Oncology](https://jamanetwork.com/journals/jamaoncology/fullarticle/2678095)

**scented candle reviews.csv**
* Selected features from 50,000 scented candle reviews across 20+ products
* Features: 0 or 1 indicating whether review title or text included selected terms
  * no smell narrow: no smell|scent
  * no smell wide: no|zero|0|nothing smell|scent|fragrance|aroma
  * bad smell: bad|awful|terrible smell|scent|fragrance|aroma
  * broken: broken|shattered
  * overwhelm: overwhelm|overpower
  * artificial: artificial|synthetic
* Related [tweeted charts](https://twitter.com/xangregg/status/1543273273898696707)
* Note: Amazon merges reviews for some candles.
  * Yankee Candle Balsam & Cedar includes White Christmas
  * Yankee Candle Vanilla Cupcake includes Apple Pumpkin
  * Yankee Candle Pineapple Cilantro includes Alfresco Afternoon
  * Yankee Candle Sage & Citrus includes Honey Clementine
  * Yankee Candle Pink Sands includes Calm & Quiet Place
  * Chesapeake Bay Balance+Harmony includes Strength+Energy

**shirt_sponsorship.csv**
* Inferred data on Premier league shirt sponsorship over time from [this FT article](https://www.ft.com/content/61f3c8fc-9c86-11e8-9702-5946bae86e6d). Use for experimenting with alternates to streams.

**travel_motivation_recoded_stacked.csv**
* Recoded subset of [survey responses from /r/travel](https://www.reddit.com/r/travel/comments/99foe4/1000000_rtravel_subscriber_survey_results/).
* Includes a few demographic fields and responses to the question "What motivates you to travel?"
* This was a free-form text field. I recoded the responses into common terms and expanded multiple responses into multiple rows (with same respondent id).
* For instance, "new cultures" could have been originally "different cultures", "see new cultures", "other lifestyles", ...
* Surely, some bias or error was introduced during the recoding process.
* I made a slopegraph of the [responses by gender](https://twitter.com/xangregg/status/1052718677299273728).

**tukey_EDA_7.8_coal.csv**
* Coal production data from John Tukey's 1977 book Exploratory Data Analysis, for time series smoothing
* Includes two other overlapping sources: coal census -1956 and EIA 1949-.
* The "combined" column uses data from the other sources for years where Tukey's table doesn't match his graphs

**vaccine_safety_expressing, vaccine_safety_tcell_secretions**
* Data shown in Figure 2 of Covid-19 vaccine safety experiment paper: https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)31208-3/fulltext
* scraped from PDF after converting to SVG, so should be high resolution and complete, but...
* For the secretions scatter plots, each combination should have 36 dots, but the Day 0 groups are missing a few. Most values for those groups are clustered at the bottom of the scale so possibly they are clipped or omitted for space. Or maybe I made a mistake.
* The pies show 7 of the 8 possible combinations of expressions. Not sure if the all negative category is omitted because it's empty or because it's uninteresting.
* Proportions multiplied by 36 do not generally match integers. Seems like they should.

**vitamin d survival.csv.csv**
* Data digitized from scatterplot in vitamin D study: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0239799
* Some [make-over charts](https://twitter.com/xangregg/status/1311427226181734400) I posted to Twitter

**wiseparatext.csv**
* Timing test results for [log scale bars makeover blog post](http://blogs.sas.com/content/jmp/2016/06/29/graph-makeover-bars-on-a-log-scale/)

**World rail line colors**
 * Rail colors shown in [Nicholas Rougeux](https://twitter.com/rougeux)'s [Color of Rails](https://www.c82.net/work/?id=355) project
 * With changes as documented in [world_rail_line_colors.md](world_rail_line_colors.md)
 
