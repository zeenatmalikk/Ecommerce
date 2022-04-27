import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import "./Singleproduct.css";
import { useLocation } from "react-router";
import { publicRequest } from "../../RequestMethod";
import { addProduct } from "../../../Redux/CartRedux";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../Redux/ShoppingActionsToolkit"
const Singleproduct = ({addToCart}) => {
  const [open, setOpen] = useState(false);
  const [quantity, setquantity] = useState(1);
  const [product, setproduct] = useState({});
  const [size, setsize] = useState(null);
  console.log("sizeee", size);
  const [color, setcolor] = useState(null);
  console.log("color", color);

  const dispatch = useDispatch();
  const handleDialogBox = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  const id = ("location:", location.pathname.split("/")[2]);

  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setproduct(res.data);
      } catch (error) {}
    };
    getproduct();
  }, []);

  const handlequantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setquantity(quantity - 1);
    } else {
      setquantity(quantity + 1);
    }
  };

  // const handleCart = (id) => {
  //   //update Cart
  //   // dispatch(addProduct({ ...product, quantity }));
  //   dispatch(addToCart(id))
  // };

  return (
    <div>
      <Container style={{ padding: 0 }}>
        <Grid container>
          <Grid
            item
            md={5}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="single-img"
              src={product.img}
              alt=""
              width="80%"
              height="auto"
            />
          </Grid>
          <Grid item md={4} xs={12} className="single-info">
            <h1 className="title-p">{product.title}</h1>
            <p className="desc-p">{product.desc}</p>
            <div className="detail-p">
              <b>
                <p>Price</p>
              </b>
              <p>INR {product.price}</p>
            </div>
            <div className="detail-p">
              <b>
                <p>Color</p>
              </b>
              <p>{product.color}</p>
            </div>
            <div className="detail-p">
              <b>
                <p>Size:</p>
              </b>
              <select
                className="custom-select"
                onChange={(e) => setsize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="counter">
              <button
                className="quantity-btn"
                variant="contained"
                color="primary"
                onClick={() => handlequantity("inc")}
              >
                <i class="fas fa-plus"></i>
              </button>
              <p>{quantity}</p>
              <button
                className="quantity-btn"
                variant="contained"
                color="primary"
                onClick={() => handlequantity("dec")}
              >
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <div className="detail-p">
              <button
                className="size-guide"
                variant="outlined"
                color="primary"
                onClick={handleDialogBox}
              >
                Size Guide
              </button>
              <Dialog open={open} onClose={handleClose}>
                <CloseIcon
                  style={{ width: "100%", cursor: "pointer", color: "red" }}
                  onClick={handleClose}
                />

                <DialogContent>
                  <img src="https://d1qek42f5a2sdm.cloudfront.net/temp/cuploads/ap-south-1%3A6187b898-d6c8-4cec-8477-df02c3470770/sananightwear/products/1640344967936SIZE-CHART_400x400.JPG" />
                </DialogContent>
              </Dialog>
              <Button
                className="cart-add"
                variant="contained"
                color="primary"
                onClick={() => addToCart(product)}
                // onClick={() => addToCart(product.id)}
              >
                Add to Cart
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );

};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};
export default connect(null,mapDispatchToProps) (Singleproduct);
