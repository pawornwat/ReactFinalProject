import React, { useEffect, useState } from "react";
import { Table, Image, Badge, Spinner, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { addToCart } from "../redux/actions/cartAction";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import { useDispatch, useSelector } from "react-redux";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart)
  const total = useSelector((state) => state.cartReducer.total)

  const getData = async () => {
    try {
      setLoading(true); // เริ่มหมุนติ้วๆตรงนี้
      const resp = await axios.get("https://api.codingthailand.com/api/course");
      // console.log(resp.data)
      setProduct(resp.data.data);
    } catch (error) {
      // console.log(error.response)
      setError(error);
    } finally {
      setLoading(false); // หยุดตรงนี้ทุกกรณีที่ทำเสร็จว่าว่าจะ try หรือ catch ก็ตาม
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, plese try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

    const addCart =(p)=>{
      console.log(p);
      const product = {
        id:p.id,
        name:p.title,
        price:p.view,
        qty:1
      }
      dispatch(addToCart(product,cart))
    }

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
                  <th>Title</th>
                  <th>Detail</th>
                  <th>Created Date</th>
                  <th>View</th>
                  <th>Picture</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {product.map((p, index) => {
                  return (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.title}</td>
                      <td>{p.detail}</td>
                      <td>{p.date}</td>
                      <td>
                        <Badge variant="success">{p.view}</Badge>
                      </td>
                      <td>
                        <Image src={p.picture} rounded width={60} />
                      </td>
                      <td>
                        <Button variant="outline-warning" className="ml-2" onClick={() => addCart(p)}>Buy</Button>
                      </td>
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
