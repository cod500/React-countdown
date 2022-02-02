import React from 'react';
import '../styles/product.css';

export default function Product() {
    return (
        <>
            <header className="--bg-dark">
                <nav className="container">
                    <h2 className="--text-md --text-light" >DeGallShop</h2>
                </nav>
            </header>
            <section>
                <div className="container product">
                    <div className="product-img">
                        <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
                    </div>
                    <div className="product-des">
                        <h3 className="--text-md --color-danger" >OG Jordan 1's</h3>
                        <p className="--fw-bold">$350</p>
                        <p className="--text-sm" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum iure, voluptatibus eos vitae voluptatem exercitationem, aperiam blanditiis impedit suscipit obcaecati ad quae cum earum quas consequatur vero ea voluptas quis?</p>
                        <form action="">
                            <div className="product-form --form-control">
                                <label htmlFor="">Color</label>
                                <select>
                                    <option>Choose an option</option>
                                    <option>Bred</option>
                                    <option>Carolina Blue</option>
                                </select>
                            </div>
                            <div className="product-form --form-control">
                                <label htmlFor="">Size</label>
                                <select>
                                    <option>Choose an option</option>
                                    <option>Bred</option>
                                    <option>Carolina Blue</option>
                                </select>
                            </div>
                            <div className="product-form --form-control">
                                <label htmlFor="">Quantity</label>
                                <select>
                                    <option>Choose an option</option>
                                    <option>Bred</option>
                                    <option>Carolina Blue</option>
                                </select>
                            </div>
                            <button className="--btn --btn-primary --btn-block" >Add to Cart</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
