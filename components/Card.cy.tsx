import React from "react";
import Card from "./Card";

const DEFAULT_BUTTON_TEXT = "Explore More"

describe("<Card />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Card
        subtitle="ITALY"
        title="VENICE"
        paragraph="Venice, the capital of northern Italy's Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals."
        buttonUrl="https://fr.wikipedia.org/wiki/Venise#:~:text=Venise%20(en%20italien%20%3A%20Venezia%20%2F,et%20reli%C3%A9es%20par%20435%20ponts."
        buttonText={DEFAULT_BUTTON_TEXT}
        backgroundImageUrl="https://images.pexels.com/photos/3546189/pexels-photo-3546189.jpeg"
      />
    );
  });
});
