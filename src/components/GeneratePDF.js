import React, { Component } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

class GeneratePDF extends Component {
  state = {};

  generatePDF = () => {
    const orientation = "portrait"; // portrait or landscape
    const unit = "pt"; //pt = points
    const size = "A4";
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(20);

    const title = "Your Shopping List";
    const headers = [["Nº", "PRODUCT", "CATEGORY", "QUANTITY", "UNITS"]];

    const products = this.props.products.map((product, i) => [
      i,
      product.name,
      product.category,
      product.quantity,
      product.unit,
    ]);

    let content = {
      startY: 60,
      headerStyles: {
        fontStyle: "bold",
        fillColor: [216, 131, 143],
      },
      styles: {
        tableWidth: "auto",
        halign: "center",
      },
      head: headers,
      body: products,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("shopping-list.pdf");
  };

  render() {
    return (
      <div className="print">
        <button onClick={this.generatePDF}>Print your shopping list</button>
      </div>
    );
  }
}

export default GeneratePDF;
