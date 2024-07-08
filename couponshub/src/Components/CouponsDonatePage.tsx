import { ChangeEvent, useState } from "react";

interface Coupon{
    Category: string,
    Brand: string,
    Code: string
}

const initialCoupons: Coupon[] = [
    { Category: "Clothes", Brand: "Zara", Code: "SUMMER10" }
  ];

const DonateCoupon = () =>{
    const [couponsList, setCouponsList] = useState<Coupon[]>(initialCoupons);
    const [currentCoupon, setCurrentCoupon] = useState<Coupon>({
        Category: "",
        Brand: "",
        Code: "",
      });

    const addIntitalCoupon = () =>{
        const intitalCoupon:Coupon = {
            Category: "",
            Brand: "",
            Code: ""
        }
        setCurrentCoupon(intitalCoupon);
    }

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentCoupon((coupon) => ({...coupon, [event.target.name] : event.target.value}));
    }

    const submitHandler = () => {
        alert("Coupon submitted");
        setCouponsList((currentList) => [...currentList, currentCoupon!]);
        addIntitalCoupon();
    }

    return  <>
                <h1>The coupon that is useless to you can reduce someone's distance to buying their dream product</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <table>
                            <th>Enter your Coupon category</th>
                            <tr><input type="text" name="Category" placeholder="Enter coupon category" value ={currentCoupon?.Category} onChange={inputHandler}></input></tr>
                            <br/>
                            <th>Enter your Coupon Brand Name</th>
                            <tr><input type="text" name="Brand" placeholder="Enter coupon brand" value = {currentCoupon?.Brand} onChange={inputHandler}></input></tr>
                            <br/>
                            <th>Enter your Coupon Code</th>
                            <tr><input type="text" name="Code" placeholder="Enter coupon code" value = {currentCoupon?.Code} onChange={inputHandler}></input></tr>
                            <br/>
                            <button type="submit">Donate Coupon</button>
                        </table>
                    </div>
                </form>
                {couponsList.length > 0 && 
                    couponsList.map((coupon, index) => {
                    return <h1 key = {index}>{coupon.Brand}</h1>
                })}
            </>
}

export default DonateCoupon;