**Text content from the Beige Book reports of the US Federal Reserve System**

The Beige Book is published by the Federal Reserve System every month or two and summarizes economic reports from each of the 12 districts.
The latest reports are available at [Beige Book reports](https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm);
however, this data is pulled from the [Beige Book Archive](https://www.federalreserve.gov/monetarypolicy/beige-book-archive.htm).
The archive's versions go back further in time--to 1970--and have more regular HTML formatting. Recent reports are available
as PDFs but they suffer from hyphenation breaks and possibly other artifacts since PDF is more of a display format than a content format.
HTML is not great either, and I've done some cleaning. The content is available in two different forms.
* Fed_Beige_Book.csv has one row per report.
* Fed_Beige_Book_by_section.csv has one row per section.

Cleaning steps included:
* Removed non-content, such as web page navigation.
* Removed formatting. It was rare but &lt;i&gt; and &lt;em&gt; were sometimes used such as for phrases like "de facto". This step also removed &lt;p&gt; and &lt;br&gt; tags, for better or for worse.
* Preserved marked headings. Headings were marked as either &lt;b&gt; or &lt;strong&gt;.
    * In Fed_Beige_Book.csv, the headings are part of the content but annotated with {{ and }}.
    * In Fed_Beige_Book_by_section.csv, there are separate columns for the heading tage and for the heading itself.
* In Fed_Beige_Book_by_section.csv, when the content started without a section head I used "Summary (implicit)" as the section head.
* Expanded HTML entities, except all quotation mark and apostrophe variations were converted to the ASCII versions.
* Removed a few HTML typos, such as a double-endtag: &lt;p&gt;&gt;

Both files have the following fields
* filename: the file name within https://www.minneapolisfed.org/beige-book-reports/. Add ".html" to use.
* report date: extracted from the file itself (but not included in the content).
* district: the name of one of the 12 districts or "National" for the national summary.
* text: the content
