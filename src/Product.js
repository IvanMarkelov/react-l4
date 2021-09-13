import React from "react";
import "./product.css";
import { Component } from "react";

export default class Product extends Component {
  state = {
    products: [],
    tempProduct: { id: 0, name: "", price: 0 },
  };

  componentDidMount() {
    this.setState({
      products: [
        { id: 1, name: "Товар 1", price: 1000 },
        { id: 2, name: "Товар 2", price: 2000 },
        { id: 3, name: "Товар 3", price: 3000 },
        { id: 4, name: "Товар 4", price: 4000 },
        { id: 5, name: "Товар 5", price: 5000 },
      ],
      tempProduct: { id: 0, name: "", price: 0 },
    });
  }

  updateTempProduct = (e) => {
    let tempProductState = this.state.tempProduct;
    const val = e.target.value;
    switch (e.target.className) {
      case "id":
        tempProductState.id = val;
        break;
      case "name":
        tempProductState.name = val;
        break;
      case "price":
        tempProductState.price = val;
        break;
      default:
        break;
    }
    this.setState({
      tempProduct: tempProductState,
    });
  };

  create = (id, name, price) =>
    this.setState({
      products: [...this.state.products, { id, name, price }],
    });

  update = (targetId, name, price) =>
    this.setState({
      products: this.state.products.map((product) =>
        product.id !== targetId
          ? product
          : {
              id: targetId,
              name,
              price,
            }
      ),
    });

  delete = (targetId) =>
    this.setState({
      products: this.state.products.filter(({ id }) => id !== targetId),
    });

  render() {
    const { products } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th className="products_th">#</th>
              <th className="products_th">Название</th>
              <th className="products_th">Цена</th>
              <th className="products_th">Действия</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ id, name, price }) => (
              <tr key={id}>
                {/* <tr> */}
                <td className="products_td">{id}</td>
                <td className="products_td">{name}</td>
                <td className="products_td">{price}</td>
                <td className="products_td">
                  <button
                    className="products_btn"
                    onClick={() =>
                      this.update(
                        id,
                        this.state.tempProduct.name,
                        this.state.tempProduct.price
                      )
                    }
                  >
                    Изменить
                  </button>
                  <button
                    className="products_btn"
                    onClick={() => this.delete(id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="products_td">
                <input
                  type="number"
                  className="id"
                  value={this.state.tempProduct.id}
                  onChange={this.updateTempProduct}
                />
              </td>
              <td className="products_td">
                <input
                  type="text"
                  value={this.state.tempProduct.name}
                  className="name"
                  onChange={this.updateTempProduct}
                />
              </td>
              <td className="products_td">
                <input
                  type="number"
                  className="price"
                  value={this.state.tempProduct.price}
                  onChange={this.updateTempProduct}
                />
              </td>
              <td className="products_td">
                <button
                  className="products_btn"
                  onClick={() =>
                    this.create(
                      this.state.tempProduct.id,
                      this.state.tempProduct.name,
                      this.state.tempProduct.price
                    )
                  }
                >
                  Добавить
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
