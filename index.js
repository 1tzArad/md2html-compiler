const fs = require('fs')
const path = require('path')
const { marked } = require('marked')

const markdownDirectoryPath = path.join(__dirname, 'Markdown')
const outputDirectoryPath = path.join(__dirname, 'Html')

fs.readdirSync(markdownDirectoryPath).forEach((markdown) => {
    if(markdown.endsWith('.md')){
      const markedDown = fs.readFileSync(markdownDirectoryPath + '/' + markdown, 'utf-8');
    const markdownParts = markdown.split(/\./)
    fs.appendFileSync(outputDirectoryPath + '/' + markdownParts[0] + '.html', `<!DOCTYPE html>
            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Markdown Viewer</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 20px;
      }
    </style>
  </head>
  <body>
    <div id="content">
      ${marked(markedDown)}
    </div>
  </body>
</html>`, (err) => {
        throw new Error('there was an error while creating compiled file!\n', err)
    })
    }
})





