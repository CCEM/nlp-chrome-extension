# Reddex
A Chrome extension for evaluating the tone of Reddit comments.

This project identifies and evaluates reddit comments for tone (positivity, negativity, and objectivity). We do this in two parts: a Chrome browser extension and a web application. Our extension will allow the user the option of evaluating each comment when they visit a reddit comment thread by clicking on the extension icon. The tone is represented by highlighting the background color with red for negative comments, green for positive, and grey for neutral. Particularly positive comments are a deeper green while the particularly negative comments are more red. By right clicking on the icon the user can find a link back to our web application, where they can see further information about the history of the pages that have been evaluated. Behind the scenes, our extension was built in HTML, CSS and JavaScript which passes the information to a Python server and database that parses the page text and returns information on the language tone. We are using an NLTK library called Vader for these evaluations. Our web app was built using the Pyramid framework.

![](http://i.imgur.com/BYsqRDA.png)

## Development setup

After cloning the repo:

```sh
  - navigate to chrome://extensions in your Chrome browser
  - click on the button that says 'Load unpacked extension...'
  - navigate to the 'extension' directory and upload it
  - make updates to the code
  - refresh the chrome://extensions page or click the reload link next to the exension listing
```

## Release History

* 1.0.0
    * The first proper release
    * CHANGE: Production Ready
* 0.0.2
    * Work in progress

## Meta

- W-Ely Paysinger – [https://github.com/W-Ely/github-link](https://github.com/W-Ely) – paysinger@gmail.com
- Morgan Nomura – [https://github.com/morganelle/github-link](https://github.com/morganelle) – morganelle@gmail.com
- Chris Hudson – [https://github.com/CaHudson94/github-link](https://github.com/CaHudson94) – c.ahudson84@gmail.com
- Carlos Cadena – [https://github.com/carloscadena/github-link](https://github.com/carloscadena) – cs.cadena@gmail.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

## Contributing

1. Fork it (https://github.com/CCEM/nlp-chrome-extension.git)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Attribution

Big thank you to the VADER team:
nltk.sentiment.vader

Hutto, C.J. & Gilbert, E.E. (2014). VADER: A Parsimonious Rule-based Model for
Sentiment Analysis of Social Media Text. Eighth International Conference on
Weblogs and Social Media (ICWSM-14). Ann Arbor, MI, June 2014.