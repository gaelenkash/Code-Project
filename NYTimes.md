**Simple Code Project**

In order to help get a better sense of your approach to coding and ability as a developer, I have designed a small code exercise. The goal of the exercise is to build a simple browser-based user interface for the publicly available NY Times "Top News" API. Users should be able to do keyword searches for articles, and to select the section of the newspaper to display articles from.

Your submission should be a serverless "single-page" solution that can be loaded from the local filesystem. You may include as many supporting files and assets as you like, but the finished project should be contained in a single zip archive or tarball. If you decide to use a framework that produces a compiled version of your code (such as React), be sure to include your original source files with your submission.

**What's Allowed**

- You may use any frameworks, libraries or third-party modules you wish. Your choice to use or not use third party tools is not going to impact your evaluation one way or the other. Just keep in mind that we want to be able to see your code, not your familiarity with React, Angular, jQuery, etc.
- You may include supporting assets. Feel free to include any stylesheets, images, or supporting source files in your project archive that it requires.
- If you do use any external libraries, you may use CDN urls for including them.

**What's Not Allowed**

- It should go without saying, but you cannot simply copy/paste a solution that you found on the internet. This should be original code written by you.
- Do not use a hosting provider or submit a link to a hosted version of your app. If the project cannot be loaded from a local file it is not going to be considered a functional solution.
- Other than the api, no external dependencies should be required for running the app locally. A stock browser is all that you can assume the end user has access to.

**Prerequisites**

You will need to request your own API key for access to the Top News service:

https://developer.nytimes.com/signup

Documentation for the service is located here:

https://developer.nytimes.com/top_stories_v2.json

**Requirements**

Your application should meet all the following requirements:

1. Provide a text search input that filters results. Searches should be case-insensitive and can match on any of the result attributes that you choose.
2. Provide a way for users to choose the displayed "section". The allowed values for the sections are listed in the API documentation.
3. Display no more than 10 initial results. You may optionally provide pager functionality for users to view more results, but this is not a requirement.

**For each result, display the following data:**

- Title of the article
- A link to the full article
- Abstract of the article
- Published date in month/day/year hour:minute am|pm tz format. For example: 9/15/2017 8:34 PM EDT
- Display total number of results that match current search.
- By default, display results from the "home" section

# Extra Credit

For a small bit of extra credit, display all the published dates in the Fiji time zone (FJT).


