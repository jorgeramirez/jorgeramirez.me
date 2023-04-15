import React from "react"

export default ({ title, children }) => (
  <div className="bg-none pt-4 mb-5 pb-0 jumbotron">
    <h1>
      {title}<span>{children}</span>
    </h1>
  </div>
)
