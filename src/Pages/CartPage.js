import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { MainLayout, InnerLayout } from "../styles/Layout";
import Title from "../Components/Title";
export default function CartPage() {
    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)

    return (
        <MainLayout>
      <InnerLayout>
        <Title title={"Product"} span={"Product"} />
        <div className="row mr-4">
            <div className="col-md-12 mt-4">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ProductId</th>
                    <th>ProductName</th>
                    <th>ProductPrice</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  cart.map((c, index) => {
                      console.log(c)
                    return (
                        <tr key={c.id}>
                        <td>{++index}</td>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.price}</td>
                        <td>{c.qty}</td>
                        <td>{c.price * c.qty}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
      </InnerLayout>
    </MainLayout>
      );
}
