import React from "react";
import PanierContext from "./panierContext";

import livres from "../livres";

class PanierProvider extends React.Component {
  state = {
    panier: {},
    livres,
    prixTotal: 0
  };

  componentDidMount() {
    // Appel API
    // this.setState({ livres });
  }

  render() {
    return (
      <PanierContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </PanierContext.Provider>
    );
  }
}

export default PanierProvider;
