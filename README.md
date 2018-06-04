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

$ bundle install
```

> Getting Webpacker set-up
I was having issues with npm and yarn, but doing it in this order got it to work.
```bash
$ bin/yarn install
```

```bash
$ bin/npm install
```

> Starting the Server
```bash
$ GITHUB_ACCESS_TOKEN=[put your token here] bin/rails server

```

