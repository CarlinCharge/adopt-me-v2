const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Jerry"),
        React.createElement("h2", {}, "dog"),
        React.createElement("h2", {}, "Bichon Frise")
    ])
}

const App = () => {
                return  React.createElement (
                    "div", 
                    {},
                    React.createElement("h1", {}, "Adopt Me!")
                );
            };
            ReactDOM.render(
                React.createElement(App),
                document.getElementById("root")
            );