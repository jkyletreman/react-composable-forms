## Simple Mobile First Form with Hooks

```sh
TODO :// 
    -> Implement Redirect if state is missing and user request different route then /
```
##### Additional features:

- animations w/ React Spring

[Netlify](https://www.freecodecamp.org/news/how-to-deploy-a-react-application-to-netlify-363b8a98a985/) Deployment Steps

#### Issues
    - [gh-pages](https://jkyletreman.github.io/react-composable-forms/) not finding js files 

#### Hooks + React Router interactions

- surrounding a <button> with <Link> causes the <form onSubmit={handleSubmit}> to be overidden.

example:

```sh
    # handleSubmit will not fire
    <form onSubmit={handleSubmit}>
     <div className="submit">
        <Link to="/profile">
          <button type="submit">Submit</button>
        </Link>
      </div>
    </form>
```
```sh
    # handleSubmit will fire
    <form onSubmit={handleSubmit}>
     <div className="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
```
```sh
    # if you want to delay form submission, you cant use a button, that will trigger onSubmit from the form - workaround
    <div className="submit button">
        <div onClick={() => props.history.push("/profile")}>Preview</div>
    </div>
```
