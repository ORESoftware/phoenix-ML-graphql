'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Page");

function handleClick(_event, _self) {
  console.log("clicked!");
  return /* () */0;
}

function make(message, _children) {
  return {
          debugName: component.debugName,
          reactClassInternal: component.reactClassInternal,
          handedOffState: component.handedOffState,
          willReceiveProps: component.willReceiveProps,
          didMount: component.didMount,
          didUpdate: component.didUpdate,
          willUnmount: component.willUnmount,
          willUpdate: component.willUpdate,
          shouldUpdate: component.shouldUpdate,
          render: (function (self) {
              return React.createElement("button", {
                          onClick: Curry._1(self.handle, handleClick)
                        }, message);
            }),
          initialState: component.initialState,
          retainedProps: component.retainedProps,
          reducer: component.reducer,
          jsElementWrapped: component.jsElementWrapped
        };
}

exports.component = component;
exports.handleClick = handleClick;
exports.make = make;
/* component Not a pure module */
