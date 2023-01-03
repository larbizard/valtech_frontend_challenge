import React from "react";
import Card from "./Card";

const DEFAULT_BUTTON_TEXT = "Explore More";

describe("<Card />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Card
        subtitle="FRONT-END"
        title="valtech_"
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        buttonUrl="https://www.valtech.com/fr-fr/"
        buttonText={DEFAULT_BUTTON_TEXT}
        backgroundImageUrl="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg"
        visibleParagraph={true}
        hover={true}
      />
    );
  });
});
