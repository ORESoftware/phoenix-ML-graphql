'use strict';

var Page = require("./Page.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, Page.make("Hello!", [])), "index");

/*  Not a pure module */
