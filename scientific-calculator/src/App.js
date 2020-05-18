import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { evaluate, abs, sqrt, pow } from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      showScientific: false,
      themeMode: "light",
    };
  }

  switchThemes = (theme) => {
    this.setState({
      themeMode: theme,
    });
  };

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: evaluate(this.state.input) });
  };

  squaringFunction = (value) => {
    if (value === "Square") {
      this.setState({
        input: pow(this.state.input, 2),
      });
    } else {
      this.setState({
        input: sqrt(this.state.input),
      });
    }
  };

  render() {
    return (
      <div
        className={
          this.state.themeMode === "light" ? "app appLight" : "app appDark"
        }
      >
        <div className="calculator-wrapper">
          <Input theme={this.state.themeMode} input={this.state.input}></Input>
          <div className="row">
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              1
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              2
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              3
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              +
            </Button>
          </div>
          <div className="row">
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              4
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              5
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              6
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              -
            </Button>
          </div>
          <div className="row">
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              7
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              8
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              9
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              *
            </Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              0
            </Button>
            <Button
              theme={this.state.themeMode}
              handleClick={() => this.handleEqual()}
            >
              =
            </Button>
            <Button theme={this.state.themeMode} handleClick={this.addToInput}>
              /
            </Button>
          </div>
          {this.state.showScientific ? (
            <div className="row">
              <Button
                theme={this.state.themeMode}
                handleClick={() => {
                  this.setState({
                    input:
                      parseInt(this.state.input) > 1
                        ? -this.state.input
                        : abs(this.state.input),
                  });
                }}
              >
                Sign
              </Button>
              <button
                type="button"
                className={"active btn btn-wrapper"}
                onClick={() => {
                  this.squaringFunction("Square");
                }}
              >
                Square
              </button>
              <button
                type="button"
                className={"active btn btn-wrapper"}
                onClick={() => {
                  this.squaringFunction("SquareRoot");
                }}
              >
                Sqrt
              </button>
            </div>
          ) : null}
          <div className="row">
            {this.state.showScientific ? (
              <button
                type="button"
                className={"active btn-wrapper"}
                onClick={() => {
                  this.setState({
                    showScientific: false,
                  });
                }}
              >
                Simple Mode
              </button>
            ) : (
              <button
                type="button"
                className={"active btn-wrapper"}
                onClick={() => {
                  this.setState({
                    showScientific: true,
                  });
                }}
              >
                Scientific Mode
              </button>
            )}
          </div>
          <div className="row">
            <button
              type="button"
              className={"active btn btn-wrapper"}
              onClick={() => {
                this.switchThemes("light");
              }}
            >
              Light Mode
            </button>
            <button
              type="button"
              className={"btn btn-wrapper"}
              onClick={() => {
                this.switchThemes("dark");
              }}
            >
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
