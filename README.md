## Open the repo of the project and run:

- npm install
- npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Solutions to the exercise:

- Exercise1: visit the url http://localhost:3000/
- Exercise2: visit the url http://localhost:3000/launchpad/5e9e4502f5090995de566f86 (where last part of the URL is the id param of the launchpad passed to the function)
- Exercise3: visit the url http://localhost:3000/starlinks

### Comments:

- Exercise1: The instructions where to use HTML and CSS. Since I wanted to use React-router to display different solutions, I used the library "styled-components". Why? Because this library is using HTML and CSS tags in react. As for example: 

``` jsx
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 0px 0px rgba(235,235,235,0.5);
    height: 145px;
    margin-bottom: 25px;
    padding: 20px;
`
```
