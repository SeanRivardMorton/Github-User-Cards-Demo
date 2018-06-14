# Github language guesser & html/css demonstration

I built a rails project that delivers a vue app to users. The Rails app doesn't really do that much other than deliver the API key to vue.

On a sidenote, the linked github documentation accounced that they recently released v4 of their api, using GraphQL to access it. I used graphql instead of a traditional approach. 

Considerations:
I could have used a graphql gem for ruby, though I thought it would be more responsive if it were in the front-end.

## Take away

Adding Vue apps to pre-existing rails apps is certainly possible.

# Project Set up 
> Getting the Code
```bash
$ git clone https://github.com/SeanRivardMorton/Github-User-Cards-Demo.git
```

> Getting ruby environment set-up
```bash
$ bundle install
```

> Getting Webpacker set-up

```bash
$ npm install
## Updated from earlier instructions of bin/npm install
```

> Starting the Server
```bash
$ GITHUB_ACCESS_TOKEN=[put your token here] bin/rails server
```

## Considerations Made Building the App

# No Tests ??
Where are they?
> I will be the first to admit, I am not fluent in TDD, or setting up testing suites in javascript, let alone ruby. For the scope of this project I elected not to include tests.

# Component Inheritance
Why are no props being passed?
<strong><em>Ex</em></strong> <em>GitHubBrowser</em> -> <em>GitHubBrowserSearch</em>
> I didn't want to set-up vuex, because I thought it would be out of scope, but in hingsight it would have been a good idea.
